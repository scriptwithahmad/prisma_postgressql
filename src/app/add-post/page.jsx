'use client'
import React, { useState } from 'react'

const Page = () => {
     // State hooks for title and content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    

    setTitle('');
    setContent('');
  };
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
    <div>
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}

export default Page
