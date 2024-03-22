<template>
  <div class="container">
    <h2 class="table__title">Контакты</h2>
    <table class="table">
      <tr>
        <th>Полное
          наименование</th>
        <td>Общество с ограниченной
          ответственностью "Промжелснаб"</td>
      </tr>
      <tr>
        <th>Сокращенное
          наименование</th>
        <td>ООО "ПЖС"</td>
      </tr>
      <tr>
        <th>Юридический адрес</th>
        <td>241047, г. Брянск, пер. 2-й Мичурина,
          д. 1, пом. 2</td>
      </tr>
      <tr>
        <th>Телефон/факс</th>
        <td>8 (4832) 599-242,
          8-952-963-27-24,
          8-958-646-13-77</td>
      </tr>
      <tr>
        <th>ИНН/КПП</th>
        <td>3257084752/325701001</td>
      </tr>
      <tr>
        <th>ОГРН</th>
        <td>1223200004610</td>
      </tr>
      <tr>
        <th>Расчетный счет</th>
        <td>40702810308000009971</td>
      </tr>
      <tr>
        <th>Корреспондентский счет</th>
        <td>30101810400000000601</td>
      </tr>
      <tr>
        <th>БИК банка</th>
        <td>041501601</td>
      </tr>
      <tr>
        <th>Банк</th>
        <td>БРЯНСКОЕ ОТДЕЛЕНИЕ № 8605
          ПАО СБЕРБАНК</td>
      </tr>
      <tr>
        <th>Генеральный директор</th>
        <td>Шекалев Дмитрий Александрович,
          действует на основании Устава</td>
      </tr>
      <tr>
        <th>E-mail</th>
        <td>--------------</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.table {
  border-collapse: collapse;

  td {
    border: 1px solid grey;
    padding: 5px 50px;
  }

  th {
    padding: 5px 50px;
    border: 1px solid grey;
    text-align: left;
  }

}

.table__title {
  margin-bottom: 20px;
  text-align: center;
  color: #023859;
}
</style>
