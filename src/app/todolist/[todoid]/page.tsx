import type { Metadata } from 'next'
import TodoClient from '@/app/components/TodoClient'
import { baseUrl } from '@/app/core'


export async function generateStaticParams() {
  const res =  await fetch(baseUrl+'/api/todolist')
  const posts:TodoList[] =  await res.json()
  return posts.map((post) => ({
    params: { todoid: post.todoid.toString()},
  }))
}
export const generateMetadata = async ({ params }: {params:{todoid:string}}): Promise<Metadata> => {
  const {todoid} = params
	return {
		title: 'todolist - '+todoid,
		description: todoid
	}
}

async function getTodo(params:string) {
  const res = await fetch(baseUrl+`/api/todolist/${params}`,{next:{revalidate:1}})

  const data:TodoList = await res.json()
  return data
}

export default async function TodoDetail({params}:{params:{todoid:string}}){
  const {todoid} = params
  const todo = await getTodo(todoid)

  return (
    <>
    <div>My Post: {todoid}</div>
    <TodoClient todoProps={todo}/>
    </>
  )
}


