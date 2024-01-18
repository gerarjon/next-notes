export const dynamic = 'force-dynamic' // defaults to auto

export async function getAllNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30&sort=-created', 
  { 
    cache: 'no-store' 
  });

  const data = await res.json();
  return data.items;
}

export async function getNote(noteId) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
}

export async function postNote({title, content}) {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  const data = await res.json();
  return data;
}