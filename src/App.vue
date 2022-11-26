<script setup>
import {RouterView} from "vue-router";
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';
</script>

<template>
    <section id="header">
        <Header/>
    </section>
    <RouterView/>
    <section id="footer">
        <Footer/>
    </section>
</template>

<style scoped>
/* nav a {
display: inline-block;
padding: 0 1rem;
border-left: 1px solid var(--color-border);
} */
</style>
