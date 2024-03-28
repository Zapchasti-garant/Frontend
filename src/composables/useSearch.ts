import { Product } from "@/types/types.ts";
import ky from "ky";
import { ref } from "vue";
import { BASE_URL } from "../../config.ts";

const apiSearch = ky.create({ prefixUrl: BASE_URL });
export const useSearch = async (name: string) => {
  const data = ref<Product[]>([]);
  const encodedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(encodedName);
  try {
    const res = await apiSearch.get(`product/name?name=${encodedName}`);
    console.log(res);
    data.value = await res.json<Product[]>();
    console.log(data.value);
  } catch (err) {
    console.log(err);
    data.value = [];
  }
  return data;
};
