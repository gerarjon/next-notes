import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Notes',
  description: 'Notes App with Pocketbase Backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          className='container mx-auto py-4'
        >
          <Link href="/">
            Home
          </Link>
          <Link href="/notes">
            Notes
          </Link>
        </nav>
        <main 
          className='max-w-screen-xl mx-auto px-4 mb-10'
        >
          {children}
        </main>
      </body>
    </html>
  )
}
