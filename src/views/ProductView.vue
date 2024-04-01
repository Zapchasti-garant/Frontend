<template>
  <div>
    <HomeViewProduct />
  </div>
</template>

<script setup lang="ts">
import HomeViewProduct from "@/components/Home/HomeViewProduct.vue";
import { useStore } from "@/store/store.ts";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const store = useStore();

const route = useRoute();
onMounted(async () => {
  const itemId = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id;
  const itemIdNew = itemId.toString();
  await store.getProduct(itemIdNew);
});

watch(
  () => route.params.id,
  async (newVal) => {
    const id = Array.isArray(newVal) ? newVal[0] : newVal;
    await store.getProduct(id);
  }
);
</script>

<style scoped></style>
