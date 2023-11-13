import { http } from '../core'
import Link from 'next/link'
async function getList() {
  const res = await http('/api/todolist')
  const data:TodoList[] = await res.data
  return data
}

export default async function TodoListPage(){
  
  const todos:TodoList[] = await getList()


  return (<>
    {!todos&&<h4>loginData...</h4>}
    {todos?.map((todo)=>(<li key={todo.todoid} >
      {todo.title}
      {todo.startdate}
      {todo.enddate}
      {todo.isdone}
      <Link href={`todolist/${todo.title}/${todo.todoid}`}>상세보기</Link>
      
    </li>))}
  </>)
}