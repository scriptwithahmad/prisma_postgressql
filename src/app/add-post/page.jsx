// 'use client'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'


// const Page = () => {

//   const router = useRouter()
//   const [loading, setLoading] = useState(false)
//   // State hooks for title and content
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//   })

//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handler for form submission
//   const handleSubmit = (e) => {
//     setLoading(true)
//     e.preventDefault();
//     try {
//       fetch('/api/add-post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//         , body: JSON.stringify({ formData })
//       })

//       setFormData({
//         title: '',
//         content: '',
//       })
//       router.back()
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setLoading(false)
//     }

//   };

//   return (
//     <form onSubmit={handleSubmit} className='mt-8 rounded-lg p-4 bg-slate-800 max-w-[600px] m-auto grid place-items-center gap-4 pt-8'>
//       <div className='flex flex-col gap-2 w-full'>
//         <label htmlFor="title">Title:</label>
//         <input
//           required
//           id="title"
//           type="text"
//           name='title'
//           value={formData.title}
//           onChange={handleChange}
//           className='border border-gray-600 text-sm outline-none rounded px-3 py-2.5 bg-gray-700 focus:ring-2 focus:ring-blue-500 '
//         />
//       </div>
//       <div className='flex flex-col gap-2 w-full'>
//         <label htmlFor="content">Content:</label>
//         <textarea
//           required
//           id="content"
//           name='content'
//           value={formData.content}
//           onChange={handleChange}
//           className='border border-gray-600 text-sm outline-none rounded px-3 py-2.5 bg-gray-700 focus:ring-2 focus:ring-blue-500 '
//         />
//       </div>
//       <button type="submit"
//         className='w-full border border-gray-700 rounded p-2 text-sm hover:bg-gray-900'
//       >
//         {loading ? 'Loading...' : 'Add Post'}
//       </button>
//     </form>
//   )
// }

// export default Page


import React from 'react'

const Page = () => {
  return (
    <div>
      add post
    </div>
  )
}

export default Page
