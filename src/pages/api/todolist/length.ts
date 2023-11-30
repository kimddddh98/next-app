import type { NextApiRequest, NextApiResponse } from 'next'
import {Client} from 'pg'
import dayjs from 'dayjs';

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
  const today = dayjs(new Date()).format('YYYY-MM-DD')
  if(req.method === 'GET'){
    const data = await Promise.all([
      client.query('SELECT * FROM todolist'),
      client.query(`
      SELECT * FROM todolist
      WHERE enddate = '${today}'`),
    ])
    const [allList,todayList] =  data
    res.status(200).json({
      allList: allList.rowCount,
      todayList:todayList.rowCount
    })
  }
  else{
    res.status(400).end()
  }
}




