<template>
  <div :class="$style.header">
    <h1>{{ title }}</h1>
    <p>Lorem, ipsum dolor.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Hello, World!');

</script>

<style module lang="scss">
.header {
  display: flex;
}
</style>
