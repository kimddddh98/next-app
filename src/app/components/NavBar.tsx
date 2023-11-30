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
        All List : {allList}
      </Link>
      <Link href='/create' 
        className={'btn_ty_01 '+ (path?.includes('create')?'active':'')}>
        add
      </Link>
      <Link href='/create' 
        className={'btn_ty_01 '+ (path?.includes('create')?'active':'')}>
        Today : {todayList}
      </Link>
      <Link href='/create' 
        className={'btn_ty_01 '+ (path?.includes('create')?'active':'')}>
        Next 7 Days
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