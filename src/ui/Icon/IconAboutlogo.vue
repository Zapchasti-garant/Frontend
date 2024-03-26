<template>
  <img :src="logoIcon" alt="Логотип" :width="props.width" :height="props.height"/>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 48,
  },
  height: {
    type: Number,
    default: 48,
  },
});

const logoIcon = ref("/img/about1.png");

</script>

<style scoped>

</style>
