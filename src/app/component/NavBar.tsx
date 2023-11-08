'use client'
import Link from 'next/link'
import style from './create.module.css'
import { usePathname } from 'next/navigation';
import MetaTag from './MetaTag';

export default function NavBar(){
  const path =usePathname()
  return(<>
    <nav>
    <Link href="/" className={path==='/'?style.active:''}>
        home
      </Link>
      <Link href="/create" className={path==='/create'?style.active:''}>
        create
      </Link>
      <Link href="/update" className={path==='/update'?style.active:''}>
        update
      </Link>
    </nav>
    <MetaTag pathName={path?path:'my-next-app'}></MetaTag>
  </>)
}