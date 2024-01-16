'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const create = async(e) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    
    setContent('');
    setTitle('');
    setShowModal(false);

    router.refresh();
  }

  return (
    <>
      { showModal ? (
        <form
          className='mb-4 w-full max-w-sm mx-auto'
          onSubmit={create}
        >
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
                autoComplete='off'
                required='true'
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
                autoComplete='off'
                className='w-full shadow border rounded py-2 px-3'
              />
            </div>

            <div className='flex justify-around'>
              <button 
                type="submit"
                className='rounded w-1/3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Create Note
              </button>

              <button
                className='rounded w-1/3 bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
                onClick={()=>setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form> )
      : 
      <button 
        type='button'
        onClick={()=>setShowModal(true)}
        className='border rounded py-3 px-4 mb-4 bg-indigo-600 text-white hover:bg-indigo-500'
      >
        Create Note
      </button>
      }
    </>
  )
}