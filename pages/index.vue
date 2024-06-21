<template>
<div>HOME</div>
  <ul>
    <li><nuxt-link to="about">About!</nuxt-link></li>
  </ul>
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
</script>

<style scoped lang="less">
div {
  background-color: orange;
}
</style>