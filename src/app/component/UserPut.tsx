'use client'
import { useEffect, useState } from 'react'
import { http } from '../core'
interface User{
  userid: number
  name: string,
  password: string,
  email: string,
  created: string
  update: string
  iconUrl?: string
}

export default function UserPut({user}:{user:User}){
  async function putData(){
    const res =  await http.put('/api/auth')
    const data = await res.data
    console.log(data)
   }
  //  const [createDate,set] = useState(user.create))
   useEffect(()=>{
    
   },[])
  return (<>
  <li onClick={putData} key={user.userid}>
  {user.name}
    <p>{new Date(user.created).toDateString()}</p>
  </li>
  </>)
}