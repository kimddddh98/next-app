import Link from 'next/link'
const baseUrl = process.env.NEXT_PUBLIC_API_PATH

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'todolist'
}

async function getList() {
  const res = await fetch(baseUrl+'/api/todolist')
  const data:TodoList[] = await res.json()
  
  return data
}

export default async function TodoListPage(){
  
  const todos:TodoList[] = await getList()


  return (<>
    {!todos&&<h4>loginData...</h4>}
    {todos&&todos.map((todo)=>(<li key={todo.todoid} >
      {todo.title}
      {todo.startdate}
      {todo.enddate}
      {todo.isdone}
      <Link href={`todolist/${todo.todoid}`}>상세보기</Link>
      
    </li>))}
  </>)
}