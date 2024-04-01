<template>
  <div class="wrapper__pagination">
    <v-pagination
      :length="lengthPagination"
      v-model="page"
      @click="changeView(page)"
      :total-visible="9"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store.ts";
import { computed, ref } from "vue";

const lengthPagination = computed(() => {
  const length = Math.ceil(store.totalPages / 9);
  return length;
});
const store = useStore();
const page = ref<number>(1);
const emit = defineEmits(["changePage"]);
const changeView = async (view: number) => {
  await store.getList("", view.toString());
  emit("changePage", view.toString());
};
</script>

<style scoped lang="scss">
.wrapper__pagination {
  padding: 20px 0;
}
</style>
