
import axios from 'axios'
import { Metadata } from 'next'
import Link from 'next/link'
// import { useRouter } from 'next/router'

// const router = useRouter()
export const metadata: Metadata = {
  title: '크리에이트',
}

type DB = {
  id: number
  title: string
  body: string,
  created: string
}

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});

async function get(){
  const res = await http("/api/hello")
  const data = await res.data
  return data
}
async function getData() {
  const res = await http.post("/api/hello")
  const data:DB[] = await res.data
  return data
}

export default async function createPage(){
  const data = await getData()
  const httpGet = await get()
  console.log(httpGet)
  return(<>

    <ul>
    {data.map(day=>(
              <li key={day.id} value={day.body}>{day.title
              
              }{httpGet.data}</li>
          ))}
    </ul>
  </>)
}




