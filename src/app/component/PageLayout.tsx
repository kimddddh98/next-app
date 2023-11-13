import NavBar from '@/app/component/NavBar'
import SideBar from './SideBar'


export default async function PageLayout({
  userInfo
}: {
  userInfo:User

}) {
  return (<>
    <NavBar/>
    <SideBar userInfo={userInfo}/>
  </>
  )
}
