<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logotype">
        <router-link class="header__logo" to="/" tabindex="0">
          <IconAboutlogo
            :width="120"
            :height="120"
            class="header__img"
            style="grid-area: logo"
          />
          <span tabindex="-1">Промжелснаб</span></router-link
        >
      </div>
        <div class="header__wrapper-contacts" style="grid-area: nav">
          <nav class="header__nav">
            <ul class="header__list list-reset">
              <li class="header__item">
                <a href="mailto:pjs-bryansk@yandex.ru" class="header__link">
                  <IconMail /> pjs-bryansk@yandex.ru</a
                >
              </li>
              <li class="header__item">
                <a href="tel:+74832599242" class="header__link"
                  ><IconPhone /> +7 (4832) 599-242</a
                >
              </li>
              <li class="header__item">
                <a href="tel:+79529632724" class="header__link"
                  ><IconPhone /> +7-952-963-27-24</a
                >
              </li>
              <li class="header__item">
                <a href="tel:+79586461377" class="header__link"
                  ><IconPhone /> +7-958-646-13-77</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <form
          class="header__form"
          @submit.prevent="goToPageSearch"
          style="grid-area: form"
        >
          <div class="header__input-wrapper" tabindex="-1">
            <input
              type="text"
              class="header__form-input"
              v-model="inputValue"
              @input="getList"
              aria-label="input"
              placeholder="Поиск по названию"
            />
            <HomeSearch
              class="header__list-search"
              tabindex="0"
              @submit-form="goToPageSearch"
              @click-product="clearInput"
            />
          </div>

          <button
            :disabled="inputValue.length < 2"
            class="header__form-btn"
            type="submit"
            @click.prevent="goToPageSearch"
          >
            Поиск
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HomeSearch from "@/components/Home/HomeSearch.vue";
import { useStore } from "@/store/store.ts";
import IconAboutlogo from "@/ui/Icon/IconAboutlogo.vue";
import IconMail from "@/ui/Icon/IconMail.vue";
import IconPhone from "@/ui/Icon/IconPhone.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits(["submit-form"]);
const $router = useRouter();
const store = useStore();
const inputValue = ref<string>("");

const goToPageSearch = async () => {
  store.pageSearch(inputValue.value);
  store.clearSearch();
  inputValue.value = "";
  window.scrollTo({
    top: 550,
    behavior: "smooth",
  });
  $router.push({ path: "/search" });
};
watch(
  () => inputValue.value.length,
  (newValue) => {
    if (newValue < 3) {
      store.clearSearch();
    }
  }
);

const clearInput = () => {
  inputValue.value = "";
};
const getList = async () => {
  if (inputValue.value.length < 2) {
    store.clearSearch();
  }
  if (inputValue.value.length > 2) {
    setTimeout(async () => {
      await store.fetchSearch(inputValue.value);
    }, 900);
  } else {
    store.clearSearch();
  }
};
</script>

<style scoped lang="scss">
.header
{
  &__input-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  &__list-search {
    position: absolute;
    z-index: 30;
    left: 0;
    top: 105%;
    width: 100%;
  }
  &__form {
    display: flex;
    gap: 10px;
    align-items: stretch;
    @media (width < 1105px) {
      grid-row: 3 /4 ;
      
    }
  }
  &__img {
    translate: 0 -10px;
    @media (width < 768px) {
     width: 80px;
     height: 80px;
    }
    @media (width < 576px) {
     display: none;
    }
  }
  &__logo {
    position: relative;
    display: block;
    text-decoration: none;

    &:focus-visible {
      outline: none;

      & span::after {
        width: 100%;
      }
    }

    & span {
      position: absolute;
      bottom: 60px;
      left: 100px;
      display: block;
      font-size: 22px;
      font-weight: 600;
      color: #01304d;

      &::after {
        content: "";
        position: absolute;
        bottom: -11px;
        left: 0;
        width: 0;
        height: 2px;
        background: #01304d;
        transition: width 0.3s ease-in-out;
      }
      @media (width < 1434px) {
      font-size: 16px;
    }
    @media (width < 768px) {
      font-size: 14px;
      bottom: 43px;
      left: 70px;
    }
    }
   
  }
  &__form-input {
    height: 100%;
    background: #d4d5d5;
    border-radius: 5px;
    border: none;
    color: black;
    font-size: 24px;
    font-weight: 700;
    outline: 1px solid transparent;
    padding: 10px 0 10px 10px;
    width: 100%;
    transition: outline 0.3s ease-in-out;
    &:focus {
      outline: 1px solid #01304d;
    }
    @media (width < 576px) {
      padding: 10px 0 10px 10px;
      font-size: 14px;
    }
  }
  
  &__form-btn {
    background: #d4d5d5;
    padding: 10px 30px;
    color: black;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

    &:focus-visible {
      outline: none;
      background: rgb(9, 66, 0);
      color: #fff;
    }
    &:hover {
      background: #01558a;
      color: #fff;
    }
    &:active {
      background: #01304d;
      color: #fff;
    }
    @media (width < 576px) {
      font-size: 14px;
    }
  }
  &__logotype {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  
}
&__wrapper-contacts {
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  }
}

