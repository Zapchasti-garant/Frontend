<template>
  <div>
    <HomeParts
      :list-products="listData"
      @change-page="changePage"
      :length="totalPages"
    />
  </div>
</template>

<script setup lang="ts">
import HomeParts from "@/components/Home/HomeParts.vue";
import { useApi } from "@/composables/useApi";
import { Product, Response } from "@/types/types";
import { onMounted, ref } from "vue";

const changePage = async (page: number) => {
  const res = await useApi<Response>(`product/limit?limit=9&offset=${page}`);
  if (res.data) {
    listData.value = res.data.rows as Product[];
  }
};

const listData = ref<Product[]>([]);
const totalPages = ref<number>(0);
onMounted(async () => {
  const res = await useApi<Response>(`product/limit?limit=9&offset=${1}`);
  if (res.data) {
    listData.value = res.data.rows as Product[];
    totalPages.value = Math.ceil(res.data.count / 9);
    console.log(listData.value);
  }
});
</script>

<style scoped></style>
