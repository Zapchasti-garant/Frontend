<template>
  <Header />
  <Navigation />
  <Carousel v-if="showCarousel" />
  <Background v-if="!showCarousel" />
  <main class="main">
    <div class="container">
      <div class="main__wrapper">
        <BaseLeftPanel />
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
</template>

<script setup lang="ts">
import Header from "@/components/Base/BaseHeader.vue";
import BaseLeftPanel from "@/components/Base/BaseLeftPanel.vue";
import Navigation from "@/components/Base/BaseNavigation.vue";
import { Transition, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Background from "./ui/Background.vue";
import Carousel from "./ui/Carousel.vue";

const showCarousel = ref(true);
const route = useRoute();
watch(
  () => route.path,
  (newVal) => {
    if (newVal === "/") {
      showCarousel.value = true;
    } else {
      showCarousel.value = false;
    }
  }
);
</script>

<style>
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
  display: flex;
}
</style>
