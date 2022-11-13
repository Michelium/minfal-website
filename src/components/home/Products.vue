<script setup>
import ProductDescription from './../icons/ProductDescription.vue'
</script>

<template>
    <section>
        <div class="container d-flex flex-column align-items-center">
            <div class="row">
                <div class="col-12 d-flex flex-column align-items-center">
                    <h2 class="mt-3">De herbruikbare popcornbeker is onze trots.</h2>
                    <h3>We wilden een iconisch en verrassend product verduurzamen. Daardoor hebben we de herbruikbare
                        <wbr>
                        popcornbeker ontwikkeld. Ontdek ons product door omlaag te scrollen!
                    </h3>
                    <img class="mt-4" src="@/assets/images/home-products-main-image.png" alt="">
                    <button class="secondary">Meer informatie</button>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
section {
    min-height: calc(100vh);
}
h2 {
    max-width: 1280px;
    text-align: center;
}
h3 {
    text-align: center;
    max-width: 1000px;
}
img {
    width: 100%;
    margin-left: 64px;
}
button {
    margin-top: 35px;
}

</style>