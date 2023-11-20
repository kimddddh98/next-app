'use client'

import { useState } from 'react'
import { http } from '../core'
import { useRouter } from 'next/navigation'

export default function TodoClient({todoProps}:{todoProps:TodoList}){
  const [todo,setTodo] =  useState(todoProps)
  const router = useRouter()
  function check(){
    setTodo({
      ...todo,
      isdone : !todo.isdone
    })
    
    
  }
  function submit(){
    http.post(`/api/todolist/${todo.todoid}`,todo)
      .then(e=>{
        console.log(e.data)
        router.refresh()
    })
  }

  return(<>
    {todo.title}
    {todo.content}
    {todo.enddate}
    <p >{todo.isdone?'완료':'미완료'}</p>
    <input type="checkbox" checked={todo.isdone} onChange={check} />
    <button type="button" onClick={submit}>전송</button>
  </>)

}