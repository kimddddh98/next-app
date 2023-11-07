'use client'
import Link from 'next/link'
import style from './create.module.css'
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar(){
  const router = useRouter()
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
  </>)
}