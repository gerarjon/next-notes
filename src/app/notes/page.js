import Link from 'next/link'
import CreateNote from './CreateNote';

async function getAllNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30&sort=-created', 
  { 
    cache: 'no-store' 
  });

  const data = await res.json();
  return data.items;
}


export default async function NotesPage() {
  const notes = await getAllNotes();

  return(
    <div>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-wavy my-5'>Notes</h1>

      <CreateNote />
      <div className='grid z-10 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

function Note({note}) {
  const {id, title, content, created} = note || {};
  return (
    <Link href={`/notes/${id}`} className='rounded shadow-md overflow-hidden bg-yellow-200 hover:bg-yellow-100'>
      <div className='px-6 py-4'>
        <h2 className='font-semibold text-lg mb-2'>{title}</h2>
        <p className='text-gray-700 text-base mb-2'>{content}</p>
        <p className='text-gray-500 text-xs '>{created}</p>
      </div>
    </Link>
  ) 
}