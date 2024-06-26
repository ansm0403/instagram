import React from 'react'
import {  Post } from '../model/post'
import Image from 'next/image';
import PostUser from './PostUser';
import ActionBar from './ActionBar';
import Avatar from './Avatar';
import useFullPost from '../hook/post';


type Props = {
    post : Post;
}

export default function PostDetail({post} : Props) {
    const {id, userImage, username, image} = post;
    const {post : data, postComment} = useFullPost(id);
    const comments = data?.comments;
    console.log(comments);

    return (
      <section className='flex w-full h-full'>
        <div className='relative basis-3/5'>
            <Image 
                className='object-cover'
                src = {image}  
                alt = {`photo by ${username}`} 
                fill
                sizes = '650px '
                priority 
            />
        </div>
        <div className='w-full basis-2/5 flex flex-col'>
            <PostUser image = {userImage} username = {username}/>        
            <ul className='border-t border-gray-200 h-full overflow-y-auto p-4 mb-1'>
                {comments && comments.map((comment, index)=>{
                    return (
                        <li key = {index} className='flex items-center mb-1'>
                            <Avatar 
                                image = {comment.image} 
                                size = 'small' 
                                highlight={comment.username === username} 
                            />
                            <div className='ml-2'>
                                <span className='font-bold mr-1'>{comment.username}</span>
                                <span>{comment.comment}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <ActionBar post={post} onComment = {postComment}/>
           
        </div>
      </section>
    )
}
