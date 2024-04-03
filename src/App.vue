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
          <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:title="{ item }">
              {{ item.title.toUpperCase() }}
            </template>
          </v-breadcrumbs>

          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <KeepAlive>
                <component :is="Component" />
              </KeepAlive>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </main>
  <div class="errors" v-for="error in errorsList">
    <h2 class="errors__title">
      {{ error.name }}
    </h2>
  </div>
  <BaseFooter />
</template>

<script setup lang="ts">
import Header from "@/components/Base/BaseHeader.vue";
import BaseLeftPanel from "@/components/Base/BaseLeftPanel.vue";
import Navigation from "@/components/Base/BaseNavigation.vue";
import { Transition, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import BaseFooter from "./components/Base/BaseFooter.vue";
import { useStore } from "./store/store";
import Background from "./ui/Background.vue";
import Carousel from "./ui/Carousel.vue";

const store = useStore();

const errorsList = computed(() => store.errors);

interface Breadcrumbs {
  title: any;
  disabled: any;
  href: any;
}
const showCarousel = ref(true);
const route = useRoute();
const breadcrumbs = ref<Breadcrumbs[]>([
  {
    title: "Главная",
    disabled: false,
    href: "/",
  },
]);
watch(
  () => route.path,
  (newVal) => {
    const corrTitle = route.meta.title;
    if (newVal === "/") {
      breadcrumbs.value = [
        {
          title: "Главная",
          disabled: true,
          href: "/",
        },
      ];
    } else if (!route.params.id) {
      if (typeof corrTitle === "string")
        breadcrumbs.value = [
          {
            title: "Главная",
            disabled: false,
            href: "/",
          },
          {
            title: corrTitle,
            disabled: true,
            href: newVal,
          },
        ];
    }
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
.breadcrumbs__link {
  margin-right: 10px;
  color: #007dca;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;

  &-span {
    margin-right: 10px;
    color: #6e6e6e;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
  }

  &::after {
    content: "/";
    padding: 0 10px;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
  &:hover {
    text-decoration: underline;
  }
}
.main__reload {
  margin-left: 20px;
  color: #000;
  font-size: 16px;
  text-decoration: underline;
  font-weight: 400;
}
.errors {
  position: fixed;
  z-index: 1000;
  border-radius: 5px;
  padding: 20px;
  bottom: 30px;
  right: 30px;
  width: 26%;
  height: 150px;
  background: #9e1212;

  &__title {
    color: #fff;
    text-align: center;
  }
}
</style>
