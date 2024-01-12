import Link from 'next/link'

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data.items;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div className='w-5/6 mx-auto'>
      <h1>Notes</h1>
      <div className='md:grid md:grid-cols-4 gap-4'>
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
    <Link href='/notes/${id}' className='rounded shadow-md overflow-hidden bg-yellow-200 hover:bg-yellow-100'>
      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>{title}</h2>
        <p className='text-gray-700 text-base mb-2'>{content}</p>
        <p className='text-xs text-gray-700'>{created}</p>
      </div>
    </Link>
  ) 
}