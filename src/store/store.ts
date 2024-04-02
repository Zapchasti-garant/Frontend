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
  const flag = ref<boolean>(false);

  async function getList(id?: string, view?: string) {
    const res = await useApi(id, view);
    if ("products" in res) {
      listData.value = res.products;
    }
  }

  function pageSearch() {
    totalPages.value = Math.ceil(listSearch.value.length / 9);
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
    if (name.length < 3) {
      listSearch.value = [];
      return;
    }
    const error = {
      name: "Ничего не найдено, попробуйте изменить условия поиска",
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
    totalPages.value = 0;
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
    flag,
    pageSearch,
  };
});
