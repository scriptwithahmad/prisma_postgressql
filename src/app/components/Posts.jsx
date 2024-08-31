"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Posts = ({ post }) => {
  const router = useRouter()

  async function handleDelete(postId) {
    try {
      const confim = confirm('Are you sure you want to delete this post?')
      if (!confim) return
      const res = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      })
      console.log(res)
      if (res.ok) {
        router.refresh()
      } else {
        console.error('Failed to delete the post')
      }
    } catch (error) {
      console.error('An error occurred while deleting the post:', error)
    }
  }

  return (
    <div className='text-gray-300/80 bg-slate-800 hover:bg-slate-800/90 rounded-lg p-4'>
      <h2 className='text-2xl font-semibold text-gray-300'>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author.name}</p>
      <button
        onClick={() => handleDelete(post.id)}
        className='mt-2 border border-gray-700 rounded px-2 py-1 text-sm hover:bg-gray-950'
      >
        Delete
      </button>
    </div>
  )
}

export default Posts
