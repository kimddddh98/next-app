import type { Metadata } from 'next'
import Link from 'next/link'
// import './globals.css'
import NavBar from '@/app/component/NavBar'



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
        <NavBar/>
        {children}
  
      </body>
    </html>
  )
}
