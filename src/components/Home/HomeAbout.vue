<template>
  <div class="container">
    <div class="about__wrapper">
      <div class="right">
        <IconAboutlogo :width="190" :height="190" class="about__logo"/>
        
        <p class="about__text">
          Наша молодая компания активно сотрудничает со многими производителями
запасных частей к маневровым тепловозам, вагонных комплектующих, материалов ВСП,
путевого инструмента и средств малой механизации.
<p class="about__text">Комплексные поставки включают в себя запасные части к дизелям, дизель-
генераторным установкам, гидропередачам; комплектующие к экипажным частям и
силовым агрегатам тепловозов; резинотехнические изделия, электрику, тормозное
оборудование. Также мы предлагаем запчасти для грузовых вагонов, железнодорожные
колеса и колесные пары, литые изделия.</p>
<p class="about__text">Мы разрабатываем схему маршрута с учетом характеристик груза, удаленности
региона и других сопутствующих факторов, что позволяет доставлять продукцию в
кротчайшие сроки. Наша гибкая ценовая политика, оперативность поставки и
профессионализм персонала являются залогом успеха в сотрудничестве с нашими
контрагентами!</p>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconAboutlogo from "@/ui/Icon/IconAboutlogo.vue";
</script>

<style scoped lang="scss">
.about__wrapper {
  padding-bottom: 50px;
  display: flex;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.about__text {
  font-size: 18px;
  font-weight: 600;
  color: #023859;
  @media  (width < 768px) {
    font-size: 14px;
  }
}
.about__logo {
  @media  (width < 1025px) {
    width: 140px;
    height: 140px;
  }
  @media  (width < 768px) {
    width: 120px;
    height: 120px;
  }
  
  @media  (width < 576px) {
    width: 100px;
    height: 100px;
  }
 
}

</style>
