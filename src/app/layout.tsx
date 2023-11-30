import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import '@/assets/main.scss'
import PageLayout from '@/app/components/PageLayout'
import { baseUrl } from '@/app/core'
export const metadata: Metadata = {
  title: {
    template: '%s | my-next-app',
    default: 'my-next-app', // a default is required when creating a template
  },
  description: 'my first next app',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body >
        <div className="wrap">
            <PageLayout/>
            {children}
        </div>
      </body>
    </html>
  )
}


