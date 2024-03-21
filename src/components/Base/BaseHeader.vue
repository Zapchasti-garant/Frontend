<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link class="header__logo" to="/"
          ><img class="header__img" :src="logoIcon" alt="logo"
        /></router-link>

        <div class="header__wrapper-contacts">
          <nav class="header__nav">
            <ul class="header__items">
              <li class="header__item">
                <MailIcon />
                <a href="mailto:1234353534@uandex.ru" class="header__link"
                  >1234353534@uandex.ru</a
                >
              </li>
              <li class="header__item">
                <PhoneIcon />
                <a href="tel:+79990000000" class="header__link">+79990000000</a>
              </li>
              <li class="header__item">
                <PhoneIcon />
                <a href="tel:+79990000000" class="header__link">+79990000000</a>
              </li>
            </ul>
          </nav>
          <form class="header__form">
            <input type="text" class="header__form-input" />
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
import MailIcon from "@/ui/Icon/MailIcon.vue";
import PhoneIcon from "@/ui/Icon/PhoneIcon.vue";
import { ref } from "vue";
const logoIcon = ref("/img/logo.svg");
</script>

<style scoped lang="scss">
.header__item {
  display: flex;
  align-items: center;
  gap: 5px;
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
  font-size: 20px;
  font-family: "Montserrat";
  color: #023859;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.header__link:hover {
  color: #021b2b;
  transition: color 0.3 ease-in-out;
}

.header__items {
  padding-bottom: 10px;
  display: flex;
  gap: 25px;
}

.header__items {
  list-style: none;
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
  font-family: "Montserrat";
}

.header {
  &__form {
    display: flex;
    gap: 10px;
    align-items: center;
    align-items: stretch;
  }
  &__form-input {
    background: #d4d5d5;
    border-radius: 5px;
    border: none;
    color: black;
    font-size: 24px;
    font-weight: 700;
    outline: 1px solid transparent;
    font-family: "Montserrat";
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
    font-family: "Montserrat";
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
