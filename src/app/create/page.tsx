
import { http } from '../core';

type DB = {
  id: number
  title: string
  body: string,
  created: string
}




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
              <li key={day.id} value={day.body}>{day.title
              
              }{day.title}</li>
          ))}
    </ul>
  </>)
}




