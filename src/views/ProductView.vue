<template>
  <div>
    <BaseViewProduct :item="oneItem"/>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "@/store/store.ts";
import {useRoute} from "vue-router";
import BaseViewProduct from "@/components/Home/HomeViewProduct.vue";

const route = useRoute()
const itemId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
// Преобразуем itemId в число, если это возможно
const itemIdNew = parseInt(itemId);
const store = useStore()


const oneItem: any = store.getProduct(itemIdNew)
</script>

<style scoped>

</style>
