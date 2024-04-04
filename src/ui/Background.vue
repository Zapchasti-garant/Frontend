<template>
  <div class="carousel__wrapper">
    <div class="container">
      <div class="container wrapper__img">
        <!--      <img :src="backImg" alt="" class="imgFon" />-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.carousel__wrapper {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/back-carousel.png");

  @media (max-width: 1024px) {
    display: none;
  }
}
.wrapper__img {
  height: 500px;
  width: 100%;
  background-image: url("/img/img3.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.imgFon {
  width: 100%;
  height: 500px;
}
</style>
