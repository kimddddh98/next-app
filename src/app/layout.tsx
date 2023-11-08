import type { Metadata } from 'next'
import Link from 'next/link'
// import './globals.css'
import NavBar from '@/app/component/NavBar'
import PageLayout from './component/PageLayout'
import MetaTag from './component/MetaTag'


export const metadata: Metadata = {
  title: {
    template: '%s | my-next-app',
    default: 'my-next-app', // a default is required when creating a template
  },
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
        <PageLayout>
          {children}

        </PageLayout>
      </body>
    </html>
  )
}
