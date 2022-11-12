<script setup>
import ProductRangeItem from './ProductRangeItem.vue';
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h2>Ons volledige assortiment</h2>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <ProductRangeItem title="Popcornbekers" image="popcornbekers.png"/>
                <ProductRangeItem title="Nacho Trays" image="nacho_trays.png"/>
                <ProductRangeItem title="Chipsbakjes" image="chipsbakjes.png"/>
                <ProductRangeItem title="Frisdrankbekers" image="frisdrankbekers.png"/>
                <ProductRangeItem title="Koffiebekers" image="koffiebekers.png"/>
            </div>
            <button class="secondary">Bekijks ons assortiment</button>
        </div>
    </section>
</template>

<style scoped>
    h2 {
        text-align: center;
    }
</style>