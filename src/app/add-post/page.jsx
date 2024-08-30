'use client'
import React, { useState } from 'react'

const Page = () => {
  // State hooks for title and content
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })
  console.log(formData)

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      fetch('/api/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
        , body: JSON.stringify({ formData })
      })

      setFormData({
        title: '',
        content: '',
      })
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <form onSubmit={handleSubmit} className='grid place-items-center gap-4 pt-8'>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
          className='border border-gray-300 rounded px-2 py-1 bg-gray-700'
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={formData.content}
          onChange={handleChange}
          name='content'
          required
          className='border border-gray-300 rounded px-2 py-1 bg-gray-700'
        />
      </div>
      <button type="submit" className='border border-gray-300 rounded px-2 py-1'>Submit</button>
    </form>
  )
}

export default Page
