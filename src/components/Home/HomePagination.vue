<template>
  <div class="wrapper__pagination">
    <v-pagination
      :length="length"
      v-model="page"
      @click="changeView(page)"
      :total-visible="getWidth()"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
defineProps({
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

onMounted(() => {
  getWidth();
});
const getWidth = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else {
    return 9;
  }
};
</script>

<style scoped lang="scss">
.wrapper__pagination {
  display: flex;
  justify-content: center;
  padding: 20px 0;

  @media (width < 1024px) {
    width: 100%;
    max-width: 768px;
  }
}
</style>
