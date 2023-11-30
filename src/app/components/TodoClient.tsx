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
    <p>제목 {todo.title}</p>
    <p>내용 {todo.content}</p>
    <p>제목 {todo.title}</p>
    <p>{todo.startdate} 부터 {todo.enddate} 까지</p>
    <p >
      <input type="checkbox" checked={todo.isdone} onChange={check} />
      {todo.isdone?'완료':'미완료'}
      </p>
   <p>
   <button type="button" onClick={submit}>전송</button>

   </p>
  </>)

}