'use client'
import Link from 'next/link'
import style from '@/assets/styles/navBar.module.scss'
import { usePathname } from 'next/navigation';

export default function NavBar({allList,todayList}:todoLength){
  const path =usePathname()
  return(<>
    <nav className={style.navBar}>
      <Link href="/" 
        className={'btn_ty_01 ' + (path==='/'?'active':'')}>
        Home
      </Link>
      <Link href='/todolist' 
        className={'btn_ty_01 '+ (path?.includes('todolist')?'active':'')}>
        All List  <span>{allList}</span>
      </Link>
      <Link href='/today' 
        className={'btn_ty_01 '+ (path?.includes('today')?'active':'')}>
        Today : <span>{todayList}</span>
      </Link>
    </nav>
  </>)
}