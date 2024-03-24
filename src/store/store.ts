import {defineStore} from 'pinia'
import {useApi, useSearchData} from "@/composables/useApi.ts";
import {Product} from "@/types/types.ts";

interface List {
  body: string
  title: string
  user_id: string
  id: number
}
export const useStore = defineStore('store', {
	state: () => ({
    listData: [] as List[],
    parts: [] as List[],
    gaskets: [] as List[],
    listSearch: [] as Product[]
  }),
  getters: {
    getSearch: state => state.listSearch
  },
	actions: {
    async getList(name: string, id?: string, view?: number) {
      const {data, status } = await useApi(name,id,view)
      if(status === 200 || status === 201) {
        this.listData = data
        // this.parts =  data.filter((item: List) => item.category === '3')
        // this.gaskets = data.filter((item) => item.category === '2')
      }
      return this.listData
    },
    getProduct(id: number) {
       return this.listData.find((item) => item.id === id)
    },
    async fetchSearch(name: string) {
      this.listSearch = await useSearchData(name)
    },
    getOneProduct(id: number) {
      return this.listData.find((item) => item.id === id)
    }
	},
})
