import { http } from '../core'

async function getList() {
  const res = await http('/api/todolist')
  const data:TodoList[] = await res.data
  return data
}

export default async function TodoListPage(){
  
  const todos:TodoList[] = await getList()
  return (<>
    {todos.map((todo)=>(<li key={todo.todoid}>
      {todo.title}
      {todo.startdate}
      {todo.enddate}
      
    </li>))}
  </>)
}