.header__item svg {
  width: 20px;
  height: 20px;
}

.header__item-mail svg {
  width: 20px;
  height: 15px;
  padding-right: 4px;
}

.header__wrapper {
  padding-top: 20px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "logo nav nav"
    "logo form form";

    @media (width < 1434px) {
      grid-template-columns: 1fr 3fr;
      column-gap: 20px;
    }
    @media (width < 1105px) {
      grid-template-rows: repeat(3, 3fr);
      grid-template-areas:
    "logo nav nav"
    "logo nav nav"
    "form form form";
    }
    @media (width < 768px) {
      grid-template-rows: repeat(1, 2fr);
      grid-template-areas:
    "logo nav nav"
    "logo nav nav"
    "form form form";
    }
    @media (width < 576px) {
      grid-template-rows: repeat(1, 1fr);
      grid-template-areas:
    "nav nav nav"
    "form form form";
    }
}


.header__link {
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #023859;
  text-decoration: none;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    transform: scale(0);
    border-radius: 50%;
    background: #023859;
    transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:focus-visible {
    outline: none;
    color: #ca0000;
  }
  &:hover:not(:focus-visible):after {
    transform: scale(1);
  }
  &:hover:not(:focus-visible) {
    color: #021b2b;
    transition: color 0.3s ease-in-out;
  }
  &:active:not(:focus-visible) {
    transform: scale(0.96);
  }
  @media (width < 1434px) {
    
  gap: 2px;
  font-size: 16px;
    }
    @media (width < 768px) {
      font-size: 14px;
    }
}

.header__list {
  display: flex;
  gap: 25px;
  @media (width < 1105px) {
     flex-wrap: wrap;
     justify-content: end;
    }
    @media (width < 768px) {
     flex-wrap: wrap;
     justify-content: end;
     gap: 5px;
    }
    @media (width < 576px) {
     flex-direction: column;
     gap: 5px;
    }
}

.header__search {
  width: 200px;
  height: 21px;
  border: 1px solid #023859;
  border-radius: 5px;
  outline: none;
  color: #023859;
}

.form ::placeholder {
  color: #023859;
  opacity: 0.7;
}
.custom__form-input {
  width: 100%;
  background: #d4d5d5;
  border-radius: 5px;
  border: none;
  color: black;
}
.header__btn {
  position: relative;
  width: 60px;
  height: 21px;
  font-family: "Montserrat";
  cursor: pointer;
  background: transparent;
  border: 1px solid #023859;
  border-radius: 5px;
  opacity: 0.7;
  outline: none;
  transition: 1s ease-in-out;
}

.header__btn svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #023859;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 100;
  transition: 1s ease-in-out;
  opacity: 0;
}

.header__btn:hover {
  transition: 1s ease-in-out;
  background: #dedcdc;
}

.header__btn:hover svg {
  stroke-dashoffset: -480;
  opacity: 1;
}

.header__btn span {
  color: #023859;
  font-size: 13px;
  font-weight: 100;
}
.v-field__input {
  color: #023859;
}
.header {
  padding-bottom: 20px;
}
</style>
