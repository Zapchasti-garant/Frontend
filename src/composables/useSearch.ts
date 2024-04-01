import { Product } from "@/types/types.ts";
import ky from "ky";
import { ref } from "vue";
import { BASE_URL } from "../../config.ts";

const apiSearch = ky.create({ prefixUrl: BASE_URL });
export const useSearch = async (name: string) => {
  const data = ref<Product[]>([]);
  const encodedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  if (name.length > 3) {
    try {
      const res = await apiSearch.get(`product/name?name=${encodedName}`);
      data.value = await res.json<Product[]>();
    } catch (err) {
      data.value = [];
    }
  }

  return data;
};
