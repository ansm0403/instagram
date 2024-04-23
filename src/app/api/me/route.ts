
import { getUserByUsername } from '@/app/service/user';
import { NextResponse } from 'next/server';
import { withSessionUser } from '@/app/util/session';

export async function GET(request:Request) {
    
    return withSessionUser(async (user)=>{
        return getUserByUsername(user.username)
        .then(data=>NextResponse.json(data))
    })
   
}
