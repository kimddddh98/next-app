'use client'

import { useEffect, useState } from 'react'
import { http } from '@/app/core'

export default function TodoDetail({params}:{params:{todoid:string}}){
  const [todo,setTodo] = useState<TodoList>()

  async function getList() {
    const res = await http(`/api/todolist?todoid=${params.todoid}`)
    const data:TodoList[] = await res.data
    return data
  }
  useEffect(()=>{
    (async()=>{
      const data = await getList()
      setTodo(data[0])
    })();
  },[])
  return (
    <>
    <div>My Post: {params.todoid}</div>
    <div>
      {todo?todo.content:<h2>isloading...</h2>}
    </div>
    </>
  )
}