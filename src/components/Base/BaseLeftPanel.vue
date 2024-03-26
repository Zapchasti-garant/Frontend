<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item class="text-center list-title">На складе</v-list-item>
    </v-list>
    <v-list v-model:opened="open">
      <v-list-group value="itemsTop">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="list-item"
            color="primary"
            prepend-icon="mdi-tram-side"
            v-bind="props"
            title="Запчасти к тепловозам"
          ></v-list-item>
        </template>

        <BaseLeftPanelItem :list="itemsTopList"/>
      </v-list-group>

    </v-list>
    <v-list v-model:opened="open2">
      <v-list-group value="itemsBottom" class="list-group">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="list-item"
            color="primary"
            v-bind="props"
            prepend-icon="mdi-train"
            title="Запчасти к дизелям"

          ></v-list-item>
        </template>


        <BaseLeftPanelItem :list="itemsBottomList"/>
      </v-list-group>
    </v-list>
    <v-list>
      <BaseLeftPanelItem :list="itemsBottom" :class="bottomClass"/>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import BaseLeftPanelItem from "@/components/Home/HomeLeftPanelItem.vue";
import {ref} from "vue";
import {itemsBottom, itemsBottomList, itemsTopList} from "@/helpers/helpersData.ts";


const open = ref(["items"]);
const open2 = ref(["items"]);

const bottomClass = 'top-panel'

</script>

<style scoped>
.list-title {
  cursor: pointer;
  font-size: 25px;
  color: #01304d;
}
.list-item {
  color: #01304d;
  border: 1px solid #01304d;
  border-radius: 7px;
}
.v-list {
  padding: 0;
  margin-bottom: 5px;
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
  display:grid;
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

.v-list-item-title {
  font-size: 14px;
}
.v-list-item {
  display:grid;
  grid-template-columns: 30px 1fr;
}
</style>
