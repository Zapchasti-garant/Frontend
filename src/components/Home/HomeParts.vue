<template>
  <section class="parts">
    <div class="container custom__wrapper-list">
      <v-card
        max-width="344"
        v-for="(item, idx) in listData"
        :key="idx"
        @click="goToViewProduct(item.id)"
      >
        <v-img height="200px" :src="item.img" cover @load="loader">
          <v-skeleton-loader type="image" v-if="loadSkeleton" height="200">
          </v-skeleton-loader>
        </v-img>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle style="padding-top: 15px; padding-bottom: 15px">
          Наличие на складе: {{ item.number }}
        </v-card-subtitle>
      </v-card>
    </div>
    <HomePagination />
  </section>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store.ts";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import HomePagination from "./HomePagination.vue";

const store = useStore();
const $router = useRouter();
const loadSkeleton = ref(true);
const goToViewProduct = (id: string) => {
  $router.push({ name: "product", params: { id } });
};

const loader = () => {
  loadSkeleton.value = false;
};

const listData = computed(() => {
  if (store.listSearch.length !== 0) {
    return store.listSearch;
  }
  return store.listData;
});

onMounted(async () => {
  loadSkeleton.value = true;
  console.log(store.listSearch);
  if (store.flag) {
    store.flag = false;
    return;
  }
  try {
    await store.getList("", "1");
  } catch (err) {
    console.log(err);
  }
});
</script>

<style scoped lang="scss">
.parts {
  padding: 30px 0;
}
.custom__wrapper-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
