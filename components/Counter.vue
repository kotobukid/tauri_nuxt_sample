<script setup lang="ts">
import {useCount} from "../composables/count";

const {
  count,
  increment,
  incrBy,
  log_appConfig
} = useCount();

</script>

<template>
  <div class="m-5 p-5 bg-green-500 text-green-900">
    <span class="count text-black rounded py-5 px-10">{{ count }}</span>
    <br/>
    <button class="bg-blue-500 hover:bg-blue-900 text-black font-bold py-10 px-10 rounded m-5" @click="increment"> + 1</button>
    <br/>
    <button class="bg-blue-500 hover:bg-blue-900 text-black font-bold py-10 px-10 rounded m-5" @click="incrBy(2)"> + 2</button>
    <br/>
    <button @click="log_appConfig">??</button>
  </div>
</template>

<style scoped lang="less">
</style>