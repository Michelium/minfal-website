<script setup>
  import { RouterView } from "vue-router";
  import Header from "./components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
  </div>
  <RouterView />
</template>

<style scoped>
  /* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */
</style>
