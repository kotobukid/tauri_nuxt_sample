<template>
<div class="about">
  <h1>About us</h1>
  <p>Welcome to out website</p>
  <nuxt-link to="/">HOME</nuxt-link>
  <br>
  <Counter />
</div>
</template>

<script lang="ts">
import { useHeadTitle } from '~/helpers/useHeadTitle'
import { useHead } from '#imports'

// const headTitle = useHeadTitle('About')
// useHead(headTitle);
export default {
  name: 'AboutPage'
}
</script>

<style scoped lang="less">
h1 {
  font-size: 1.5rem;
}

p {
  color: grey;
}
</style>