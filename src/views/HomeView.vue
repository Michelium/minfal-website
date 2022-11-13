<script setup>
import Hero from "./../components/home/Hero.vue";
import Products from "./../components/home/Products.vue";
import NumberCard from "./../components/NumberCard.vue";
import ProductRange from "./../components/home/ProductRange.vue";
import SaleModels from "./../components/home/SaleModels.vue";
import PartnerCard from "../components/home/PartnerCard.vue";
import ContactFooter from "../components/ContactFooter.vue";
</script>

<template>
    <Hero/>
    <Products/>
    <NumberCard/>
    <ProductRange/>
    <SaleModels/>
    <PartnerCard/>
    <ContactFooter
        title="Laten we beginnen!"
        text="We komen graag op bezoek om vrijblijvend de mogelijkheden te bespreken."
        textarea-label="Bericht"/>
</template>
