<template>
  <div>

    <v-list-item
      v-for="(item, i) in props.list"
      :key="i"
      :class="props.class"
      :title="item.name"
      :value="item"
      :prepend-icon="item.icon"
    ></v-list-item>
  </div>
</template>

<script setup lang="ts">

import {defineProps, PropType} from "vue";

interface ListItems {
  name: string
  icon?: string
  class?: string
}
const props = defineProps({
  list: {
    type: Array as  PropType<ListItems[]>,
    required: true
  },
  class: {
    type:String,
    default: () => ''
  }
})
</script>

<style scoped>
.v-list-item {
  margin-bottom: 5px;
  border-radius: 7px;
  color: #01304d;
}
.top-panel {
  border: 1px solid #01304d;
}
</style>
