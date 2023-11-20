interface User{
  userid: number
  name: string,
  password: string,
  email: string,
  created: string
  update: string
  iconUrl?: string
}
interface TodoList{
  content : string
  enddate: string
  isdone: boolean
  startdate : string
  title: string
  todoid : number
  userid : number
}

