<template>
<div class="about">
  <h1>About us</h1>
  <p>Welcome to out website</p>
  <nuxt-link to="/">HOME</nuxt-link>
  <br>
  <Counter />
</div>
</template>

<script setup lang="ts">
import { useHeadTitle } from '~/helpers/useHeadTitle'
import { useHead } from '#imports'
import {onMounted} from "vue";

// setTimeout(() => {
//   const headTitle = useHeadTitle('About')
//   useHead(headTitle);
// }, 100);

onMounted(() => {
  const headTitle = useHeadTitle('About')
  useHead(headTitle);
});

</script>

<style scoped lang="less">
h1 {
  font-size: 1.5rem;
}

p {
  color: grey;
}
</style>