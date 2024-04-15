'use client'
import React from 'react'
import useSWR from 'swr'
import { DetailUser } from '../model/user'
import { FadeLoader } from 'react-spinners'
import Link from 'next/link'
import Avatar from './Avatar'
import ScrollBar from '../ui/ScrollBar'

export default function FollowingBar() {
    const {data, isLoading, error} = useSWR<DetailUser>('/api/me')
    const users = data?.following;

    return (
        <section className = 'w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0'>
            {isLoading ? <FadeLoader height = {8} color = 'red' /> :
            (!users || users.length === 0) && <p>{`You don't have following`}</p>}
            {
                users && users.length > 0 && 
                        <ScrollBar>
                            {users.map(({image, username})=>(
                                <Link 
                                    key={username}
                                    className = 'flex flex-col items-center w-20'
                                    href = {`/user/${username}`}
                                >
                                    <Avatar image = {image} highlight />
                                    <p className = 'text-sm text-ellipsis overflow-hidden'>
                                        {username}
                                    </p>
                                </Link>
                            ))}
                        </ScrollBar>
            }
        </section>
    )
}
