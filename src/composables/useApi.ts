import ky from 'ky'
import {BASE_URL, URL_GOREST} from "../../config.ts";
import {Product} from "@/types/types.ts";

interface List {
  body: string
  title: string
  user_id: string
  id: number
}
const api = ky.create({prefixUrl: URL_GOREST})
const  apiSearch = ky.create({prefixUrl: BASE_URL})
export const useApi = async (name:string, id?: string, page?: number) => {
  let data: List[]  = []
  let status:number = 0
  let url = `posts?page=${page}&per_page=9`
  if(name !== '' && name) {
    url = `posts?page=${page}&per_page=9`
  }
  if(id !== '' && id) {
    url = `posts/${parseInt(id)}`
  }
  try {
    const res = await api.get(url)
                status = res.status
                data = await res.json<List[]>()
  } catch (error) {
    console.log('Не поступили данные')
    throw new Error('Что-то пошло не так')
  }
  return Promise.resolve({data: data, status:status})
}

export const useSearchData = async (name: string) => {
  let data: Product[] = []
  try {
    const res = await apiSearch.get('posts/', {searchParams: {
      title: name
      }})
    data = await res.json<Product[]>()
  } catch (err) {
    console.log(err)
  }
  return data
}

export const testing = async ()=> {
  try{
    const res = await apiSearch.get('posts').json()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
