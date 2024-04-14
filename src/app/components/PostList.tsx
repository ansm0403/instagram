'use client'

import React from 'react'
import useSWR from 'swr'
import { Post } from '../model/post'
import { GridLoader } from 'react-spinners'
import PostListCard from './PostListCard'

export default function PostList() {
  const {data : posts, isLoading} = useSWR<Post[]>('/api/posts')
  console.log(posts)
  return (
    <section>
      {isLoading && (
        <div className = 'text-center mt-32'>
          <GridLoader color = 'red'></GridLoader>
        </div>
      )}
      {posts &&
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post = {post} />
            </li>
          ))}
        </ul>
      }
    </section>
  )
}
