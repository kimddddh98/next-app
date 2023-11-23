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
  client.query(`select * from todolist order by todoid desc limit 5`,(err,result)=>{
    if(err){
      res.status(500).json({message:err})
      
    }
    else{
      res.status(200).json(result.rows)
    }
  })

}




