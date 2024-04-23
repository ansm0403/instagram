import React from 'react'
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import { Post } from '../model/post';
import PostGridCard from './PostGridCard';
import usePosts from '../hook/posts';

export default function PostGrid() {
    const {posts, isLoading } = usePosts();
    console.log(posts);
    return (
        <div className='w-full text-center'>
            {isLoading && <GridLoader />}
            <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
                {posts && posts.map((post, index) => 
                    <li key = {post.id}>
                        <PostGridCard post ={post} priority = {index < 6} />
                    </li>
                )}
            </ul>
        </div>
    )
}
