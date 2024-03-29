import { useApi } from "@/composables/useApi.ts";
import { useSearch } from "@/composables/useSearch.ts";
import { Product } from "@/types/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const listData = ref<Product[]>([]);
  const parts = ref<Product[]>([]);
  const gaskets = ref<Product[]>([]);
  const listSearch = ref<any>([]);
  const totalPages = ref<number>(0);
  const product = ref<Product>({
    category: "",
    id: "",
    img: "",
    number: "",
    name: "",
    price: "",
  });

  async function getList(id?: string, view?: string) {
    if (view) {
      const res = await useApi(id, view);
      if ("data" in res) {
        if (res.status === 200 || res.status === 201) {
          listData.value = res.data;
          // this.parts =  data.filter((item: List) => item.category === '3')
          // this.gaskets = data.filter((item) => item.category === '2')
        }
      }
    }
  }

  function pageSearch() {
    listData.value = listSearch.value;
  }
  async function getProduct(id: string) {
    const res = await useApi(id, "");
    if ("product" in res) {
      product.value = res.product;
    }
  }
  async function fetchSearch(name: string) {
    const res = await useSearch(name);
    const error = {
      title: "Ничего не найдено, попробуйте изменить условия поиска",
    };
    if (res.value.length !== 0) {
      listSearch.value = res.value;
    } else {
      if (res.value.length === 0) {
        listSearch.value = [];
        listSearch.value.push(error);
      }
    }
  }
  function clearState() {
    listData.value = [];
  }
  function clearSearch() {
    listSearch.value = [];
  }
  return {
    listData,
    listSearch,
    parts,
    gaskets,
    getList,
    getProduct,
    fetchSearch,
    clearState,
    clearSearch,
    totalPages,
    product,
    pageSearch,
  };
});
