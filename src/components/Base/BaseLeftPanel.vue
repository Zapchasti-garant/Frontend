<template>
  <v-card class="mx-auto pa-2" width="370" height="100%" :class="'PanelLeft'">
    <v-list>
      <v-list-subheader :class="'PanelLeft__title'">Навигация</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        rounded="l"
        :class="'PanelLeft__item'"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title
          v-text="item.text"
          class="v-list-item-title"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  { text: "НА СКЛАДЕ", icon: "mdi-tools " },
  { text: "ЗАПЧАСТИ К ТЕПЛОВИЗОРАМ", icon: "mdi-wrench-outline " },
  { text: "ПРОКЛАДКИ И КОЛЬЦА", icon: "mdi-wrench-outline" },
  { text: "ЭЛЕКТРООБОРУДОВАНИЯ", icon: "mdi-wrench-outline" },
  { text: "КОМПЛЕКТЫ РТИ", icon: "mdi-subway-variant " },
  { text: "ДИЗЕЛЬНЫЕ ЗАПЧАСТИ", icon: "mdi-train-car-passenger-door-open " },
  { text: "ДИЗЕЛЬНЫЕ ЗАПЧАСТИ", icon: "mdi-train-car-box " },
  { text: "ДИЗЕЛЬНЫЕ ЗАПЧАСТИ", icon: "mdi-flag" },
  { text: "ДИЗЕЛЬНЫЕ ЗАПЧАСТИ", icon: "mdi-flag" },
  { text: "ДИЗЕЛЬНЫЕ ЗАПЧАСТИ", icon: "mdi-flag" },
]);
</script>

<style scoped lang="scss">
.PanelLeft {
  &__title {
    padding: 0;
    color: #023859;
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  &__item {
    font-size: 18px;
    font-weight: 400;
    color: #023859;
    border: 1px solid #023859;
  }

  &__item:not(:nth-last-child(1)) {
    margin-bottom: 10px;
  }
}

.v-list-item-title {
  font-size: 16px;
  font-weight: 600;
}
</style>
