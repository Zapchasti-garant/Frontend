<template>
  <div>
    <HomeParts />
  </div>
</template>

<script setup lang="ts">
import HomeParts from "@/components/Home/HomeParts.vue";
import { useStore } from "@/store/store.ts";
import { watch } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
watch(
  () => route.name,
  (newValue) => {
    store.clearState();
    if (newValue !== "parts") {
      console.log("work");
    }
  }
);
</script>

<style scoped></style>
