<script setup lang="ts">

import {ref} from "vue";

const count = ref(0);

const increment = () => {
  count.value = count.value + 1;
}


</script>

<template>
  <span class="count">{{ count }}</span>
  <br/>
  <button @click="increment"> + 1</button>
</template>

<style scoped lang="less">

</style>