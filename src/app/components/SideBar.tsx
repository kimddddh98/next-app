'use client'
import Link from 'next/link'
import NavBar from './NavBar'
import { http } from '../core'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function SideBar({userInfo}:{userInfo:User}){
  const [todoLength,setLength] = useState(0)
  useEffect(()=>{
    (async ()=>{
      const res = await http('/api/todolist')
      const data:TodoList[] = await res.data
      setLength(data.length)
    })();
  },[])

  return <>
    <nav className='side_bar'>
      <h2 className="side_header">My - Todo</h2>
      <h3>오늘의 할일이 {todoLength} 건 있습니다.</h3>
      <NavBar/>
      
    </nav>
  </>

}