<template>
  <v-card class="mx-auto" width="300">
    <v-list-item class="text-center list-title">На складе</v-list-item>
    <LeftPanelComponentsPopUp />
    <LeftPanelComponents />
  </v-card>
</template>

<script setup lang="ts">
import LeftPanelComponents from "@/ui/LeftPanelComponents.vue";
import LeftPanelComponentsPopUp from "@/ui/LeftPanelComponentsPopUp.vue";
</script>

<style scoped>
.list-title {
  font-size: 25px;
  color: #01304d;
}
</style>
