import type { Metadata } from 'next'
import { http } from '@/app/core'
import TodoClient from '@/app/component/TodoClient'
export async function generateStaticParams() {
  const res =  await http('/api/todolist')
  const posts:TodoList[] =  await res.data
  return posts.map((post) => ({
    todoid: post.todoid.toString()
  }))
}

export const generateMetadata = async ({ params }: {params:{todoid:string}}): Promise<Metadata> => {
	return {
		title: 'todolist - '+params.todoid,
		description: params.todoid
	}
}

async function getTodo(params:string) {
  const res = await http(`/api/todolist?todoid=${params}`)

  const data:TodoList = await res.data
  return data
}

export default async function  TodoDetail({params}:{params:{todoid:string}}){
  // console.log(todo)
  const todo = await getTodo(params.todoid)

  return (
    <>
    <div>My Post: {params.todoid}</div>
    <TodoClient todoProps={todo}/>
    </>
  )
}