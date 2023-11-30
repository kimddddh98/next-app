import NavBar from './NavBar'
import { baseUrl } from '../core'

async function getListLength() {
  const res = await fetch(baseUrl+'/api/todolist/length',{
    next:{revalidate:1},
  })
  const data:todoLength = await res.json()
  return data
}
export default async function SideBar(){
  const {allList,todayList} = await getListLength()

  return <>
    <nav className='side_bar'>
      <h2 className="side_header">TodoList</h2>
      {/* <h3>할일이 {allList} 건 있습니다.</h3>
      <h3>오늘의 할일이 {todayList} 건 있습니다.</h3> */}
      <NavBar allList = {allList} todayList={todayList}/>
    </nav>
  </>

}