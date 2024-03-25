<template>
  <v-card class="mx-auto" width="300">
    <v-list>

      <v-list-item class="text-center list-title">На складе</v-list-item>
    </v-list>
    <v-list v-model:opened="open">
      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="list-item"
            color="primary"
            prepend-icon="mdi-tram-side"
            v-bind="props"
            title="Запчасти к тепловозам"
          ></v-list-item>
        </template>

        <BaseLeftPanelItem :list="slot1"/>
      </v-list-group>

    </v-list>
    <v-list v-model:opened="open2">
      <v-list-group value="Admin" class="list-group">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="list-item"
            color="primary"
            v-bind="props"
            prepend-icon="mdi-train"
            title="Запчасти к дизелям"

          ></v-list-item>
        </template>


        <BaseLeftPanelItem :list="slot2"/>
      </v-list-group>
    </v-list>
    <v-list>
      <BaseLeftPanelItem :list="items" :class="bottomClass"/>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import BaseLeftPanelItem from "@/components/Base/BaseLeftPanelItem.vue";
import {ref} from "vue";

const open = ref(["Users"]);
const open2 = ref(["Users"]);

const bottomClass = 'top-panel'
const slot1 = ref([{name:"ТЭМ2"}, {name:"ТГМ4"}, {name:"ТГМ6"}]);
const slot2 = ref([{name:"Д 50"}, {name:"Д211"}, {name: "Д49"}]);
const items = ref([
  { name: "Запчасти к гидропередаче", icon: "mdi-wrench " },
  { name: "Запчасти к компрессорам", icon: "mdi-wrench " },
  { name: "Электрика", icon: "mdi-battery-charging " },
  { name: "РТИ и медные кольца", icon: "mdi-album " },
  { name: "Фильтра и фильтрующие элименты", icon: "mdi-flag" }
])
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
