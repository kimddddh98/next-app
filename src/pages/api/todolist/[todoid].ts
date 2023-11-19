import { NextResponse } from 'next/server';
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
export default async function handler(req:NextApiRequest,res:NextApiResponse){

  switch(req.method){
    case "GET" :
      client.query(`select * from todolist where todoid = ${req.query.todoid}`,(err,result)=>{
        if(err){
          return NextResponse.json({erorr:err})
        }
        else{
          const [row] = result.rows 
          return res.json(row)
        }
      });
      break;
      case "POST" :
        const body :TodoList = req.body
        client.query(`update todolist set isdone = ${body.isdone} where todoid = ${body.todoid}`,(err,result)=>{
          if(err) res.json({error:err})
          else{
            res.json({m:'수정완료',result:result.rows})
          }
        });
      break
      
      default :
      res.status(400).json({message:'잘못된 요청'})
      
  }
}
// post
