'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postNote } from '../api/route';

const Modal = ({children}) => {
  return (
    <div 
      className='absolute z-90 bg-gray-600/75 top-0 left-0 w-screen h-dvh'
    >
      <div
        className='relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        {children}
      </div>
    </div>
  )
}

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const create = async(e) => {
    e.preventDefault();

    await postNote({title, content});
    
    setContent('');
    setTitle('');
    setShowModal(false);

    router.refresh();
  }

  return (
    <div>
      <button 
          type='button'
          onClick={()=>setShowModal(true)}
          className='border rounded py-2 px-3 mb-4 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500'
        >
          Create Note
      </button>

      { showModal ? (
        <Modal>
          <form
            className='w-full max-w-sm mx-auto bg-white rounded shadow'
            onSubmit={create}
          >
            <div
              className='flex flex-col space-y-3 shadow-md rounded px-8 py-6'
            >
              <h3 className='text-lg font-bold'>Create a Note</h3>

              <div>
                <label
                  className='block mb-2 font-medium text-sm'
                  htmlFor='title'
                >
                  Title:
                </label>
                <input
                  type='text'
                  placeholder='Grapes'
                  value={title}
                  id='title'
                  onChange={(e) => setTitle(e.target.value)}
                  autoComplete='off'
                  required={true}
                  className='w-full shadow border rounded py-2 px-3'
                />
              </div>

              <div>
                <label 
                  className='block mb-2 font-medium text-sm'
                  htmlFor='content'
                >
                  Content:
                </label>
                <textarea 
                  placeholder='I like grapes'
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
          </form> 
        </Modal>
      )
      : 
      null
      }
    </div>
  )
}