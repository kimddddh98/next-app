'use client'

import { useEffect, useState } from 'react'
import { http } from '@/app/core'

export default function  TodoDetail({params}:{params:{todoid:string[]}}){
  const [todo,setTodo] = useState<TodoList>()
  const [title,id] = params.todoid

  async function getList() {
    const res = await http(`/api/todolist?todoid=${id}`)
    const data:TodoList[] = await res.data
    return data
  }

  // const [title ,setTitle ] = useState('') 
  useEffect(()=>{
    (async()=>{
      
      const data = await getList()
      setTodo(data[0])
    })();
  },[])
  return (
    <>
    <div>My Post: {title}</div>
    <div>My Post: {id}</div>
    <div>
      {todo?.todoid}
      {todo?.title}
      {/* {todo?todo.content:<h2>isloading...</h2>} */}
    </div>
    </>
  )
}