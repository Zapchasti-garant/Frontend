<template>
  <Background />
  <div>Компонент Спец предложений</div>
</template>

<script setup lang="ts">
import Background from "@/ui/Background.vue";
import { onMounted } from "vue";
onMounted(() => {
  console.log("mounted Offerss");
});
</script>

<style scoped></style>
