import {defineStore} from 'pinia'
import {useApi} from "@/composables/useApi.ts";
import {useSearch} from "@/composables/useSearch.ts";
import {ref} from 'vue'

interface List {
  body: string
  title: string
  user_id: string
  id: number
}
export const useStore = defineStore('store', () => {
  const listData = ref<List[]>([])
  const parts = ref<List[]>([])
  const gaskets = ref<List[]>([])
  const listSearch = ref<any>([])

  async function getList(name: string, id?: string, view?: number) {
    const {data, status } = await useApi(name,id,view)
    if(status.value === 200 || status.value === 201) {
      listData.value = data.value
      // this.parts =  data.filter((item: List) => item.category === '3')
      // this.gaskets = data.filter((item) => item.category === '2')
    }
  }
  function getProduct(id: number) {
    return listData.value.find((item) => item.id === id)
  }
  async function fetchSearch(name: string) {
    const res = await useSearch(name)
    const error = {
      title: "Ничего не найдено, попробуйте изменить условия поиска"
    }
    if(res.value.length !== 0) {
      listSearch.value = res.value
    } else {
      if(res.value.length === 0) {
        listSearch.value.push(error)
      }
    }
  }
  function clearState() {
    listData.value = []
  }
  function clearSearch() {
    listSearch.value = []
  }
  return {listData,listSearch,parts,gaskets,getList,getProduct,fetchSearch,clearState,clearSearch}
})
