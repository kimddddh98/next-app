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


export default async function handler (req:NextApiRequest,res:NextApiResponse){
  if(req.method === 'GET'){
    client.query(`select * from todolist`,(err,result)=>{
      if(err){
        res.status(500).json({message:err})
        
      }
      else{
        res.status(200).json(result.rowCount)
      }
    })
  }
  else{
    res.status(400).end()
  }
}




