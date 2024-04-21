<template>
  <div :class="$style.portfolio">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('My Portfolio');
const description = ref('Welcome to my portfolio page!');

</script>

<style module lang="scss">
.portfolio {
  display: flex;
}
</style>
