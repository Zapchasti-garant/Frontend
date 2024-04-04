<template>
  <section class="parts">
    <div class="container custom__wrapper-list">
      <v-card
        class="custom__wrapper-card"
        style="cursor: pointer"
        v-for="(item, idx) in props.listProducts"
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
            height="230px"
          >
          </v-skeleton-loader>
        </v-img>
        <div class="text-wrapper">
        <v-card-title class="text-title">
          {{ item.name }}
        </v-card-title>
        <v-card-title class="text-price"> Цена: {{ item.price }} ₽</v-card-title>
        <v-card-subtitle style="padding-top: 15px; padding-bottom: 15px" class="text-availability">
          Наличие на складе: {{ stockFormat(item.number) }}
        </v-card-subtitle>
      </div>
      </v-card>
    </div>
    <HomePagination @change-page="changePage" :length="props.length" />
  </section>
</template>

<script setup lang="ts">
import { Product } from "@/types/types";
import { stockFormat } from "@/utils/priceFormat";
import { ref } from "vue";
import { useRouter } from "vue-router";
import HomePagination from "./HomePagination.vue";

const props = defineProps({
  listProducts: {
    type: Array as () => Array<Product>,
    required: true,
  },
  length: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["changePage"]);

const errorImg = "/img/errorImg.jpg";
const $router = useRouter();
const currentPage = ref(1);
const goToViewProduct = (id: string) => {
  $router.push({ name: "product", params: { id } });
};
const imageLoaded = ref<any>({});

const handleImageLoad = (imageUrl: any) => {
  imageLoaded.value[imageUrl] = true;
};

const changePage = (page: number) => {
  currentPage.value = page;
  emit("changePage", page);
};
</script>

<style scoped lang="scss">
.custom__wrapper-card {
  width: 100%;
  justify-self: center;

  @media (width < 768px) {
    max-width: 100%;
  }
}
.parts {
  padding: 30px 0;
}
.custom__wrapper-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (width < 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width < 768px) {
    grid-template-columns: 1fr;
  }
}
.text-title {
  @media (width < 1340px) {
      font-size: 18px;
}
@media (width < 1200px) {
      font-size: 14px;
}
}

.text-price {
  @media (width < 1340px) {
      font-size: 16px;
}
}
.text-availability {
  @media (width < 1340px) {
      font-size: 14px;
}
}
.text-wrapper {
  @media (width < 768px) {
      display: flex;
      align-items: center;
      flex-direction: column;
}
}
</style>
