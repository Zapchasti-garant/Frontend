<template>
  <div class="carousel__wrapper">
    <div class="container">
      <Carousel />
    </div>
  </div>
  <div class="container">Компонент о нас</div>
</template>

<script setup lang="ts">
import Carousel from "@/ui/Carousel.vue";
</script>

<style scoped>
.carousel__wrapper {
  width: 100%;
  background-color: aqua;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/back-carousel.png");
}
</style>
