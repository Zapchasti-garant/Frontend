<template>
  <section class="navigation">
    <div class="container">
      <aside>
        <nav class="navigation__nav">
          <ul class="list-reset navigation__list">
            <router-link
              v-for="(item, idx) in itemsNavigation"
              :to="{ name: item.name }"
              :key="idx"
              class="navigation__link"
              :class="{ isActive: route.name === item.name }"
              tabindex="0"
            >
              <li class="navigation__item" tabindex="-1">{{ item.title }}</li>
            </router-link>
          </ul>
        </nav>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { itemsNavigation } from "@/utils/menuItems.ts";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped lang="scss">
.navigation {
  background-color: #023859;

  @media (max-width: 1024px) {
    // display: none;
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    flex: 0;
  }

  &__item {
    cursor: pointer;
    display: flex;
    padding: 0 20px;
    align-items: center;
    min-height: 70px;
    text-align: center;

    @media (width < 1024px) {
      min-height: 50px;
    }
  }
  &__link {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    color: aliceblue;
    transition: color 0.3s ease-in-out;

    @media (width < 1024px) {
      font-weight: 400;
      font-size: 14px;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 16px;
      width: calc(100% - 40px);
      height: 2px;
      background-color: #afafaf;
      transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
      transform: translateX(-50%) scale(0);
    }

    &:focus-visible {
      outline: none;
      color: #ca0000;
    }
    &:hover:not(:focus-visible) {
      color: #dedcdc;
    }

    &:hover::after {
      transform: translateX(-50%) scale(1);
    }
  }
}

.isActive {
  background-color: #0b5887;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover::after {
    transform: translateX(0) scale(0);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #afafaf;
  }
}
</style>
