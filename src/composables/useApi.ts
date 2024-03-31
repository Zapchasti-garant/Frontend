import { Product } from "@/types/types.ts";
import ky from "ky";
import { ref } from "vue";
import { BASE_URL } from "../../config.ts";

type Response = {
  rows: Product[];
  count: number;
};
const api = ky.create({ prefixUrl: BASE_URL });
export const useApi = async (id?: string, page?: string) => {
  const data = ref<Response>({
    rows: [],
    count: 0,
  });
  const status = ref<number>(0);
  const product = ref<Product>({
    category: "",
    id: "",
    img: "",
    number: "",
    name: "",
    price: "",
  });
  if (page !== "" && page) {
    const res = await api.get(`product/limit?limit=9&offset=${page}`);
    status.value = res.status;
    data.value = await res.json<Response>();
  }

  if (id !== "" && id) {
    const res = await api.get(`product/id?id=${id}`);
    status.value = res.status;
    product.value = await res.json<Product>();
  }

  if (id) {
    return Promise.resolve({ product: product.value, status: status.value });
  } else {
    return Promise.resolve({
      rows: data.value.rows,
      status: status.value,
      pages: data.value.count,
    });
  }
};
