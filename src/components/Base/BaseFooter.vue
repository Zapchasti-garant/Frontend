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

  &__text {
    font-size: 14px;
    color: white;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 10px;
  }

  &__social {
    display: flex;
    column-gap: 15px;
  }
  &__icon {
    display: block;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
