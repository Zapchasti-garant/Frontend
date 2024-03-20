<template>
  <div class="carousel__wrapper">
    <div class="container">
      <Carousel />
    </div>
  </div>
  <div class="container">

    <div class="about__wrapper">
      <div class="left"><BaseLeftPanel /> </div>

    <div class="right"><Aboutlogo /><p class="about__text">«Запчасть Гарант» осуществляет комплексную поставку запчастей для тепловозов серии ТЭМ (ТЭМ2, ТЭМ18), ТГМ (ТГМ4, ТГМ6) и другим модификациям, дизелям типа Д50, Д49, Д100, 211Д3, а также к другой железнодорожной технике.

Наше предприятие является дилером ряда предприятий России и Беларуси. На данный момент нами заключены дилерские соглашения на поставку элементов фильтрующих на тепловозы серии ТЭМ, ТГМ, 2ТЭ, ТЭП, М62 и других, вкладышей и поршней к дизелю Д50, а так же ряда других запчастей.

ООО «Запчать Гарант» постоянно пополняет склад новой продукцией, полный перечень которой доступен в каталоге «Запасные части», а наличие продукции Вы можете также посмотреть в разделе «На складе». Вся поставляемая нами продукция новая, имеет гарантию качества завода изготовителя, а так же все необходимые сертификаты. Даже если нужной Вам продукции на данный момент нет на складе, мы в кратчайшие сроки рассмотрим вашу заявку и дадим оптимальное предложение.

Основные преимущества нашей организации – это качественная продукция, минимальный уровень цен и кратчайшие сроки поставки.

Ждем Ваших заявок и надеемся на взаимовыгодное сотрудничество!</p>
</div>

</div>
</div>
</template>

<script setup lang="ts">
import Carousel from "@/ui/Carousel.vue";
import BaseLeftPanel from "@/components/Base/BaseLeftPanel.vue";
import Aboutlogo from "@/ui/Icon/Aboutlogo.vue";
</script>

<style scoped>
.carousel__wrapper {
  width: 100%;
  background-color: aqua;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/back-carousel.png");
}

.about__wrapper {
  padding-bottom: 50px;
  display: flex;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.left {
  width: 20%;
}

.about__text {
padding: 10px 50px 0 50px;
font-size: 18px;
font-weight: 600;
color: #023859;
}
</style>
