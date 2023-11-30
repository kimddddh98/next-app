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

  const enterPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key==='Enter') dataPost()
  }
  const dataPost = async ()=>{
    if(isLoading) return
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
    setTitle('')

    console.log(data)

    router.refresh()
    
  }
  return(
    <>
      <form className='create_form'>
        <input id="title" type="text"  
            className='input_ty_01'
            placeholder='+ 할 일 추가하기'
            value={title}
            onKeyDown={enterPress}
            onChange={(e)=>setTitle(e.target.value)}/>
        <input id="content" type="text"  value={content}
        onChange={(e)=>setContent(e.target.value)}/>
        <label htmlFor="content">
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