<script setup>
</script>

<template>
    <div class="mobile-header-vector"></div>
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
    height: calc(100vh - 115px);
    position: relative;
}

.mobile-header-vector {
    overflow: hidden;
    position: absolute;
    z-index: -100;
    width: 150%;
    left: -25%;
    height: 60vh;
    border-radius: 0 0 490% 490%;
    background-color: var(--primary);
}

h1 {
    text-align: center;
    margin-top: 15px;
    max-width: 1280px;
}

button {
    margin-top: 8px;
    margin-bottom: 15px;
}

.card {
    display: flex;
    width: 100%;
    aspect-ratio: 523 / 390;
    border: none;
    border-radius: 30px;
    border-bottom: 7px solid var(--primary);
    background-image: url("@/assets/images/home-hero-main-image.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 80%;
    object-fit: contain;
    margin: 2% 10px 25px 10px;
}

@media (min-width: 576px) {
    .card {
        height: 100%;
        width: unset;
    }
}

@media (min-width: 992px) {
    .container-fluid {
        padding: 0 180px;
        background-image: url("@/assets/images/header-desktop-vector.svg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: top left;
    }
    
    .mobile-header-vector {
        display: none;
    }
    
    h1 {
        margin-top: 40px;
    }
    
    button {
        margin-top: 30px;
    }
    
    .card {
        height: 100%;
        width: unset;
    }
}
@media (min-width: 1400px) {
    .container-fluid {
        background-position: top -20vh left;
    }
}
</style>