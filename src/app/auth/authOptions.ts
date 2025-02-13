import { addUser } from "@/app/service/user"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks : {
    async signIn({user : {id, name, image, email}}){
      if(!email){
        return false
      }
      addUser({
        id, 
        name : name || '', 
        image, 
        email, 
        username : email?.split('@')[0],
      })
      return true
    },
    async session({session, token}) {
      const user = session?.user;
      if(user) {
        session.user = {
          ...user,
          username : user.email?.split('@')[0] || '',
          id : token.id as string,
        }
      }
      return session
    },
    async jwt({token, user}){
      if(user){
        token.id = user.id;
      }
      return token;
    }
  },
  pages : {
    signIn : '/auth/signin',
  },
}
