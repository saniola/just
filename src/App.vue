<template>
  <Header />

  <router-view />

  <Footer />
</template>

<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>
