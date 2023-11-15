// import { http } from './core'
import Image from 'next/image';
const baseUrl = process.env.NEXT_PUBLIC_API_PATH

async function loginData() {
  const res = await fetch(baseUrl+'/api/auth',{method:"POST"})
  const data:User[] = await res.json()
  return data
}


export default async function App() {
  const userInfo = await loginData()
  return (
    <main className='wrap'>
      <Image src='/next.svg' alt='' width={120} height={100}/>
      {userInfo[0].name}
      {userInfo[0].password}
    </main>
  )
}
