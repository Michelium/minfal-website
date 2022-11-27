<script setup>
import ProductRangeItem from './ProductRangeItem.vue';
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Ons volledige herbruikbare assortiment</h2>
            </div>
        </div>
        <div class="row mt-3 mt-lg-5">
            <div class="col">
                <ProductRangeItem title="Popcornbekers" image="popcornbekers.webp"/>
            </div>
            <div class="col">
                <ProductRangeItem title="Nacho Trays" image="nacho_trays.webp"/>
            </div>
            <div class="col">
                <ProductRangeItem title="Chipsbakjes" image="chipsbakjes.webp"/>
            </div>
            <div class="col">
                <ProductRangeItem title="Frisdrankbekers" image="frisdrankbekers.webp"/>
            </div>
            <div class="col">
                <ProductRangeItem title="Koffiebekers" image="koffiebekers.webp"/>
            </div>
        </div>
        <button class="secondary">Bekijk het assortiment</button>
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
</style>