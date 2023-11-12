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
    client.query('SELECT * FROM usertable', (error, results) => {
      if (error) {
        res.status(400)

        throw error
      }
      res.status(200).json(
        results.rows
      )
    })
    
  }
  else if(method === 'PUT'){
    client.query('UPDATE usertable SET password = 59415941 , update = now() WHERE userid = 1;',(err,result)=>{

      
      if (err) {
        res.status(400)
        throw err
        
      }
      res.status(200).json(
        result.rows
      )

    })
  }
  else{
    res.status(400)

  }

}

