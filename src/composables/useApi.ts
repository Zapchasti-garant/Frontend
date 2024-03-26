import ky from 'ky'
import {URL_GOREST} from "../../config.ts";
import {ref} from 'vue'

interface List {
  body: string
  title: string
  user_id: string
  id: number
}
const api = ky.create({prefixUrl: URL_GOREST})
export const useApi = async (name:string, id?: string, page?: number) => {
  let data = ref<List[]>([])
  let status = ref<number>(0)
  let url = `posts?page=${page}&per_page=9`
  if(name !== '' && name) {
    url = `posts?page=${page}&per_page=9`
  }
  if(id !== '' && id) {
    url = `posts/${parseInt(id)}`
  }
  try {
    const res = await api.get(url)
                status.value = res.status
                data.value = await res.json<List[]>()
  } catch (error) {
    console.log('Не поступили данные')
    throw new Error('Что-то пошло не так')
  }
  return Promise.resolve({data: data, status:status})
}



