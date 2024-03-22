<template>
  <div class="navigation">
    <div class="container">
      <aside>
        <nav class="navigation__nav">
          <ul class="list-reset navigation__list">
            <router-link :to="{ name: 'home' }" class="navigation__link">
              <li
                class="navigation__item"
                :class="{ isActive: route.path === '/' }"
              >
                О компании
              </li>
            </router-link>
            <li
              class="navigation__item"
              :class="{ isActive: route.path === '/news' }"
            >
              <router-link :to="{ name: 'news' }" class="navigation__link">
                Запчасти
              </router-link>
            </li>
            <li
              class="navigation__item"
              :class="{ isActive: route.path === '/offers' }"
            >
              <router-link :to="{ name: 'offers' }" class="navigation__link">
                На складе
              </router-link>
            </li>
            <li
              class="navigation__item"
              :class="{ isActive: route.path === '/contacts' }"
            >
              <router-link to="/contacts" class="navigation__link">
                Контакты
              </router-link>
            </li>
            <li
              class="navigation__item"
              :class="{ isActive: route.path === '/dillers' }"
            >
              <router-link to="/dillers" class="navigation__link">
                Дилерство
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped lang="scss">
.navigation {
  background-color: #023859;
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
  }
  &__link {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    color: aliceblue;
    transition: color 0.3s ease-in-out;

    &:focus-visible {
      outline: none;
      color: #ca0000;
    }
    &:hover:not(:focus-visible) {
      color: #dedcdc;
    }

    &:hover::after {
      transform: scale(1);
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: #afafaf;
      transition: background-color 0.3s ease-in-out;
      transform: scale(0);
      transition: transform 0.3s ease-in-out;
    }
  }
}

.isActive {
  background-color: #0b5887;
  position: relative;
  transition: all 0.3s ease-in-out;

  :hover::after {
    transform: scale(0);
  }
  &::after {
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
