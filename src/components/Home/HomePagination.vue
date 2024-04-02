<template>
  <div class="wrapper__pagination">
    <v-pagination
      :length="props.length"
      v-model="page"
      @click="changeView(page)"
      :total-visible="9"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  length: {
    type: Number,
    default: 1,
  },
});
const page = ref<number>(1);
const emit = defineEmits(["changePage"]);
const changeView = async (view: number) => {
  emit("changePage", view);
};
</script>

<style scoped lang="scss">
.wrapper__pagination {
  padding: 20px 0;
}
</style>
