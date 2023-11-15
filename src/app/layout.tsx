import type { Metadata } from 'next'
// import './globals.css'
// import { http } from '@/app/core'
import '@/app/main.scss'
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
        <PageLayout userInfo={userInfo[0]}/>
        {children}
      </body>
    </html>
  )
}


