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
  console.log('get')
  client.query(`select * from todolist`,(err,result)=>{
    if(err){
      return res.json({erorr:err})
    }
    else{
      return res.json(result.rows)
    }
  })

}

