import type { NextApiRequest, NextApiResponse } from 'next'
// import {Client} from 'pg'
//   const client = new Client({
//     user: "postgres",
//     host: "localhost",
//     database: "firstpost",
//     password: "3496",
//     port: 5432,
//   });
//   client.connect();
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('sdkljfaskjdfl')
  // res.status(200).json({
  //   data:{data:'성공'}
  // })
  if (req.method === 'POST') {
    // Process a POST request
    // client.query('SELECT * FROM topic', (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   console.log(results.rows)
    //   res.status(200).json({
    //     data:results.rows
    //   })
    // })
    res.status(200).json({
      data:{data:'post'}
    })
  } else {
    res.status(200).json({
      data:{data:'성공'}
    })
    // Handle any other HTTP method
  }
}



