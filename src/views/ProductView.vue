<template>
  <div>
    <BaseViewProduct :item="oneItem" />
  </div>
</template>

<script setup lang="ts">
import BaseViewProduct from "@/components/Home/HomeViewProduct.vue";
import { useStore } from "@/store/store.ts";
import { useRoute } from "vue-router";

const route = useRoute();
const itemId = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id;
// Преобразуем itemId в число, если это возможно
const itemIdNew = itemId.toString();
const store = useStore();

const oneItem: any = store.getProduct(itemIdNew);
</script>

<style scoped></style>
