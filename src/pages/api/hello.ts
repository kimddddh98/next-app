import type { NextApiRequest, NextApiResponse } from 'next'



// export function GET(req: NextApiRequest, res: NextApiResponse) {

// }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method === 'POST') {
    // client.query('SELECT * FROM topic', (error, results) => {
    //   if (error) {
    //     res.status(500).end()
    //     throw error
    //   }
    //   res.status(200).json(
    //     results.rows
    //   )
    // })
    res.status(200).json({
      data:'data'
    })
  }
  else{
    res.status(200).json({
      data:'data'
    })
  }

}
export const api = {
  externalResolver: true,
};

