'use client'

import React, { useState } from 'react'
import HeartIcon from '../ui/icons/HeartIcon'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import { parseDate } from '../util/date'
import ToggleButton from '../ui/ToggleButton'
import HeartFillIcon from '../ui/icons/HeartFillIcon'
import BookmarkFillIcon from '../ui/icons/BookmarkFillIcon'
import { useSession } from 'next-auth/react'
import { useSWRConfig } from 'swr'
import usePosts from '../hook/posts'
import { Comment, Post } from '../model/post'
import useMe from '../hook/me'
import CommentForm from './CommentForm'

type Props = {
    post : Post;
    children? : React.ReactNode;
    onComment : (comment : Comment) => void;
}

export default function ActionBar({post, children, onComment} : Props) { 
    const {user, setBookmark} = useMe(); 
    const {setLike} = usePosts();
    const liked = user ? post.likes.includes(user.username) : false;
    const bookmarked = user?.bookmarks.includes(post.id) ?? false;
    
    const handleLike = (like : boolean) => {
        user && setLike(post, user.username, like);
    }
    const handleBookmark = (bookmark : boolean) => {
        user && setBookmark(post.id, bookmark)
    }
    const handleComment = (comment : string) => {
        user && onComment({comment, username : user.username, image : user.image})
    }
  return (
    <>
        <div className='flex justify-between mt-2 px-4'>
            <ToggleButton 
                toggled = {liked} 
                onToggle={handleLike } 
                onIcon={<HeartFillIcon />}
                offIcon = {<HeartIcon />}
            />
             <ToggleButton 
                toggled = {bookmarked} 
                onToggle={handleBookmark} 
                onIcon={<BookmarkFillIcon />}
                offIcon = {<BookmarkIcon />}
            />
        </div>
        <div className='px-4 py-1'>
            <p className='text-sm font-bold mb-2'>
                {`${post.likes?.length ?? 0} ${post.likes?.length > 1 ? 'likes' : 'like'}`}
            </p>
            {children}
            <p className='text-xs text-neutral-500 uppercase my-4'>{parseDate(post.createdAt)}</p>
            
        </div>
        <CommentForm onPostComment={handleComment}/>
    </>
  )
}
