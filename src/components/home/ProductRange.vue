<script setup>
import ProductRangeItem from './ProductRangeItem.vue';
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center text-lg-start">Ons volledige herbruikbare assortiment.</h2>
            </div>
        </div>
        <div class="row mt-3 mt-lg-5 justify-content-center d-none d-lg-flex">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl">
                <ProductRangeItem title="Popcornbekers" image="popcornbekers.webp"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl">
                <ProductRangeItem title="Nacho Trays" image="nacho_trays.webp"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl">
                <ProductRangeItem title="Chipsbakjes" image="chipsbakjes.webp"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl">
                <ProductRangeItem title="Frisdrankbekers" image="frisdrankbekers.webp"/>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl">
                <ProductRangeItem title="Koffiebekers" image="koffiebekers.webp"/>
            </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide d-lg-none" data-bs-ride="carousel" data-bs-touch="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <ProductRangeItem title="Popcornbekers" image="popcornbekers.webp"/>
                </div>
                <div class="carousel-item">
                    <ProductRangeItem title="Nacho Trays" image="nacho_trays.webp"/>
                </div>
                <div class="carousel-item">
                    <ProductRangeItem title="Chipsbakjes" image="chipsbakjes.webp"/>
                </div>
                <div class="carousel-item">
                    <ProductRangeItem title="Frisdrankbekers" image="frisdrankbekers.webp"/>
                </div>
                <div class="carousel-item">
                    <ProductRangeItem title="Koffiebekers" image="koffiebekers.webp"/>
                </div>
            </div>
            <button class="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <RouterLink to="/producten">
            <button class="secondary">Bekijk het assortiment</button>
        </RouterLink>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
button {
    margin-top: 70px;
}
.carousel {
    width: 100vw;
}
.carousel-inner div {
    height: 400px;
    object-fit: cover;
}
/*.carousel-item {*/
/*    object-fit: contain;*/
/*    object-position: center;*/
/*    overflow: hidden;*/
/*    height: 400px;*/
/*    width: 400px;*/
/*}*/
.carousel-item {
    /*padding: 10px;*/
    background-color: var(--white);
}
.carousel-control {
    position: absolute;
    bottom: -337px;
    margin: 0 10px;
}
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23436041' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23436041' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

@media (min-width: 400px) {
    .carousel{
        width: 80vw;
    }
}
@media (min-width: 576px) {
    .carousel{
        width: 70vw;
    }
}
@media (min-width: 650px) {
    .carousel{
        width: 60vw;
    }
}
@media (min-width: 768px) {
    .carousel{
        width: 50vw;
    }
}
</style>