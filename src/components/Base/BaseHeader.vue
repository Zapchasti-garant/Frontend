<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link class="header__logo" to="/" tabindex="0"
          ><img
            class="header__img"
            :src="logoIcon"
            alt="Логотип"
            tabindex="-1"
          />
          <span tabindex="-1">"Промжелснаб"</span></router-link
        >
        <div class="header__wrapper-contacts">
          <nav class="header__nav">
            <ul class="header__list list-reset">
              <li class="header__item">
                <a href="mailto:1234353534@uandex.ru" class="header__link">
                  <IconMail /> example@yandex.ru</a
                >
                <img src="" alt="" />
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
          <form class="header__form">
            <div class="header__input-wrapper">
              <input type="text" class="header__form-input" v-model="inputValue" @input="getList"/>
              <BaseSearch class="header__list-search"/>
            </div>

            <button class="header__form-btn" type="submit" tabindex="0">
              Поиск
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconMail from "@/ui/Icon/IconMail.vue";
import IconPhone from "@/ui/Icon/IconPhone.vue";
import {onMounted, ref} from "vue";
import BaseSearch from "@/components/Base/BaseSearch.vue";
import ky from 'ky'
import {BASE_URL} from "../../../config.ts";
import {useStore} from "@/store/store.ts";

const data = ref<T>('')
const store = useStore()
onMounted(async () => {
  const res = await ky.get(BASE_URL + 'posts/')
  data.value = res.json()
})
const inputValue = ref<string>('')
const getList = async () => {
  setTimeout(async () => {
    await store.fetchSearch(inputValue.value)
  }, 2000)
}
const logoIcon = ref("/img/logo.svg");

</script>

<style scoped lang="scss">
.header {
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
    align-items: center;
    align-items: stretch;
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
      bottom: 7px;
      left: 27px;
      display: block;
      font-size: 24px;
      font-weight: 600;
      color: #01304d;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: #01304d;
        transition: width 0.3s ease-in-out;
      }
    }
  }
  &__form-input {
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
  display: flex;
  justify-content: space-between;
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
    transition: color 0.3 ease-in-out;
  }
  &:active:not(:focus-visible) {
    transform: scale(0.96);
  }
}

.header__list {
  display: flex;
  gap: 25px;
}

.header__img {
  width: 250px;
  height: 110px;
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
