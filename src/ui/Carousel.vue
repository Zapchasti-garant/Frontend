<template>
  <div class="carousel__wrapper">
    <div class="container">
      <v-carousel show-arrows="hover" hide-delimiters cycle interval="5000">
        <v-carousel-item
          v-for="item in images"
          :src="item"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {images} from "../helpers/helpersData.ts";
</script>

<style scoped>
.carousel__wrapper {
  width: 100%;
  background-color: grey;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/back-carousel.png");
}
</style>
