import React from 'react'
import UserInfo from '../mini components/Latest Post/UserInfo'
import Post from '../mini components/Latest Post/Post'
import PostFooter from '../mini components/Latest Post/PostFooter'

export default function LatestPost() {
  return (
    <div className='bg-white rounded-[10px] p-5 '>
        <p className='text-2xl font-semibold mb-5'>Latest Post</p>
        <UserInfo />
        <Post />
        <PostFooter />
    </div>
  )
}
