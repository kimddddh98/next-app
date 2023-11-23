'use client'
import { useEffect, useRef, useState } from 'react';

export default function Observer(){
  const el = useRef<HTMLLIElement|null>(null)
  const [page, setPage] = useState(1)


useEffect(() => {
    let observer: IntersectionObserver;
    if (el.current) {
      observer = new IntersectionObserver((entries, _observer) => {
        if (entries[0].isIntersecting) {
            console.log('IN!');
            setPage(page +1)
        }
        }, { threshold: 0.5 });
        observer.observe(el.current);
    }
    // return () => {
    //     observer.disconnect();
    // };
}, [el]);
// useEffect(()=>{console.log(page)},[page])

  return <li ref={el}>{page}</li>
}