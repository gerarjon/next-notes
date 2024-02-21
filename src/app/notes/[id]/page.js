import Link from 'next/link'
import DeleteButton from '@/components/DeleteButton';

async function getNote(noteId) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
}

// async function updateNote() {

// }

export async function generateMetadata({ params }) {
  return {
    title: `Notes > ${params.id}`
  }
}

export default async function Note({params}) {
  const note = await getNote(params.id)

  return (
    <div>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-wavy my-5'><Link href={'/notes'}>Notes</Link> {'>'} {note.id}</h1>

      <div className='mx-auto max-w-96 rounded shadow-md overflow-hidden px-6 py-4 bg-yellow-200 mb-4'>
        <h2 className='font-semibold text-lg mb-2'>{note.title}</h2>
        <p className='text-gray-700 text-base mb-2'>{note.content}</p>
        <p className='text-gray-700 text-xs '>{note.created}</p>
      </div>
      <div className='flex w-1/4 gap-3 mx-auto justify-center'>
        <button className='rounded w-[100-px] bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Update
        </button>
        <DeleteButton id={note.id} />
      </div>
    </div>
  )
}