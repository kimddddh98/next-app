import CreateClient from './components/page/CreateClient'
const baseUrl = process.env.NEXT_PUBLIC_API_PATH




export default async function App() {
  return (
    <div className='home'>
      <CreateClient/>
    </div>
  )
}
