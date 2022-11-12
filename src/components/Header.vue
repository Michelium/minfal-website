<script setup>
import Logo from "./icons/Logo.vue";
import {RouterLink} from "vue-router";
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <Logo/>
            </a>
            <div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <RouterLink class="router-link active" to="/">Home</RouterLink>
                    <RouterLink class="router-link" to="/">Over ons</RouterLink>
                    <RouterLink class="router-link" to="/">Popcornbeker</RouterLink>
                    <RouterLink class="router-link" to="/">Refill</RouterLink>
                    <RouterLink class="router-link" to="/">Circulair</RouterLink>
                    <RouterLink class="router-link" to="/about">Producten</RouterLink>
                    <RouterLink class="router-link" to="/about">
                        <button class="primary text-uppercase">Contact</button>
                    </RouterLink>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            
        </div>
    </nav>
</template>

<style scoped>
.container-fluid {
    padding: 0 180px;
}
nav {
    background-color: var(--primary);
    border-bottom: 1px solid #ffffff33;
}
.router-link {
    color: var(--white);
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    margin-left: 66px;
}
.router-link.router-link-exact-active {
    font-weight: 800;
}
</style>
