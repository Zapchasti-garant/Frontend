<template>
  <div>
    <HomeParts :list-products='listData'/>
  </div>
</template>

<script setup lang="ts">
import HomeParts from '@/components/Home/HomeParts.vue';
import { useApi } from "@/composables/useApi";
import { useStore } from "@/store/store";
import { Product } from '@/types/types';
import { computed, onMounted, ref, watch } from 'vue';

const store = useStore();
const listData = ref<Product[]>([]);

const currentCategory = computed(() => store.category);

onMounted(async () => {
  const res = await useApi<Product[]>(`product/category?category=${currentCategory.value}`);
    if (res.data) {
      listData.value = res.data as Product[];
    }
})

watch(() => store.category, async (newValue) => {
    const res = await useApi<Product[]>(`product/category?category=${newValue}`);
    if (res.data) {
      listData.value = res.data as Product[];
    }
})
</script>

<style scoped>

</style>
