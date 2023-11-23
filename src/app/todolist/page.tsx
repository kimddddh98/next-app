import Link from 'next/link'
import { baseUrl } from '../core'
// const baseUrl = process.env.NEXT_PUBLIC_API_PATH
import { Metadata } from 'next'
import CheckBox from '../components/CheckBox'
import Observer from '../components/Observer'
export const metadata: Metadata = {
  title: 'todolist'
}

async function getList() {
  const res = await fetch(baseUrl+'/api/todolist',{next:{revalidate:0}})
  const data:TodoList[] = await res.json()
  return data
}

export default async function TodoListPage(){
  const todos:TodoList[] = await getList()
  return (<>
  <div className="list_wrap">
  <h4>나의 할일</h4>
  <ul className='todolist'>
    {!todos&&<li>loginData...</li>}
    {todos&&todos.map((todo)=>(
    <li key={todo.todoid} >
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <p>
        {todo.startdate} 부터
        {todo.enddate} 까지
      </p>
      
      <CheckBox todoId={todo.todoid} todoIsDone={todo.isdone}/>

      


      {todo.todoid&& <Link href={`/todolist/${todo.todoid}`} className='btn-ty-01'
      >상세보기</Link>}
    </li>
    ))}
    <Observer/>
  </ul>
  </div>

  
  </>)
}