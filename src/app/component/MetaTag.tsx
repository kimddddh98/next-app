import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  pathName:string
}

export async function generateMetadata(
  { pathName }: Props

): Promise<Metadata> {
  // read route params
 console.log(pathName)
 debugger
  // fetch data
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: pathName,
   
  }
}
export default function MetaTag({pathName}:Props){

  return (
    <>
    {pathName}meta

    </>
  )
}