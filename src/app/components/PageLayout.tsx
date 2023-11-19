import SideBar from './SideBar'


export default async function PageLayout({
  userInfo
}: {
  userInfo:User

}) {
  return (<>
    <SideBar userInfo={userInfo}/>
  </>
  )
}
