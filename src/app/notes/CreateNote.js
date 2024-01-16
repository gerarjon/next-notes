'use client'

import { useState} from 'react';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form className='mb-4 w-full max-w-sm mx-auto'>
      <div
        className='flex flex-col space-y-3 shadow-md rounded px-8 py-6'
      >
        <h3 className='text-md font-bold'>Create a Note</h3>

        <div>
          <label
            className='block mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            type='text'
            placeholder='Title'
            value={title}
            id='title'
            onChange={(e) => setTitle(e.target.value)}
            className='w-full shadow border rounded py-2 px-3'
          />
        </div>

        <div>
          <label 
            className='block mb-2'
            htmlFor='content'
          >
            Content
          </label>
          <textarea 
            placeholder='This is the content'
            value={content}
            id='content'
            onChange={(e)=> setContent(e.target.value)}
            className='w-full shadow border rounded py-2 px-3'
          />
        </div>

        <div className='flex flex-row-reverse '>
          <button 
            type='submit'
            className='rounded w-1/3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Create Note
          </button>
        </div>
      </div>
    </form>
  )
}