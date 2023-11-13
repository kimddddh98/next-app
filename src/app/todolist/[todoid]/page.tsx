import type { Metadata } from 'next'
import { http } from '@/app/core'

export async function generateStaticParams() {
  const res =  await http('/api/todolist')
  const posts:TodoList[] = res.data

 
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

  const data:TodoList[] = await res.data
  return data
}

export default async function  TodoDetail({params}:{params:{todoid:string}}){
  const todos = await getTodo(params.todoid)
  

  return (
    <>
    <div>My Post: {params.todoid}</div>
    {todos.map(todo=>(<div key={todo.todoid}>
      {todo.content}
      {todo.title}
      {todo.isdone?'완료':'미완료'}

    </div>))}
    <div>
      {/* {todo?.todoid} */}
      {/* {todo?.title} */}
      {/* {todo?todo.content:<h2>isloading...</h2>} */}
    </div>
    </>
  )
}