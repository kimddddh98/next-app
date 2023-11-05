
import axios from 'axios'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '크리에이트',
}
 

const instance = axios.create({
  // baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
interface Data{
  data:string
}
export default async function CreatePage(props:any){
  const res = await instance.post('http://localhost:3000/api/hello')
  const data:Data = await res.data 
  // const res = await fetch('http://localhost:3000/api/hello')
  // const data = await res.json()
  debugger
  console.log(data)
  // const result = await data.data
  return (
    <>
     <h2>carete!!</h2>
      <b>{JSON.stringify(data.data)}</b>
    </>
 
  )
}