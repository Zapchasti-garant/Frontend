<template>
  <Header />
  <Navigation />
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Header from "@/components/Base/BaseHeader.vue";
import Navigation from "@/components/Base/BaseNavigation.vue";
import { Transition } from "vue";
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
}
</style>
