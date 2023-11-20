'use client'

import { http } from '@/app/core';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import dayjs from 'dayjs';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';
export default function CreateClient(){
  const router = useRouter()

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading,setLoading] = useState(false)
  const dataPost = async ()=>{
    setLoading(true)
    const res = await http.post('/api/create',{
      title:title,
      content:content,
      startdate:dayjs(startDate).format('YYYY-MM-DD'),
      enddate:dayjs(endDate).format('YYYY-MM-DD'),
      userid:1
    })
    const data = await res.data
    setLoading(false)

    console.log(data)

    router.refresh()
    
  }
  return(
    <>
      <form>
        <label htmlFor="title">
          할 일 제목
          <input id="title" type="text"  value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
        </label>  
        <label htmlFor="content">
          할 일 제목
          <input id="content" type="text"  value={content}
            onChange={(e)=>setContent(e.target.value)}/>
        </label>  
        <DatePicker 
        dateFormat='yyyy-MM-dd'
        selected={startDate} onChange={(date) => date&&setStartDate(date)} />
        <DatePicker
        dateFormat='yyyy-MM-dd'
        
        selected={endDate} onChange={(date) => date&&setEndDate(date)} minDate={startDate} />
        <button type='button' onClick={dataPost} disabled={isLoading}>{isLoading?'로딩중':'전송'}</button>
      </form>
    
    </>
  )
}