<script setup>
import Hero from "../components/Hero.vue";
import TitleText from "../components/TitleText.vue";
import Benefits from "../components/popcorn/Benefits.vue";
import ProductRange from "../components/popcorn/ProductRange.vue";
import ProductRangeText from "../components/popcorn/ProductRangeText.vue";
import ContactFooter from "../components/ContactFooter.vue";
</script>

<style scoped src="../assets/css/popcorn.css"></style>

<template>
    <section id="hero">
        <Hero title="Popcornbeker"/>
    </section>
    <section id="sustainable-minfal">
        <div class="vector"></div>
        <TitleText title="Ga voor duurzaam met Minfal">
            <p>Onze herbruikbare popcornbekers.</p>
            <p>Vervang wegwerpverpakkingen voor de herbruikbare popcornbekers van Minfal. Hiermee boost u uw duurzaamheidsimago en kunt u besparen op verpakkingskosten. Een uniek en iconisch product, maar dan duurzaam.</p>
        </TitleText>
    </section> 
    <section id="benefits">
        <Benefits/>
    </section>
    <section id="product-range">
        <ProductRange/>
    </section>
    <section id="product-range-text">
        <ProductRangeText/>
    </section>
    <section id="contact-footer">
        <ContactFooter
            title="Vraag offerte aan"
            text="We reageren zo snel mogelijk op uw aanvraag. "
            textarea-label="Bericht"/>
    </section>
</template>