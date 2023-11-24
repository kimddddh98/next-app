import type { NextApiRequest, NextApiResponse } from 'next'
import {Client} from 'pg'

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: process.env.NEXT_PUBLIC_POSTGRES_DATABASE,
    password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
    port:  process.env.NEXT_PUBLIC_POSTGRES_PORT,
    
  });
  client.connect()

  type TodoCreate = Omit<TodoList, "todoid" | "isdone">;
export default async function handler (req:NextApiRequest,res:NextApiResponse){
  
  const {method} = req
  if(method === "POST"){
    const body :TodoCreate = req.body 
    console.log(body)
    client.query(`INSERT INTO todolist 
    ( 
      title, 
      content,  
      startdate, 
      enddate, 
      userid) VALUES (
      '${body.title}',
      '${body.content}',
      '${body.startdate}',
      '${body.enddate}',
      ${body.userid}
    )`,(err,result)=>{
      if(err) {
        console.log(err)
        res.status(500).json({message:err})
      }
      else{
        res.status(200).json({m:'수정완료',result:result.rows})
      }
    });
  }
  else{
    res.status(400).json({message:'잘못된 요청'})
  }

}

