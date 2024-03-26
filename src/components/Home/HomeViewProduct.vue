<template>
  <div>
    <h1>{{props.item.title }}</h1>
    <h2>{{props.item.body }}</h2>
  </div>
</template>

<script setup lang="ts">
import {defineProps, PropType} from 'vue'

type List = {
  body: string
  title: string
  user_id: string
  id: number
}
const props = defineProps({
  item: {
    type: Object as PropType<List>,
    required: true
  }
});
</script>

<style scoped>

</style>
