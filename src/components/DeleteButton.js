"use client"

import { useRouter } from "next/navigation";

export default function DeleteButton(params) {
  const router = useRouter();
  const handleDelete = async (params) => {
    try {
      const response = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${params.id}`, 
        {
          method: 'DELETE',
        },
      );
      
      if (response.ok) {
        router.push('/notes');
        router.refresh();
      } else {
        console.error('Failed to make DELETE request.');
      }
    } catch (error) {
      console.error('Error while making DELETE request', error);
    }
  };

  return <button 
            onClick={() => handleDelete(params)}
            type='button'
            className='rounded w-[100-px] bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
          >
              Delete
          </button>;
}