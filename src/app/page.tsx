
import FollowingBar from "./components/FollowingBar";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "./auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = session?.user;

  if (!user){
    redirect('/auth/signin');
  }

  return (
    <section className = 'flex flex-col md:flex-row max-w-[850px] p-4'>
      <div className = 'w-full basis-3/4 min-h-0'>
        <FollowingBar />
        <PostList />
      </div>
      <div className = 'basis-1/4 ml-8'>
        <SideBar user={user} />
      </div>
    </section>
  );
} 
