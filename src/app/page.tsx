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
    <div className='home'>
      홈
    </div>
  )
}
