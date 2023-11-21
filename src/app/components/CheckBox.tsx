'use client'
import { useState } from 'react'
import { http } from '../core'
import { useRouter } from 'next/navigation'


export default function CheckBox({todoId,todoIsDone}:{todoId:number,todoIsDone:boolean}){
  const router = useRouter()  
  const [isDone,setIsDone]= useState(todoIsDone)

  const changeIsDone = async () => {
    const res = await http.post('/api/todolist/isdone',
    {
      todoid:todoId,
      isdone:!isDone
    })

    const data = await res.data
    setIsDone(!isDone)
    router.refresh()
    console.log(data)
  }
  return(
  
    <label htmlFor={todoId.toString()} 
      className={isDone?'check label':'label'}>
        <input type="checkbox" id={todoId.toString()}  checked={isDone}
      onChange={()=>changeIsDone()}
      />
      <span></span>
    </label>
  )
}