<script setup lang="ts">
import {useCount} from "../composables/count";
import {useAppConfig} from "nuxt/app";

const {
  count,
  increment,
  incrBy
} = useCount();

const appConfig = useAppConfig();
const log_appConfig = () => {
  console.log(appConfig);
};

</script>

<template>
  <span class="count">{{ count }}</span>
  <br/>
  <button @click="increment"> + 1</button>
  <br/>
  <button @click="incrBy(2)"> + 2</button>
  <br/>
  <button @click="log_appConfig">??</button>
</template>

<style scoped lang="less">

</style>