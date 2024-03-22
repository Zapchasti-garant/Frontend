<template>
  <a href="tel:+79990000000" class="Whatsapp-link"><img :src="WhatsappIcon" alt="" class="WhatsappIcon"></a>
</template>

<script setup lang="ts">
const WhatsappIcon = "/img/Whatsapp.svg";

</script>

<style scoped>
.WhatsappIcon {
  width: 35px;
  height: 35px;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}
.WhatsappIcon:hover{
  opacity: 1;
}
</style>
