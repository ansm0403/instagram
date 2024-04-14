import React from 'react'
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getFollowingPostsOf } from '@/app/service/posts';

export async function GET() {
    const session = await getServerSession(authOptions)
    const user = session?.user;
     
    if(!user){
        return new Response('Authentication Error', {status : 401})
    }

    return getFollowingPostsOf(user.username)
    .then(data=>NextResponse.json(data))
}
