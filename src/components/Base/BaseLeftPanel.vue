<template>
  <v-card class="mx-auto custom__left-panel" width="300">
    <v-list>
      <BaseLeftPanelItem
        :list="itemsBottom"
        :class="bottomClass"
        tabindex="0"
      />
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import BaseLeftPanelItem from "@/components/Home/HomeLeftPanelItem.vue";
import { itemsBottom } from "@/utils/menuItems.ts";
import { provide } from "vue";

provide("itemsBottom", itemsBottom);
const bottomClass = "top-panel";
</script>

<style scoped lang="scss">
.custom__left-panel {
  @media (width < 1025px) {
    display: none;
  }
}
.list-title {
  margin-bottom: 5px;
  padding: 7px 0px;
  border-top-right-radius: 90px;
  border-bottom-left-radius: 80px;
  background: #1e75a0;
  border: 1px solid #01304d;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: white;
  text-align: center;
}
.list-item {
  color: #01304d;
  border: 1px solid #01304d;
  border-radius: 7px;
}
.v-list {
  padding: 0;
  color: #01304d;
}
.v-list-group__items {
  padding: 0;
}
.list-group {
  flex-direction: column;
}
.v-list-item {
  padding: 4px 16px 4px 16px !important;
  display: grid;
  grid-template-columns: 30px 1fr;
}
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

.v-list-item::after {
  padding: 4px 16px 4px 16px !important;
  display: grid;
  grid-template-columns: 30px 1fr;
  background-color: #d11865;
}
.v-list-item__overlay {
  background-color: #01304d;
  color: white;
}
.text-primary {
  color: white !important;
}
</style>
