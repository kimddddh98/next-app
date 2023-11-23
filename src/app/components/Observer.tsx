'use client'
import { useEffect, useRef, useState } from 'react';
import { http } from '../core';

export default function Observer(){
  const el = useRef<HTMLLIElement|null>(null)
  const [page, setPage] = useState(1)


useEffect(() => {
  const options = {
    root: null, //기본 null, 관찰대상의 부모요소를 지정
    rootMargin: "20px", // 관찰하는 뷰포트의 마진 지정
    threshold: 1.0, // 관찰요소와 얼만큼 겹쳤을 때 콜백을 수행하도록 지정하는 요소
};
    let observer: IntersectionObserver;
    if (el.current) {
      observer = new IntersectionObserver(async (entries, _observer) => {
        if (entries[0].isIntersecting) {
            console.log('IN!');
            setPage((p)=>p+1)
        }
        }, options);
        observer.observe(el.current);
    }
    // return () => {
    //     observer.disconnect();
    // };
}, []);
// useEffect(()=>{console.log(page)},[page])

  return (<>
  <li ref={el} className='observer'></li>
  {page}
  </>)
}