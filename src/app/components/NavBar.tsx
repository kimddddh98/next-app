'use client'
import Link from 'next/link'
import style from '@/assets/styles/navBar.module.scss'
import { usePathname } from 'next/navigation';

export default function NavBar(){
  const path =usePathname()
  return(<>
    <nav className={style.navBar}>
      <Link href="/" 
        className={path==='/'?style.active:''}>
        home
      </Link>
      <Link href='/todolist' 
        className={path?.includes('todolist')?style.active:''}>
        전체 할 일 보기
      </Link>
      <Link href='/create' 
        className={path?.includes('create')?style.active:''}>
        글 작성
      </Link>

      {/* <Link href="/create" className={path==='/create'?style.active:''}>
        create
      </Link>
      <Link href="/update" className={path==='/update'?style.active:''}>
        update
      </Link>
      <Link href="/auth" className={path==='/auth'?style.active:''}>
        auth
      </Link> */}

    </nav>
  </>)
}