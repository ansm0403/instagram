'use client'
import React, { useState } from 'react'
import { Post } from '../model/post'
import Image from 'next/image'
import ModalPortal from '../ui/ModalPortal'
import PostModal from './PostModal'
import PostDetail from './PostDetail'
import { signIn, useSession } from 'next-auth/react'

type Props = {
    post : Post,
    priority : boolean
}

export default function PostGridCard({post, priority = false} : Props) {
    const [openModal, setOpenModal] = useState(false);
    const {image, username} = post
    const {data:session} = useSession();
    const handleOpenPost = () => {
        if(!session?.user) {
            return signIn();
        }
        setOpenModal(true);
    }

    return (
      <div className='relative w-full aspect-square'>
        <Image
            className='object-cover cursor-pointer'
            src = {image} 
            alt = {username} 
            fill 
            sizes = '650px' 
            priority = {priority}
            onClick = {handleOpenPost}
        />
         {
            openModal && 
            <ModalPortal>
                <PostModal onClose={()=>setOpenModal(false)}>
                    <PostDetail post={post} />
                </PostModal>
            </ModalPortal>
        }
     </div>
    )
}
