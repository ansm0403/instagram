'use client'

import React, { useState } from 'react'
import { Comment, Post } from '../model/post';
import Avatar from './Avatar';
import Image from 'next/image'
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPortal from '../ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUser from './PostUser';
import usePosts from '../hook/posts';

type Props = {
    post : Post;
    priority? : boolean
}

export default function PostListCard({post, priority = false} : Props) {
    const [openModal, setOpenModal] = useState(false);
    const {postComment} = usePosts();
    
    const handlePostComment = (comment : Comment) => {
        postComment(post, comment)
    }
 
    return (
    <article className='rounded-lg shadow-md border border-gray-200'>
        <PostUser image = {post.userImage} username = {post.username}/>
        <Image 
            className='w-full object-cover aspect-square'
            src = {post.image} 
            alt = {post.username}
            width={500} 
            height = {500}
            priority = {priority}
            onClick = {()=>setOpenModal(true)}
        ></Image>
        <ActionBar post = {post} onComment={handlePostComment}>
            <p>
                <span className='font-bold mr-1'>{post.username}</span>
                {post.text}
            </p>
            {
                post.comments > 1 && 
                <button className='font-bold my-2 text-sky-500'onClick={()=>setOpenModal(true)}>
                    {`View all ${post.comments} comments`}
                </button>
            }
        </ActionBar>
        
        {
            openModal && 
            <ModalPortal>
                <PostModal onClose={()=>setOpenModal(false)}>
                    <PostDetail post={post} />
                </PostModal>
            </ModalPortal>
        }
    </article>
    )
}
