
import axios from 'axios'
import { Metadata } from 'next'
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
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
  },
});

async function getData() {
  const res = await http.post("/api/hello")
  const data:DB[] = await res.data
  return data
}

export default async function createPage(){
  const data = await getData()
  
  return(<>
    <ul>
    {data.map(day=>(
              <li key={day.id} value={day.body}>{day.title}</li>
          ))}
    </ul>
  </>)
}




