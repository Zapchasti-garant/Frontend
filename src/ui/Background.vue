<template>
  <div class="carousel__wrapper">
    <div class="container wrapper__img">
      <img :src="backImg" alt="" class="imgFon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const backImg = ref("/img/img3.jpg");
</script>

<style scoped>
.carousel__wrapper {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/back-carousel.png");
}
.wrapper__img {
  height: 340px;
}
.imgFon {
  width: 100%;
  height: 100%;
}
</style>
