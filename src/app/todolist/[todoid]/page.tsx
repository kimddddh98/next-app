import type { Metadata } from 'next'
import TodoClient from '@/app/components/TodoClient'

const baseUrl = process.env.NEXT_PUBLIC_API_PATH



// export async function getStaticPaths() {
// 	const { data }:{data:TodoList[]} = await http('/api/todolist')

// 	return {
// 		fallback: false,
// 		paths: data?.map(todolist => ({
// 			params: { todoidid: todolist.todoid },
// 		})),
// 	}
// }


export const generateMetadata = async ({ params }: {params:{todoid:string}}): Promise<Metadata> => {
	return {
		title: 'todolist - '+params.todoid,
		description: params.todoid
	}
}

async function getTodo(params:string) {
  const res = await fetch(baseUrl+`/api/todolist?todoid=${params}`)

  const data:TodoList = await res.json()
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

export async function generateStaticParams() {
  const res =  await fetch(baseUrl+'/api/todolist')
  const posts:TodoList[] =  await res.json()
  return posts.map((post) => ({
    params: { todoid: post.todoid.toString() },
  }))
}
