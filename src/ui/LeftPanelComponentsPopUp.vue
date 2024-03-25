<template>
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

        <v-list-item
          v-for="([title], i) in slot1"
          :key="i"
          :title="title"
          :value="title"
        ></v-list-item>
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

        <v-list-item 
          v-for="([title], i) in slot2"
          :key="i"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>
    </v-list>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(["Users"]);
const open2 = ref(["Users"]);
const slot1 = ref([["ТЭМ2"], ["ТГМ4"], ["ТГМ6"]]);
const slot2 = ref([["Д 50"], ["Д211"], ["Д49"]]);
</script>

<style scoped>
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
</style>