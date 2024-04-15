import React from 'react'
import HeartIcon from '../ui/icons/HeartIcon'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import { parseDate } from '../util/date'

type Props = {
    likes : string[];
    username : string;
    text? : string;
    createdAt : string;
}

export default function ActionBar(post : Props) {
  return (
    <>
        <div className='flex justify-between mt-2 px-4'>
            <HeartIcon />
            <BookmarkIcon />
        </div>
        <div className='px-4 py-1'>
            <p className='text-sm font-bold mb-2'>
                {`${post.likes?.length ?? 0} ${post.likes?.length > 1 ? 'likes' : 'like'}`}
            </p>
            {post.text && (
                <p>
                    <span className='font-bold mr-1'>{post.username}</span>
                    {post.text}
                </p>
            )}
            <p className='text-xs text-neutral-500 uppercase my-4'>{parseDate(post.createdAt)}</p>
            
        </div>
    </>
  )
}
