
// import { http } from '../core';
const baseUrl = process.env.NEXT_PUBLIC_API_PATH

type DB = {
  id: number
  title: string
  body: string,
  created: string
}




async function getData() {
  const res = await fetch(baseUrl+"/api/hello",{method:"POST"})
  const data:DB[] = await res.json()
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




