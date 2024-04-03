import { useApi } from "@/composables/useApi.ts";
import { Product } from "@/types/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const listSearch = ref<any>([]);
  const category = ref<string>("");
  const errors = ref<any>([]);
  const requestSearch = ref<string>("");
  const product = ref<Product>({
    category: "",
    id: "",
    img: "",
    number: "",
    name: "",
    price: "",
  });

  function pushErrors(error: any) {
    errors.value.push({
      name: error,
    });
    setTimeout(() => {
      errors.value = [];
    }, 5000);
  }
  function pageSearch(name: string) {
    requestSearch.value = name;
  }
  async function getProduct(id: string) {
    const res = await useApi<Product>(`product/id?id=${id}`);
    if (res.status === 200) {
      product.value = res.data as Product;
    }
  }
  async function fetchSearch(name: string) {
    const encodedName =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const res = await useApi<Product[]>(`product/name`, { name: encodedName });
    if (name.length < 3) {
      listSearch.value = [];
      return;
    }
    const error = {
      name: "Ничего не найдено, попробуйте изменить условия поиска",
    };
    if (res.data && res.data.length !== 0) {
      listSearch.value = res.data;
    } else {
      if (res.data && res.data.length === 0) {
        listSearch.value = [];
        listSearch.value.push(error);
      }
    }
  }
  function clearSearch() {
    listSearch.value = [];
  }

  function getCategory(name: string) {
    category.value = name;
  }
  return {
    listSearch,
    getProduct,
    fetchSearch,
    clearSearch,
    product,
    pageSearch,
    requestSearch,
    category,
    getCategory,
    errors,
    pushErrors,
  };
});
