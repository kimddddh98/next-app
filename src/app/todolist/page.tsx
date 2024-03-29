import Link from 'next/link'
import { baseUrl } from '../core'
// const baseUrl = process.env.NEXT_PUBLIC_API_PATH
import { Metadata } from 'next'
import CheckBox from '../components/CheckBox'
import ListClient from '@/app/components/todolist/ListClient'
export const metadata: Metadata = {
  title: 'todolist'
}

async function getList() {
  const res = await fetch(baseUrl+'/api/todolist',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page: 0,
    }),
    next:{revalidate:0},
   
  })
  const data:TodoList[] = await res.json()
  return data
}




export default async function TodoListPage(){
  const todos:TodoList[] = await getList()
  // const todosLength = await getListLength()
  return (<>
  <div className="list_wrap">
  <h4>나의 할일</h4>
  <ul className='todolist'>
    {todos&&todos.map((todo)=>(
    <li key={todo.todoid} >
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <p>
        {todo.startdate} 부터
        {todo.enddate} 까지
      </p>
      
      <CheckBox todoId={todo.todoid} todoIsDone={todo.isdone} />

      {todo.todoid&& <Link href={`/todolist/${todo.todoid}`} className='btn-ty-01'
      >상세보기</Link>}
    </li>
    ))}
    <ListClient listPageId={todos[todos.length-1].todoid}/>
    
  </ul>
  </div>

  
  </>)
}