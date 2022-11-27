<script setup>
import ProductDescription from './../icons/ProductDescription.vue'
</script>

<template>
    <div class="container d-flex flex-column align-items-center">
        <div class="row">
            <div class="col-12 d-flex flex-column align-items-center">
                <h2>De herbruikbare popcornbeker is onze trots.</h2>
                <h3>We wilden een iconisch en verrassend product verduurzamen. Daardoor hebben we de herbruikbare
                    <wbr>
                    popcornbeker ontwikkeld. Ontdek ons product door omlaag te scrollen!
                </h3>
                <img class="mt-4 desktop-image" src="@/assets/images/home-products-main-image.webp" id="desktop-image" alt="Drie popcornbekers van Minfal. Basic, plus en pro.">
                <div class="row mt-4 text-center d-lg-none mobile-images">
                    <div class="col-12 col-sm-4">
                        <img class="w-100" src="@/assets/images/home-products-basic.webp" alt="Minfal basic popcornbeker">
                        <h4>Basic</h4>
                    </div>
                    <div class="col-12 col-sm-4">
                        <img class="w-100" src="@/assets/images/home-products-plus.webp" alt="Minfal basic popcornbeker">
                        <h4>Plus</h4>
                    </div>
                    <div class="col-12 col-sm-4">
                        <img class="w-100" src="@/assets/images/home-products-pro.webp" alt="Minfal basic popcornbeker">
                        <h4>Pro</h4>
                    </div>
                </div>
                <button class="secondary">Meer informatie</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    max-width: 1280px;
    text-align: center;
}
h3 {
    text-align: center;
    max-width: 1000px;
}
img#desktop-image {
    display: none;
}
button {
    margin-top: 35px;
}
.mobile-images h4 {
    margin-top: -20px;
    margin-bottom: 35px;
}

@media (min-width: 992px) {
    img#desktop-image {
        display: block;
        width: 80%;
        margin-left: 64px;
        background-image: url("@/assets/vectors/14-squares.webp");
        background-repeat: no-repeat;
        background-size: 98px 188px;
        background-position: top right;
    }
}

</style>