'use client'
import React, { useState, useTransition } from 'react'
import { ProfileUser } from '../model/user'
import Button from '../ui/Button'
import useMe from '../hook/me'
import { useRouter } from 'next/navigation'
import { PulseLoader } from 'react-spinners'

type Props = {
    user: ProfileUser
}

export default function FollowButton({user}: Props) {
    const {user : loginUser, toggleFollow} = useMe();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isUpdating = isPending || isFetching;

    const showButton = loginUser && loginUser.username !== user.username;
    const following = loginUser && loginUser.following.find(item => item.username === user.username)
    
    const text = following ? 'Unfollow' : 'Follow';
    
    const handleFollow = async () => {
        setIsFetching(true);
        await toggleFollow(user.id, !following);
        setIsFetching(false);
        startTransition(()=>{
            router.refresh();
        })
    }
    return (
        <>       
        {showButton && (
            <div className = 'relative'>
                {
                    isUpdating && 
                        <div className='absolute inset-0 flex justify-center items-center z-20'>
                            <PulseLoader size = {6} />
                        </div>
                }
            <Button disabled={isUpdating} text={text} onClick={handleFollow} red = {text === 'Unfollow'}></Button>
            </div>
        )}
        </>
    )
}
