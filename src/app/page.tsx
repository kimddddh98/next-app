import { http } from './core'
import Image from 'next/image';
async function loginData() {
  const res = await http.post('/api/auth')
  const data:User[] = await res.data
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
