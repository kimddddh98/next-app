import { Metadata } from 'next'
import CreateClient from '../components/page/CreateClient'
export const metadata: Metadata = {
  title: '할 일 작성'
}



export default async function createPage(){
  // const data = await getData()

  return(
  <div>
    <h4>할 일 작성</h4>
    <CreateClient/>
  </div>)

}




