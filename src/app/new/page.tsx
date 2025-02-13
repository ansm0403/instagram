import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import NewPost from '../components/NewPost';
import { authOptions } from '../auth/authOptions';

export const metadata : Metadata = {
  title : 'New Post', 
  description : 'Create New Post'
}

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if(!session?.user){
    redirect('/auth/signin');
  }
  return (
    <NewPost user = {session.user} />
  )
}
