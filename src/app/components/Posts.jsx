import React from 'react'

const Posts = ({ post }) => {
    console.log(post)
  return (
    <div className='text-gray-300/80 border border-gray-800 rounded-lg p-4 flex gap-2 flex-col'>
      <h2 className='text-2xl font-semibold text-gray-300'>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author.name}</p>
      <p>{post.published ? "Published" : "Pending"}</p>
    </div>
  )
}

export default Posts
