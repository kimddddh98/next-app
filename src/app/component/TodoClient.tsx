'use client'

import { useState } from 'react'
import { http } from '../core'

export default function TodoClient({todoProps}:{todoProps:TodoList}){
  const [todo,setTodo] =  useState(todoProps)
  function check(){
    
    setTodo({
      ...todo,
      isdone : !todo.isdone
    })
    
    
  }
  function submit(){
    http.post('/api/todolist',todo).then(e=>console.log(e))

  }

  return(<>
    {todo.content}
    <p >{todo.isdone?'완료':'미완료'}</p>
    <input type="checkbox" checked={todo.isdone} onChange={check} />
    <button type="button" onClick={submit}>전송</button>
  </>)

}