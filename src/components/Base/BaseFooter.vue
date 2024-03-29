<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__social">
          <a
            href="http://t.me/slavavorobey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Мы в телеграмм"
            class="footer__link"
          >
            <v-tooltip activator="parent" location="top"
              >Мы в Telegram</v-tooltip
            >
            <TelegramIcon class="footer__icon" :width="40" :height="40" />
          </a>
          <a
            href="http://api.whatsapp.com/send?phone=79586461377"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Мы в WhatsApp"
            class="footer__link"
          >
            <v-tooltip activator="parent" location="top"
              >Мы в WhatsApp</v-tooltip
            >
            <WhatsAppIcon class="footer__icon" :width="40" :height="40"
          /></a>
        </div>

        <span class="footer__text"
          >© Промжелснаб - продажа запчастей для железнодорожной техники.</span
        >
        <div class="footer__community">
          <h3 class="footer__title">Разработка и дизайн сайта</h3>
        <ul class="list-reset footer__items">

          
          <a
            href="http://nivellir.ru"
            target="_blank"
            aria-label="Вячеслав"
            class="footer__community-link"
            ><li class="footer__item">Вячеслав</li></a
          >
          <a
            href="http://dkireenkov.ru"
            target="_blank"
            aria-label="Дмитрий"
            class="footer__community-link"
          >
            <li class="footer__item">Дмитрий</li></a
          >

        </ul>
    
    </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TelegramIcon from "@/ui/Icon/IconTelegram.vue";
import WhatsAppIcon from "@/ui/Icon/IconWhatsApp.vue";
</script>

<style scoped lang="scss">
.footer {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #023859;
&__items {
  display: flex;
  justify-content: center;
  gap: 7px;
}

&__title {
  font-size: 12px;
  color: white;
}
  &__text {
    font-size: 14px;
    color: white;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 10px;
  }
  &__community {
    content: "";
    position: absolute;
    top: 29px;
    left: 1400px;
    width: 260px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

&__community-link {
text-underline-offset: 3px;
  text-decoration: underline;
  font-size: 12px;
  color: white;
}
  &__social {
    display: flex;
    column-gap: 15px;
    &:focus-visible {
      opacity: 1;
    }
  }
  &__link {
    outline: none;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
    &:focus-visible {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
  &__icon {
    display: block;
    cursor: pointer;
  }
}
</style>
