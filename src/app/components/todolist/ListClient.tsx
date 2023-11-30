'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import CheckBox from '@/app/components/CheckBox'


export default function ListClient({listPageId}:{listPageId:number}){
  const [todoList,setTodo] = useState<TodoList[]>([])
  // const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(listPageId)
  const loader = useRef<HTMLLIElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  
  const call = async()=>{
    if(page<1) return
    const res = await fetch('/api/todolist',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page:page,
      }),
    })
    const data = await res.json()
    setTodo([...todoList,...data])
    setPage((pn)=> pn-5)
   
    // setPage((prevPage) => prevPage + 1);
  }

  useEffect(()=>{
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // fetchItems();
        call()
      }
    });

    if (loader.current) {
      observer.current.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.current?.unobserve(loader.current);
      }
    };
  },[page])
  useEffect(()=>{
    setPage(()=>listPageId)
  },[])

//  무한 스크롤


  return(
    <>
      {todoList.map((todo)=>(<li key={todo.todoid}>
        <h4>{todo.title}</h4>
        <p>{todo.content}</p>
        <p>
        여기는 클라이언트
        {page}
        </p>
        <CheckBox todoId={todo.todoid} todoIsDone={todo.isdone} />
        {todo.todoid&& <Link href={`/todolist/${todo.todoid}`} className='btn-ty-01'
      >상세보기</Link>}

      </li>))}      
      <li ref={loader} className='observer'> bbb</li>

      {/* <Observer listLength={listLength} loading={loading} setLoading={setLoading()}/> */}
    </>
  )  
}