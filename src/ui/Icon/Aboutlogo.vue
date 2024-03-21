<template>
  <img :src="logoIcon" alt="" class="aboutlogo" />
</template>

<script setup lang="ts">
const logoIcon = "/img/about.png";
</script>

<style scoped>
.aboutlogo {
  width: 580px;
  height: 200px;
}
</style>
