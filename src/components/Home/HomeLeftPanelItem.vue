<template>
  <div>
    <v-list-item
      tabindex="0"
      v-for="(item, i) in props.list"
      :key="i"
      :class="props.class"
      :title="item.name"
      :value="item"
      :prepend-icon="item.icon"
      style="background: #1b93ce; color: #fff"
    ></v-list-item>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
interface ListItems {
  name: string;
  icon?: string;
  class?: string;
}
const props = defineProps({
  list: {
    type: Array as PropType<ListItems[]>,
    required: true,
  },
  class: {
    type: String,
    default: () => "",
  },
});
</script>

<style scoped>
.v-list-item {
  margin-bottom: 5px;
  border-radius: 7px;
  color: #01304d;
}
.top-panel {
  border: 1px solid #01304d;
  background: #1e75a0 !important;
}
.v-list-item {
  padding: 4px 16px 4px 16px !important;
  display: grid;
  grid-template-columns: 30px 1fr;
}
.v-list-item-title {
  font-size: 14px;
  color: #9e9999;
}
</style>
