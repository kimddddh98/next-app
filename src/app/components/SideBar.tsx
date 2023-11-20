import NavBar from './NavBar'
import { baseUrl } from '../core'
import dayjs from 'dayjs'
// import { http } from '../core'
// import { useEffect, useState } from 'react'
async function getList() {
  const res = await fetch(baseUrl+'/api/todolist',{next:{revalidate:0}})
  const data:TodoList[] = await res.json()
  return data
}
export default async function SideBar({userInfo}:{userInfo:User}){
  const todos = await getList()
  const today = todos.filter(todo=>todo.startdate === dayjs(new Date).format('YYYY-MM-DD'))
  // const [todoLength,setLength] = useState(0)
  // useEffect(()=>{
  //   (async ()=>{
  //     const res = await http('/api/todolist')
  //     const data:TodoList[] = await res.data
  //     setLength(data.length)
  //   })();
  // },[])

  return <>
    <nav className='side_bar'>
      <h2 className="side_header">My - Todo</h2>
      <h3>할일이 {todos.length} 건 있습니다.</h3>
      <h3>오늘의 할일이 {today.length} 건 있습니다.</h3>
      <NavBar/>
    </nav>
  </>

}