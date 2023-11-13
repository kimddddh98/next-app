import type { NextApiRequest, NextApiResponse } from 'next'
import {Client} from 'pg'
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: process.env.NEXT_PUBLIC_POSTGRES_DATABASE,
    password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
    port:  process.env.NEXT_PUBLIC_POSTGRES_PORT,
  });
  client.connect();

export default function handler(req:NextApiRequest,res:NextApiResponse){
  if(req.method === "GET"){
    if(req.query.todoid){
      client.query(`select * from todolist where todoid = ${req.query.todoid}`,(err,reslut)=>{
        if(err){
          res.status(400)
          throw err
        }
        else{
          res.json(reslut.rows)
        }
      })
    }
    else{
      client.query("select * from todolist",(err,reslut)=>{
        if(err){
          res.status(400)
          throw err
        }
        else{
          res.json(reslut.rows)
        }
      })

    }
 
  }
}