<template>
  <section class="parts">
    <div class="container custom__wrapper-list">
      <v-card
        max-width="344"
        v-for="(item, idx) in listData"
        :key="idx"
        @click="goToViewProduct(item.id)"
      >
        <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-img>
        <v-card-title>
          {{item.title}}
        </v-card-title>
        <v-card-subtitle>
          {{item.body}}
        </v-card-subtitle>
        <div>Наличие на складе {{item.id}}</div>

      </v-card>
    </div>
    <div class="wrapper__pagination">

      <v-pagination :length="4" v-model="page" @click="changeView(page)"></v-pagination>
    </div>
  </section>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useStore} from "@/store/store.ts";
import {useRouter} from "vue-router";

const $router = useRouter()
interface List {
  body: string
  title: string
  user_id: string
  id: number
}
const goToViewProduct = (id: number) => {
  $router.push({name: 'oneProduct', params: {id}})
}
const listData = ref<List[]>([])
const store = useStore()
const page = ref<number>(1)
const changeView = async (view: number) => {
  listData.value = await store.getList('','', view)
}

onMounted(async () => {
  listData.value = await store.getList('','',page.value)
  console.log(store.listData)
})

</script>

<style scoped lang="scss">
.parts {
  padding: 30px 0;
}
.custom__wrapper-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.wrapper__pagination {
  padding: 20px 0;
}
</style>
