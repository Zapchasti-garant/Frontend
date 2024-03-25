<template>
  <div>
    <v-list lines="one">
      <v-list-item
        v-for="(ctx, idx) in listSearch"
        :key="idx"
        class="custom__list-item"
      >
        <h4>{{ctx.title}}</h4>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "@/store/store.ts";
import {Product} from "@/types/types.ts";
import {computed} from "vue";

const store = useStore()
const listSearch = computed(() => store.listSearch as Product[])
</script>

<style scoped>
.custom__list-item {
  border-bottom: 1px solid grey;
  cursor: pointer;
  transition: background .3s ease;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background:#d4d5d5;
  }
}
.v-list {
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  gap: 10px;
}
</style>
