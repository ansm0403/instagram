'use client'

import React, { useState } from 'react'
import { Post } from '../model/post';
import Avatar from './Avatar';
import Image from 'next/image'
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPortal from '../ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUser from './PostUser';

type Props = {
    post : Post;
    priority? : boolean
}

export default function PostListCard({post, priority = false} : Props) {
    const [openModal, setOpenModal] = useState(false);

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
        <ActionBar likes = {post.likes} username = {post.username} text = {post.text} createdAt = {post.createdAt} />
        <CommentForm />
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
