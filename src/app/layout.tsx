import type { Metadata } from 'next'
// import './globals.css'
import { http } from '@/app/core'
import '@/app/main.scss'
import PageLayout from './component/PageLayout'
export const metadata: Metadata = {
  title: {
    template: '%s | my-next-app',
    default: 'my-next-app', // a default is required when creating a template
  },
  description: 'my first next app',
}
async function loginData() {
  const res = await http.post('/api/auth')
  const data:User[] = await res.data
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


