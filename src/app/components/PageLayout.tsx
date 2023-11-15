import NavBar from '@/app/components/NavBar'
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
