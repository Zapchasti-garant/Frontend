import { useStore } from "@/store/store.ts";
import ky from "ky";
import { ref, UnwrapRef } from "vue";
import { BASE_URL } from "../../config.ts";

const api = ky.create({ prefixUrl: BASE_URL });
export const useApi = async <T>(url: string, params?: Record<string, any>) => {
  const data = ref<T | null>(null);
  const status = ref<number>(0);
  const store = useStore();
  try {
    const res = await api.get(url, {
      searchParams: params,
    });
    status.value = res.status;
    data.value = (await res.json<T>()) as UnwrapRef<T> | null;
  } catch (error: any) {
    console.error("API request failed:", error);
    status.value = error.response?.status || 500;
    store.pushErrors("Произошла ошибка. Попробуйте повторить запрос.");
  }
  return { data: data.value, status: status.value };
};
