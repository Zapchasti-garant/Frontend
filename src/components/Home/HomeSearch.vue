<template>
  <v-list lines="one">
    <v-list-item
      v-for="(ctx, idx) in listSearch"
      :key="idx"
      class="custom__list-item"
      @click="goToViewProduct(ctx.id)"
    >
      <h4>{{ ctx.name }}</h4>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store.ts";
import { Product } from "@/types/types.ts";
import { computed } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();
const store = useStore();
const listSearch = computed(() => store.listSearch as Product[]);
const emit = defineEmits(["click-product"]);
const goToViewProduct = async (id: string) => {
  await store.getProduct(id);
  store.clearSearch();
  emit("click-product", true);
  window.scrollTo({
    top: 550,
    behavior: "smooth",
  });
  $router.push({ name: "product", params: { id } });
};
</script>

<style scoped>
.custom__list-item {
  border-bottom: 1px solid grey;
  cursor: pointer;
  transition: background 0.3s ease;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #d4d5d5;
  }
}
.v-list {
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  gap: 10px;
  max-height: 20em;
  overflow-y: auto;
}
</style>
