'use client'

import React from 'react'
import { GridLoader } from 'react-spinners'
import PostListCard from './PostListCard'
import usePosts from '../hook/posts'

export default function PostList() {
  const {posts, isLoading} = usePosts()
  // console.log(posts)
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
