"use client"

import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function DeleteButton(params) {
  console.log(params.id)
  const router = useRouter();
  const handleDelete = async (params) => {
    await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${params.id}`, {
        method: 'DELETE',
      },
    );

    router.push('/notes'); /// fix this - does not revalidate notes page after deletion
    console.log(`Deleted note: ${params.id}`)
  };

  return <button 
            onClick={() => handleDelete(params)}
            type='button'
            className='rounded w-[100-px] bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
          >
              Delete
          </button>;
}