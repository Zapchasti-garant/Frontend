<template>
  <Header />
  <Navigation />
  <Carousel v-if="showCarousel" />
  <Background v-if="!showCarousel" />
  <main class="main">
    <div class="container">
      <div class="main__wrapper">
        <BaseLeftPanel class="main__left" />
        <div>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </main>
  <BaseFooter />
</template>

<script setup lang="ts">
import Header from "@/components/Base/BaseHeader.vue";
import BaseLeftPanel from "@/components/Base/BaseLeftPanel.vue";
import Navigation from "@/components/Base/BaseNavigation.vue";
import {onMounted, ref, Transition, watch} from "vue";
import {useRoute} from "vue-router";
import BaseFooter from "./components/Base/BaseFooter.vue";
import Background from "./ui/Background.vue";
import Carousel from "./ui/Carousel.vue"
import {testing} from "@/composables/useApi.ts";

onMounted(async () => {
  await testing()
})
const showCarousel = ref(true);
const route = useRoute();
watch(
  () => route.path,
  (newVal) => {
    showCarousel.value = newVal === "/";
  }
);
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.main {
  margin: 0 auto;
  padding-top: 25px;
}
.main__wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 15px;
}
</style>
