<script setup lang="ts">
import {useCount} from "../composables/count";

const {
  count,
  increment,
  incrBy
} = useCount();


</script>

<template>
  <span class="count">{{ count }}</span>
  <br/>
  <button @click="increment"> + 1 </button>
  <br/>
  <button @click="incrBy(2)"> + 2 </button>
</template>

<style scoped lang="less">

</style>