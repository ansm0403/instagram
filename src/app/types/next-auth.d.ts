import NextAuth, {DefaultSession} from 'next-auth';
import { AuthUser } from '../model/user';

declare module 'next-auth' {
    interface Session{
        user : AuthUserser
    }
}