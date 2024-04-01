<template>
  <section class="parts">
    <div class="container custom__wrapper-list">
      <v-card
        max-width="344"
        v-for="(item, idx) in listData"
        :key="idx"
        @click="goToViewProduct(item.id)"
      >
        <v-img
          :key="idx"
          height="200px"
          :src="item.img"
          contain
          @load="handleImageLoad(item.img)"
          @loadstart="handleImageLoad(item.img)"
          @error="item.img = errorImg"
        >
          <v-skeleton-loader
            type="image"
            v-if="!imageLoaded[item.img]"
            height="200"
          >
          </v-skeleton-loader>
        </v-img>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle style="padding-top: 15px; padding-bottom: 15px">
          Наличие на складе: {{ stockFormat(item.number) }}
        </v-card-subtitle>
      </v-card>
    </div>
    <HomePagination @change-page="changePage" />
  </section>
</template>

<script setup lang="ts">
import { stockFormat } from "@/helpers/priceFormat";
import { useStore } from "@/store/store.ts";
import { computed, onActivated, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import HomePagination from "./HomePagination.vue";
const errorImg = "/img/errorImg.jpg";
const store = useStore();
const $router = useRouter();
const loadSkeleton = ref(true);
const currentPage = ref("1");
const goToViewProduct = (id: string) => {
  $router.push({ name: "product", params: { id } });
};
const imageLoaded = ref<any>({});

const handleImageLoad = (imageUrl: any) => {
  imageLoaded.value[imageUrl] = true;
};

const listData = computed(() => {
  if (store.listSearch.length !== 0) {
    return store.listSearch;
  }
  return store.listData;
});
const changePage = (page: string) => {
  currentPage.value = page;
  console.log(currentPage.value);
};

onActivated(async () => {
  await store.getList("", currentPage.value);
});

onMounted(async () => {
  loadSkeleton.value = true;

  if (store.flag) {
    store.flag = false;
    return;
  }
  try {
    await store.getList("", currentPage.value);
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
