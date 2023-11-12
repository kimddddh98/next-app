'use client'
import Link from 'next/link'
export default function SideBar({userInfo}:{userInfo:User}){
  
  return <>
    사이드바{userInfo.name}
    <Link href='/todolist'>리스트로 이동</Link>
  </>

}