<template>
  <a href="tel:+79990000000" class="Telegram-link"><img :src="TelegramIcon" alt="" class="TelegramIcon"></a>
</template>

<script setup lang="ts">
const TelegramIcon = "/img/Telegram.svg";
</script>

<style scoped>
.TelegramIcon {
  width: 35px;
  height: 35px;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}
.TelegramIcon:hover{
  opacity: 1;
}
</style>
