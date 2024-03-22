<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="container">

        <div class="footer__content">
          <div class="footer__social">
            <TelegramIcon />
            <WhatsAppIcon />
          </div>

          <span class="footer__text">© Промжелснаб - продажа запчастей для железнодорожной техники.</span>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TelegramIcon from '@/ui/Icon/TelegramIcon.vue';
import WhatsAppIcon from '@/ui/Icon/WhatsAppIcon.vue';


</script>

<style scoped lang="scss">
.footer {
  padding-top: 20px;

  &__wrapper {
    background-color: #023859;
  }

  &__text {
    font-size: 10px;
    color: white;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  &__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

&__social {
  row-gap: 10px;
}
}
</style>
