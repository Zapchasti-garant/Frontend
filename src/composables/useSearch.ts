import ky from 'ky'
import {BASE_URL} from "../../config.ts";
import {Product} from "@/types/types.ts";
import {ref} from 'vue'

const  apiSearch = ky.create({prefixUrl: BASE_URL})
export const useSearch = async (name: string) => {
  const data = ref<Product[]>([])
  try {
    const res = await apiSearch.get('posts/', {searchParams: {
        title: name
      }})
    data.value = await res.json<Product[]>()
  } catch (err) {
    console.log(err)
  }
  return data
}
