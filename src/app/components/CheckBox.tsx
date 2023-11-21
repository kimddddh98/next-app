'use client'
import { useState } from 'react'
import { http } from '../core'
import { useRouter } from 'next/navigation'
import Loading from '../todolist/loading'

export default function CheckBox({todoId,todoIsDone}:{todoId:number,todoIsDone:boolean}){
  const router = useRouter()  
  const [isDone,setIsDone]= useState(todoIsDone)
  const [isLoading,setLoading] = useState(false)
  const changeIsDone = async () => {
    setLoading(true)
    const res = await http.post('/api/todolist/isdone',
    {
      todoid:todoId,
      isdone:!isDone
    })

    const data = await res.data
    setLoading(false)
    setIsDone(!isDone)
    router.refresh()
    console.log(data)
  }
  return(
    <>
    {isLoading&&<Loading/>}
    {!isLoading&&<label htmlFor={todoId.toString()} 
      className={isDone?'check label':'label'}>
        <input type="checkbox" id={todoId.toString()}  checked={isDone}
      onChange={()=>changeIsDone()}
      />
      <span></span>
    </label>}
    </>
    
   
  )
}