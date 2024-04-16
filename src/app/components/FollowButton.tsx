'use client'
import React from 'react'
import { HomeUser, ProfileUser } from '../model/user'
import useSWR from 'swr'
import Button from '../ui/Button'

type Props = {
    user: ProfileUser
}

export default function FollowButton({user}: Props) {
    const {data : loginUser} = useSWR<HomeUser>('/api/me');

    const showButton = loginUser && loginUser.username !== user.username;
    const following = loginUser && loginUser.following.find(item => item.username === user.username)
    
    const text = following ? 'Unfollow' : 'Follow';
    return (
        <>       
        {showButton && (
            <Button text={text} onClick={()=>{}} red = {text === 'Unfollow'}></Button>
        )}
        </>
    )
}
