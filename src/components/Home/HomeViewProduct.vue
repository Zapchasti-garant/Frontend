<template>
  <div class="Product">
    <div class="container">
      <div style="border-bottom: 2px solid #efefef"></div>
      <div class="photo">
        <img :src="props.item.img" />
      </div>

      <div class="description">
        <h2>{{ props.item.name }}</h2>
        <h4>
          Наличие на складе:
          <span class="orders"
            >{{ props.item.number }}
            <span style="color: #727272">шт.</span></span
          >
        </h4>
        <h1>Цена: {{ priceFormat(props.item.price) }} ₽</h1>
        <div class="btn-wrap">
          <button class="btn-click" @click="goToViewProduct = !goToViewProduct">
            Купить
          </button>
          <Transition name="fade"> <div v-if="goToViewProduct">
            <div class="status">
              <ul class="list-reset list">

                <li class="item"><IconPhone :width="20" :height="20"/>+7 (4832) 599-242</li>
                <li class="item"><IconPhone :width="20" :height="20" />+7-952-963-27-24</li>
                <li class="item"><IconPhone :width="20" :height="20"/>+7-958-646-13-77</li>


            </ul>
              </div
            >
          </div></Transition>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import priceFormat from "@/helpers/priceFormat";
import { Product } from "@/types/types";
import { defineProps, PropType, ref } from "vue";

const goToViewProduct = ref(false);

</script>

<style scoped lang="scss">
.btn-wrap {
  display: flex;
  position: relative;
  gap: 50px;
  width: 100%;
}

.list {
display: flex;
flex-direction: column;
gap: 5px;
justify-content: center;
}


.orders {
  color: green;
}
.Product {
  padding-bottom: 43%;
}
.photo {
  padding: 30px;
  width: 45%;
  text-align: center;
  float: left;

  img {
    max-height: 240px;
  }
}
.description {
  padding: 60px 70px;
  float: left;
  width: 55%;
  border-left: 2px solid #efefef;

  h1 {
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
    color: #515151;
    font-weight: 300;
    font-size: 24px;
    font-weight: 300;
  }

  h2 {
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
    color: #515151;
    text-transform: uppercase;
    font-weight: 500;
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #efefef;
    color: #727272;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: #727272;
    padding: 20px 0;
    margin: 0;
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 15px;
    color: #515151;
    text-transform: uppercase;
    height: 40px;
    min-width: 125px;
    font-family: inherit;
    transition: all 0.3s ease;
    font-weight: 500;
    transform: translateY(20px);

    &:hover {
      background: rgb(146, 238, 146);
      border: 1px solid black;
      color: black;
      cursor: pointer;
    }
  }

}
</style>
<template>
  <div class="Product">
    <div class="container">
      <div style="border-bottom: 2px solid #efefef"></div>
      <div class="photo">
        <img :src="item.img" />
      </div>

      <div class="description">
        <h2>{{ item.name }}</h2>
        <h4>
          Наличие:
          <span class="orders"
            >{{ item.number }} <span style="color: #727272">шт.</span></span
          >
        </h4>
        <h1>Цена {{ priceFormat(item.price) }} ₽</h1>
        <div class="btn-wrap">
          <button class="btn-click" @click="goToViewProduct = !goToViewProduct">
            Купить
          </button>
          <div v-if="goToViewProduct">
            <span class="status"
              >Заказать: +7 (4832) 599-242 +7-952-963-27-24
              +7-958-646-13-77</span
            >
          </div>

          <button>Каталог запчастей</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import priceFormat from "@/helpers/priceFormat";
import { useStore } from "@/store/store";
import { Product } from "@/types/types";
import { computed, ref } from "vue";

const store = useStore();
const goToViewProduct = ref(false);

const item = computed(() => store.product as Product);
</script>

<style scoped lang="scss">
.btn-wrap {
  display: flex;
  position: relative;
}

.status {
  content: "";
  position: absolute;
  min-width: 500px;
  left: 0;
  top: 65%;
  padding: 0;
  color: green;
}

.orders {
  color: green;
}
.Product {
  padding-bottom: 43%;
}
.photo {
  padding: 30px;
  width: 45%;
  text-align: center;
  float: left;

  img {
    max-height: 240px;
  }
}
.description {
  padding: 60px 70px;
  float: left;
  width: 55%;
  border-left: 2px solid #efefef;

  h1 {
    padding-bottom: 10px;
    color: #515151;
    font-weight: 300;
    padding-top: 15px;
    margin: 0;
    font-size: 30px;
    font-weight: 300;
  }

  h2 {
    color: #515151;
    margin: 0;
    text-transform: uppercase;
    font-weight: 500;
  }

  h4 {
    margin: 0;
    color: #727272;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: #727272;
    padding: 20px 0;
    margin: 0;
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 15px;
    margin-bottom: 30px;
    color: #515151;
    text-transform: uppercase;
    min-width: 125px;
    font-family: inherit;
    margin-right: 5px;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      background: rgb(146, 238, 146);
      border: 1px solid black;
      color: black;
      cursor: pointer;
    }
  }
}
</style>
