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


// export function GET(req: NextApiRequest, res: NextApiResponse) {

// }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method === 'POST') {
    client.query('SELECT * FROM topic', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(
        results.rows
      )
    })
    
  }
  else{
    res.status(200).json({
      data:'data'
    })
  }

}





