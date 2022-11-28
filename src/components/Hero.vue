<script setup>
defineProps({
    title: {
        type: String,
    },
})
</script>

<template>
    <div class="mobile-header-vector"></div>
    <div class="container-fluid d-flex flex-column align-items-center">
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>
.container-fluid {
    min-height: calc(190px);
}

.mobile-header-vector {
    overflow: hidden;
    position: absolute;
    z-index: -100;
    width: 150%;
    left: -25%;
    height: 13vh;
    border-radius: 0 0 490% 490%;
    background-color: var(--primary);
}

h1 {
    text-align: center;
    margin-top: 15px;
    max-width: 1280px;
}

@media (min-width: 992px) {
    .container-fluid {
        min-height: calc(450px - 115px);
        padding: 0 180px;
        background-image: url("@/assets/vectors/hero-desktop.svg");
        background-repeat: no-repeat;
        background-position: top -115px center;
        background-size: cover;
    }
    
    .mobile-header-vector {
        display: none;
    }
    
    h1 {
        margin-top: 65px;
    }
}

@media (min-width: 1921px) {
    .container-fluid {
        min-height: calc(550px - 115px);
        background-position: top -200px center;
    }
}
</style>