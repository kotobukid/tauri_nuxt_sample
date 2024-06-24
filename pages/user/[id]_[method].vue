<script setup lang="ts">
import {useRoute} from "nuxt/app";
import {onMounted} from "vue";

const route = useRoute();

const userId = ref(null);
const method = ref('');

onMounted(() => {
  userId.value = route.params.id;
  method.value = route.params.method;
});


</script>

<template>
  <nuxt-link to="/">HOME</nuxt-link>
  <br>
  <h1>Detail page({{ method }})</h1>
  <span>ID: {{ userId }}</span>

</template>

<style scoped lang="less">

</style>