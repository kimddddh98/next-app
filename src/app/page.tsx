import { http } from './core'
async function loginData() {
  const res = await http.post('/api/auth')
  const data:User[] = await res.data
  return data
}


export default async function App() {
  const userInfo = await loginData()
  return (
    <main className='wrap'>
      {userInfo[0].name}
      {userInfo[0].password}
    </main>
  )
}
