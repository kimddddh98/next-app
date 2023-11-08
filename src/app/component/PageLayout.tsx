import NavBar from './NavBar'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    <NavBar/>
    {children}
    
  </>

  )
}
