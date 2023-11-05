import type { Metadata } from 'next'
import Link from 'next/link'
// import './globals.css'


export const metadata: Metadata = {
  title: 'next start',
  description: 'my first next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body >
        <h2 ><Link href="/">web</Link></h2>
        <ol>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">create</Link>
          </li>
          <li>
            <Link href="/update">update</Link>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  )
}
