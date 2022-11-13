<script setup>
import ProductRangeItem from './ProductRangeItem.vue';
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Ons volledige assortiment</h2>
                </div>
            </div>
            <div class="cards-row mt-5">
                <ProductRangeItem title="Popcornbekers" image="popcornbekers.png"/>
                <ProductRangeItem title="Nacho Trays" image="nacho_trays.png"/>
                <ProductRangeItem title="Chipsbakjes" image="chipsbakjes.png"/>
                <ProductRangeItem title="Frisdrankbekers" image="frisdrankbekers.png"/>
                <ProductRangeItem title="Koffiebekers" image="koffiebekers.png"/>
            </div>
            <button class="secondary">Bekijk het assortiment</button>
        </div>
    </section>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        /*text-align: center;*/
    }
    button {
        margin-top: 70px;
    }
    div.cards-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 15px;
        width: 100%;
    }
</style>