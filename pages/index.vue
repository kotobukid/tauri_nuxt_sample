<template>
<div>HOME</div>
  <ul>
    <li><nuxt-link to="about">About!</nuxt-link></li>
    <li v-for="user in users" :key="user.id">
      <nuxt-link :to="`/user/${user.id}_detail`">USER id {{ user.id }} {{ user.name }} /user/{{ user.id }}</nuxt-link>
    </li>
  </ul>
  <Counter></Counter>
</template>

<script setup lang="ts">
import { useHeadTitle } from '~/helpers/useHeadTitle'
import { useHead } from '#imports'

const headTitle = useHeadTitle('Home')
useHead(headTitle);
// const appConfig = useAppConfig();
// console.log(appConfig)

// export default {
//   name: 'indexPage'
// }

const users = [
  {id: 1, name: 'taro'},
  {id: 2, name: 'jiro'},
  {id: 3, name: 'saburo'},
  {id: 4, name: 'hanako'},
  {id: 5, name: 'jane'},
];
</script>

<style scoped lang="less">
</style>