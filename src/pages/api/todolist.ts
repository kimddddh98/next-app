import type { NextApiRequest, NextApiResponse } from 'next'
import {Client} from 'pg'

const client = new Client({
  user: process.env.NEXT_PUBLIC_POSTGRES_USER,
  host: process.env.NEXT_PUBLIC_POSTGRES_DATABASE_HOST,
  database: process.env.NEXT_PUBLIC_POSTGRES_DATABASE,
  password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
  port:  process.env.NEXT_PUBLIC_POSTGRES_PORT,
  ssl:true
});
  client.connect()


export default async function handler (req:NextApiRequest,res:NextApiResponse){
  if(req.method === 'POST'){
    const page = req.body.page * 5
    console.log(page)

    client.query(`select * from todolist order by todoid limit 5 offset ${page}`,(err,result)=>{
      if(err){
        res.status(500).json({message:err})
      }
      else{
        res.status(200).json(result.rows)
      }
    })
  }
  else if(req.method === 'GET'){
    console.log('else')
    client.query(`select * from todolist order by todoid desc`,(err,result)=>{
      if(err){
        res.status(500).json({message:err})
        
      }
      else{
        res.status(200).json(result.rows)
      }
    })
  }
  else{
    res.status(400).end()
  }
}




