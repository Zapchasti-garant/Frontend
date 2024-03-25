<template>
  <v-card class="mx-auto" max-width="300">
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title  v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  { text: "Запчасти к гидропередаче", icon: "mdi-wrench " },
  { text: "Запчасти к компрессорам", icon: "mdi-wrench " },
  { text: "Электрика", icon: "mdi-battery-charging " },
  { text: "РТИ и медные кольца", icon: "mdi-album " },
  { text: "Фильтра и фильтрующие элименты", icon: "mdi-flag" },
]);
</script>

<style scoped>
.v-list {
  padding: 0;
}
.v-list-item {
  margin-bottom: 5px;
  border: 1px solid #01304d;
  border-radius: 7px;
  color: #01304d;
}
.v-card--variant-elevated {
box-shadow: none;
}

.v-list-item-title {
  font-size: 14px;
}
.v-list-item {
  display:grid;
  grid-template-columns: 30px 1fr;
}
</style>
