<template>
  <div class="burger__wrapper">
    <button @click.prevent="isShow" class="burger__btn">{{ textBtn }}</button>
    <Transition name="list" mode="out-in">
      <v-list v-if="show">
        <BaseLeftPanelItem :list="itemsBottom" tabindex="0" />
      </v-list>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import BaseLeftPanelItem from "@/components/Home/HomeLeftPanelItem.vue";
import { itemsBottom } from "@/utils/menuItems.ts";
import { ref } from "vue";

const isShow = () => {
  show.value = !show.value;
  textBtn.value = show.value ? "Свернуть меню" : "Открыть меню";
};

const textBtn = ref("Открыть меню");
const show = ref(false);
</script>

<style scoped>
.burger__wrapper {
  display: none;
  background: #ffffff;
  @media (width < 1024px) {
    display: block;
  }
}
.burger__btn {
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  background: #d8d8d8;
  border-radius: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  transform: translateY(100%);
  z-index: 100;
}

.list-leave-to {
  opacity: 0;
}
</style>
