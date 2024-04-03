<template>
  <div>
    <HomeParts :list-products="listData" />
  </div>
</template>

<script setup lang="ts">
import HomeParts from "@/components/Home/HomeParts.vue";
import { useApi } from "@/composables/useApi";
import { useStore } from "@/store/store";
import { Product } from "@/types/types";
import { computed, onMounted, ref, watch } from "vue";

const store = useStore();
const listData = ref<Product[]>([]);
const nameProduct = computed(() => store.requestSearch as string);

watch(
  () => store.requestSearch,
  async (newValue) => {
    const encodedName =
      newValue.charAt(0).toUpperCase() + newValue.slice(1).toLowerCase();

    try {
      const res = await useApi<Product[]>(`product/name`, {
        name: encodedName,
      });
      if (res.data) {
        listData.value = res.data as Product[];
      }
    } catch (error) {
      throw new Error("Ошибка при запросе");
    }
  }
);

onMounted(async () => {
  const encodedName =
    nameProduct.value.charAt(0).toUpperCase() +
    nameProduct.value.slice(1).toLowerCase();
  try {
    const res = await useApi<Product[]>(`product/name`, { name: encodedName });
    if (res.data) {
      listData.value = res.data as Product[];
    }
  } catch (error) {
    throw new Error("Ошибка при запросе");
  }
});
</script>

<style scoped></style>
