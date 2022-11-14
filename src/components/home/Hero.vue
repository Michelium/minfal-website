<script setup>
</script>

<template>
    <div class="container-fluid d-flex flex-column align-items-center">
        <h1>Wij ontwikkelen herbruikbare verpakkingen en circulaire
            <wbr>
            systemen voor bioscopen, theaters en meer...
        </h1>
        <button class="secondary">Meer</button>
        <div class="card">
<!--            <img src="@/assets/images/home-hero-main-image.png" alt="">-->
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    padding: 0 180px;
}
@media (min-width: 992px) {
    .container-fluid {
        height: calc(100vh - 115px);
        background-image: url("@/assets/images/header-desktop-vector.svg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: top left;
    }
}
@media (min-width: 1400px) {
    .container-fluid {
        background-position: top -20vh left;
    }
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
    margin: 2% 0 25px 0;
    display: flex;
    height: 100%;
    aspect-ratio: 523 / 390;
    border: none;
    border-radius: 30px;
    border-bottom: 7px solid var(--primary);

    background-image: url("@/assets/images/home-hero-main-image.png");
    background-repeat: no-repeat;
    background-size: 80% 80%;
    background-position: center;
}
.card img {
    position: relative;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>