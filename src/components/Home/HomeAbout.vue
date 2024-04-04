<template>
  <div class="container">
    <div class="about__wrapper">
      <div class="right">
        <IconLogo :width="190" :height="190" class="about__logo"/>
        
        <p class="about__text">
          Наша молодая компания активно сотрудничает со многими производителями
запасных частей к маневровым тепловозам, вагонных комплектующих, материалов ВСП,
путевого инструмента и средств малой механизации. </p><br>
<p class="about__text">Комплексные поставки включают в себя запасные части к дизелям, дизель-
генераторным установкам, гидропередачам; комплектующие к экипажным частям и
силовым агрегатам тепловозов; резинотехнические изделия, электрику, тормозное
оборудование. Также мы предлагаем запчасти для грузовых вагонов, железнодорожные
колеса и колесные пары, литые изделия.</p><br>
<p class="about__text">Мы разрабатываем схему маршрута с учетом характеристик груза, удаленности
региона и других сопутствующих факторов, что позволяет доставлять продукцию в
кротчайшие сроки. Наша гибкая ценовая политика, оперативность поставки и
профессионализм персонала являются залогом успеха в сотрудничестве с нашими
контрагентами!</p>
       
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLogo from "@/ui/Icon/IconLogo.vue";
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
  text-indent: 25px;
  @media  (width < 768px) {
    font-size: 14px;
  }
}
.about__logo {
  padding-top: 20px;
  padding-bottom: 20px;
 
}

</style>
