import React from 'react'
import { Post } from '../model/post';
import Avatar from './Avatar';
import Image from 'next/image'
import HeartIcon from '../ui/icons/HeartIcon';
import BookmarkIcon from '../ui/icons/BookmarkIcon';
import { parseDate } from '../util/date';

import CommentForm from './CommentForm';
import ActionBar from './ActionBar';

type Props = {
    post : Post;
}

export default function PostListCard({post} : Props) {
        
    return (
    <article className='rounded-lg shadow-md border border-gray-200'>
        <div className='flex items-center p-2'>
            <Avatar image = {post.userImage} size = "medium" highlight />
            <span className = "text-gray-900 font-bold ml-2">{post.username}</span>
        </div>
        <Image 
            className='w-full object-cover aspect-square'
            src = {post.image} 
            alt = {post.username}
            width={500} 
            height = {500}
        ></Image>
        <ActionBar likes = {post.likes} username = {post.username} text = {post.text} createdAt = {post.createdAt} />
        <CommentForm />
    </article>
    )
}
