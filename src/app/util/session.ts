import { getServerSession } from "next-auth";
import { AuthUser } from "../model/user";
import { authOptions } from "../auth/authOptions";

export async function withSessionUser(
    handler : (user:AuthUser) => Promise<Response>
) : Promise<Response>{
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if(!user) {
        return new Response('Authentication Error', {status : 400});
    }

    return handler(user);
}