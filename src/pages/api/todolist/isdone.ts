import type { NextApiRequest, NextApiResponse  } from 'next'

import {Client} from 'pg'

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: process.env.NEXT_PUBLIC_POSTGRES_DATABASE,
    password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
    port:  process.env.NEXT_PUBLIC_POSTGRES_PORT,
    
  });
  client.connect()

// get
type  Body = {
  todoid:number
  isdone:boolean
}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
  if(req.method ==="POST"){
    const body :Body = req.body
    console.log(body)
    client.query(`update todolist set isdone = ${body.isdone} where todoid = ${body.todoid}`,(err,result)=>{
      if(err) res.status(500).json({message:err})
      else{
        res.json({message:'수정완료',result:result.rows})
      }
    });
  }
  else res.status(400).json({message:'잘못된 요청'})

}
// post


