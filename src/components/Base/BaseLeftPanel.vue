<template>
  <v-card
    max-width="300"
  >
    <v-list
      :items="items"
      item-title="name"
      item-value="id"
    ></v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          name: 'Каталог',
          id: 1,
        },
        {
          name: 'Запасные части',
          id: 2,
        },
        {
          name: 'Дизельные запчасти',
          id: 3,
        },
        {
          name: 'Запчасти к тепловозам',
          id: 4,
        },
        {
          name: 'Прокладки и кольца медные',
          id: 5,
        },
        {
          name: 'Элементы фильтрующие',
          id: 6,
        },
        {
          name: 'Элементы фильтрующие',
          id: 7,
        },
        {
          name: 'Элементы фильтрующие',
          id: 8,
        },
        {
          name: 'Элементы фильтрующие',
          id: 9,
        },
        {
          name: 'Элементы фильтрующие',
          id: 10,
        },
        {
          name: 'РТИ',
          id: 11,
        },
      ],
    }),
  }
</script>

<style scoped>

</style>
