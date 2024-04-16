import UserPost from '@/app/components/UserPost';
import UserProfile from '@/app/components/UserProfile';
import { getUserProfile } from '@/app/service/user';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'

type Props = {
    params : {username : string}
}
const getUser = cache(async (username:string)=> getUserProfile(username));

export default async function UserPage({params : {username}} : Props) {
  
    const user = await getUser(username);

    if(!user){
        notFound();
    }

    return (
        <section className='w-full'>
            <UserProfile user={user} />
            <UserPost user={user} />
        </section>
    )
}

export async function generateMetadata({params : {username}} : Props) : Promise<Metadata> {
    const user = await getUser(username);
    return {
        title : `${user?.name} (@${user?.username}) Instagram`,
        description: `${user?.name}'s all posts `
    }
}