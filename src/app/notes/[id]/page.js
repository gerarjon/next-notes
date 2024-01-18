import Link from 'next/link'

async function getNote(noteId) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
}

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

      <div className='mx-auto max-w-96 rounded shadow-md overflow-hidden px-6 py-4 bg-yellow-200'>
        <h2 className='font-semibold text-lg mb-2'>{note.title}</h2>
        <p className='text-gray-700 text-base mb-2'>{note.content}</p>
        <p className='text-gray-700 text-xs '>{note.created}</p>
      </div>
    </div>
  )
}