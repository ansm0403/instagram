import React from 'react'
import { SearchResultUser } from '../model/user';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
    user : SearchResultUser;
}

export default function UserCard({user} : Props) {
    const {name, username, image, following, followers} = user
    return (
        <Link 
            className = 'flex mb-2 p-4 bg-white items-center w-full rounded-sm border border-neutral-300 hover:bg-neutral-100' 
            href = {`/user/${username}`}
        >
            <Avatar image = {image}/>
            <div className=' text-neutral-600'>
                <p className='text-black font-bold leading-4'>{username}</p>
                <p>{name}</p>
                <p className='text-sm leading-5'>{`${followers} followers ${following} following`}</p>
            </div>
        </Link>
    )
}
