<script setup>
</script>

<template>
    <section>
        <div class="container-fluid d-flex flex-column align-items-center">
            <h1>Wij ontwikkelen herbruikbare verpakkingen en circulaire <wbr> systemen voor bioscopen, theaters en meer...</h1>
            <button class="secondary">Meer</button>
            <div class="card">
                <img src="@/assets/images/home-hero-main-image.png" alt="">
            </div>
        </div>
        <div class="background-image">
            <svg preserveAspectRatio="none" viewBox="0 0 1920 788" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M593.199 649.593C310.389 463.752 79.8955 572.159 0 649.593V0H1920V649.593C1599.08 494.322 1537.4 519.796 1285.68 649.593C1033.96 779.39 946.712 881.894 593.199 649.593Z" fill="#436041"/>
            </svg>
        </div>
    </section>
</template>

<style scoped>
.container-fluid {
    padding: 0 180px;
}
section {
    min-height: calc(100vh - 115px);
}
h1 {
    max-width: 1280px;
    text-align: center;
    margin-top: 60px;
}
button {
    margin-top: 35px;
}

.card {
    margin-top: 64px;
    max-width: 750px;
    border: none;
    border-radius: 30px;
    border-bottom: 7px solid var(--primary);
}
.card img {
    margin: 60px 113px;
}
.background-image {
    position: absolute;
    top: -5vh;
    z-index: -1;
}
.background-image svg {
    width: calc(100vw - 15px);
}
</style>