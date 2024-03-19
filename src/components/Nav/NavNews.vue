<template>
  <Background />
  <div>Компонент Новостей</div>
</template>

<script setup lang="ts">
import Background from "@/ui/Background.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log("mounted NewsComponent");
});
</script>

<style scoped></style>
