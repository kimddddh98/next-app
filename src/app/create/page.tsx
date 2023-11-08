
import { http } from '../core';

type DB = {
  id: number
  title: string
  body: string,
  created: string
}



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




