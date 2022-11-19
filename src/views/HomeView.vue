<script setup>
import Hero from "./../components/home/Hero.vue";
import Products from "./../components/home/Products.vue";
import NumberCard from "./../components/NumberCard.vue";
import ProductRange from "./../components/home/ProductRange.vue";
import SaleModels from "./../components/home/SaleModels.vue";
import PartnerCard from "../components/home/PartnerCard.vue";
import ContactFooter from "../components/ContactFooter.vue";
</script>

<style scoped src="../assets/css/home.css"></style>

<template>
    <section id="hero">
        <Hero/>
    </section>
    <section id="products">
        <Products/>
    </section>
    <section id="number-card">
        <NumberCard/>
    </section>
    <section id="product-range">
        <ProductRange/>
    </section>
    <section id="sale-models">
        <SaleModels/>
    </section>
    <section id="partner-card">
        <PartnerCard/>
    </section>
    <section id="contact-footer">
        <ContactFooter
            title="Laten we beginnen!"
            text="We komen graag op bezoek om vrijblijvend de mogelijkheden te bespreken."
            textarea-label="Bericht"/>
    </section>
</template>