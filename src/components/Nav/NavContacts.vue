<template>
  <Background />
  <div>contacts</div>
</template>

<script setup lang="ts">
import Background from "@/ui/Background.vue";
import { onMounted } from "vue";
onMounted(() => {
  console.log("mounted Contacts");
});
</script>

<style scoped></style>
