<template>
  <div class="Product">
    <div class="container">
      <div class="link__wrapper">
        <a @click="goBack" class="link__back" tabindex="0">
          <v-icon icon="mdi-arrow-left" start></v-icon> Назад</a
        >
      </div>
      <div style="border-bottom: 2px solid #efefef"></div>
      <div class="photo">
        <v-img
          :key="item.img"
          height="240px"
          :src="item.img"
          contain
          @load="handleImageLoad"
          @error="handleError"
        >
          <v-skeleton-loader type="image" v-if="!imageLoaded" height="240">
          </v-skeleton-loader>
        </v-img>
      </div>

      <div class="description">
        <h2>{{ item.name }}</h2>
        <h4>
          Наличие на складе:
          <span class="orders"
            >{{ stockFormat(item.number) }}
            <span
              style="color: #727272 ; font-size: 10px"
              v-if="item.number !== '0' && item.number !== 'null'"
              >шт.</span
            ></span
          >
        </h4>
        <h1>Цена {{ item.price }} ₽</h1>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store";
import { Product } from "@/types/types";
import { stockFormat } from "@/utils/priceFormat";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const errorImg = "/img/errorImg.jpg";
const $router = useRouter();
const imageLoaded = ref(false);

const goBack = () => {
  $router.go(-1);
};
const handleImageLoad = () => {
  imageLoaded.value = true;
};
const handleError = () => {
  imageLoaded.value = true;
  item.value.img = errorImg;
};
const store = useStore();
const item = computed(() => store.product as Product);
</script>

<style scoped lang="scss">

.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
}

.orders {
  color: green;
}
.Product {
  padding-bottom: 43%;
}
.photo {
  padding: 30px;
  width: 45%;
  text-align: center;
  float: left;
  @media (width < 1200px) {
    padding: 10px 10px;
}

  img {
    max-height: 240px;
  }
}
.description {
  padding: 60px 70px;
  float: left;
  width: 55%;
  border-left: 2px solid #efefef;
  @media (width < 1200px) {
    padding: 30px 30px;
}

  h1 {
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
    color: #515151;
    font-weight: 300;
    font-size: 24px;
    font-weight: 300;
    @media (width < 1200px) {
      font-size: 18px;
}
 @media (width < 576px) {
      font-size: 16px;
}
@media (width < 425px) {
      font-size: 14px;
}
  }

  h2 {
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
    color: #515151;
    text-transform: uppercase;
    font-weight: 500;
    @media (width < 1200px) {
      font-size: 18px;
}
@media (width < 576px) {
      font-size: 14px;
}
@media (width < 425px) {
      font-size: 12px;
}
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
    color: #727272;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    @media (width < 1200px) {
      font-size: 12px;
}
@media (width < 576px) {
      font-size: 10px;
}
@media (width < 425px) {
      font-size: 8px;
}
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: #727272;
    padding: 20px 0;
    margin: 0;
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 15px;
    color: #515151;
    text-transform: uppercase;
    height: 40px;
    min-width: 125px;
    font-family: inherit;
    transition: all 0.3s ease;
    font-weight: 500;
    transform: translateY(20px);

    &:hover {
      background: rgb(146, 238, 146);
      border: 1px solid black;
      color: black;
      cursor: pointer;
    }
  }
}
.link__back {
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  color: rgb(113, 113, 113);
  font-size: 22px;
  font-weight: 400;
}
</style>
