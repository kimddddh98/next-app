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


export default async function  handler(req:NextApiRequest,res:NextApiResponse){
  if(req.method === "GET"){
    if(req.query.todoid){
     client.query(`select * from todolist where todoid = ${req.query.todoid}`,(err,result)=>{
        if(err){
          return res.json({erorr:err})
        }
        else{
          const [row] = result.rows 
          return res.json(row)
        }
      })
    }
    else{
       client.query(`select * from todolist`,(err,result)=>{
        if(err){
          return res.json({erorr:err})
        }
        else{
          return res.json(result.rows)
        }
      })
    }
  }
  else {
    const body :TodoList = req.body
    console.log(body)
    client.query(`update todolist set isdone = ${body.isdone} where todoid = ${body.todoid}`,(err,result)=>{
      if(err) res.json({error:err})
      else{
        res.json({m:'수정완료',result:result.rows})
      }
    })
  }

}
