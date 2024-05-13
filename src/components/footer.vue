<template>
  <div :class="$style.footer">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Footer');

</script>

<style module lang="scss">
.footer {
  display: flex;
}
</style>
