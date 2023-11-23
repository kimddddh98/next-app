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
async function loginData() {
  const res = await fetch(baseUrl+'/api/auth',{method:"POST"})
  const data:User[] = await res.json()
  return data
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userInfo = await loginData()
  return (
    <html lang="ko">
      <body >
        <div className="wrap">
          <Suspense fallback={<Loading/>}>
            <PageLayout userInfo={userInfo[0]}/>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  )
}


