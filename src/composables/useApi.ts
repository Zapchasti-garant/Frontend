import { Product } from "@/types/types.ts";
import ky from "ky";
import { ref } from "vue";
import { BASE_URL } from "../../config.ts";

const api = ky.create({ prefixUrl: BASE_URL });
export const useApi = async (name: string, id?: string, page?: number) => {
  let data = ref<Product[]>([]);
  let status = ref<number>(0);
  let url = `product?limit=${page}&offset=9`;
  if (name !== "" && name) {
    url = `posts?limit=${page}&offset=9`;
  }
  if (id !== "" && id) {
    url = `product/id?id==${id}`;
  }
  try {
    const res = await api.get(url);
    status.value = res.status;
    data.value = await res.json<Product[]>();
    console.log(data.value);
  } catch (error) {
    console.log("Не поступили данные");
    throw new Error("Что-то пошло не так");
  }
  return Promise.resolve({ data: data, status: status });
};
