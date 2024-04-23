import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { dislikePost, likePost } from "@/app/service/posts";
import { follow, unfollow } from "@/app/service/user";
import { withSessionUser } from "@/app/util/session";

export async function PUT(req : NextRequest){
    
   return withSessionUser(async (user) => {
        const {id : targetId, follow : isFollow} = await req.json();

        if(!targetId || isFollow === undefined) {
            return new Response('Bad Request', {status : 400});
        }

        const request = isFollow ? follow : unfollow;

        return request(user.id, targetId)
        .then(res => NextResponse.json(res))
        .catch(error => new Response(JSON.stringify(error), {status : 500}))
   })
}