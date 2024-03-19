<template>
  <v-carousel show-arrows="hover" hide-delimiters cycle interval="5000">
    <v-carousel-item v-for="item in images" :src="item" cover></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
// @ts-ignore
import { images } from "../helpers/pathToImg";
</script>

<style scoped></style>
