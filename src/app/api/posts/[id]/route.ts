import React from 'react'
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { getFollowingPostsOf, getPost } from '@/app/service/posts';
import { authOptions } from '../../auth/[...nextauth]/route';
import { withSessionUser } from '@/app/util/session';

type Context = {
    params : {id : string}
}

export async function GET(request : NextRequest, context : Context) {
    
    return withSessionUser(async (user) => {
        return getPost(context.params.id)
        .then((data)=>NextResponse.json(data))
    })
}
