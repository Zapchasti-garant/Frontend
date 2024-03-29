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
        <v-card-subtitle>
          Наличие на складе: {{ item.number }}
        </v-card-subtitle>
      </v-card>
    </div>
    <div class="wrapper__pagination">
      <v-pagination
        :length="4"
        v-model="page"
        @click="changeView(page)"
      ></v-pagination>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store.ts";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const loadSkeleton = ref(true);
const goToViewProduct = (id: string) => {
  $router.push({ name: "product", params: { id } });
};

const loader = () => {
  loadSkeleton.value = false;
};

const listData = computed(() => {
  return store.listData;
});
const store = useStore();
const page = ref<number>(1);
const changeView = async (view: number) => {
  await store.getList( "", view.toString());
};
onMounted(async () => {
  loadSkeleton.value = true;
  try {
    await store.getList("", page.value.toString());
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
.wrapper__pagination {
  padding: 20px 0;
}
</style>
