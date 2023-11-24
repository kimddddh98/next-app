import { useEffect, useState } from 'react'
import { http } from '.'
export default function usePost(url:string,params?:any){
  const [data,setData] = useState([])
  const call = async()=>{
    const data = await http.post(url,params)
    const res = await data.data
    setData(res)
  }
  useEffect(()=>{
    call()
  },[])
  return data
}