<script setup>
import Hero from "../components/Hero.vue";
import TitleText from "../components/TitleText.vue";
import TwoColumnTextImage from "../components/TwoColumnTextImage.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<style scoped src="../assets/css/contact.css"></style>

<template>
    <section id="hero">
        <Hero title="Contact"/>
    </section>
    <section id="intro">
        <TitleText title="Vraag Offerte aan">
            <p>We reageren zo snel mogelijk op uw aanvraag.</p>
        </TitleText>
    </section>
    <section id="form">
        <TwoColumnTextImage image="/src/assets/images/contact-building.png" :image-first="true" :image-bigger="false">
            <ContactForm :full-colls="true"/>
        </TwoColumnTextImage>
    </section>
    <section id="info">
        <div class="container d-lg-none">
            <h2 class="mb-4">Contact</h2>
        </div>
        <TwoColumnTextImage image="/src/assets/images/contact-map.png" :image-bigger="false">
            <h2 class="d-none d-lg-block mb-4">Contact</h2>
            <h4>Adres:</h4>
            <p class="mb-0">Turfschipper 62</p>
            <p>2292 JB Wateringen</p>
            <h4>E-mail:</h4>
            <a class="email" href="mailto:info@minfal.nl">info@minfal.nl</a>
            <p class="mt-4">Voor telefonisch contact kunt u een terugbelverzoek indienen via het contactformulier.</p>
            <p>* klanten krijgen een vaste contactpersoon.</p>
            <a href="">Algemene voorwaarden</a>
        </TwoColumnTextImage>
    </section>
</template>

<style scoped>
p {
    font-size: 16px;
    line-height: 26px;
}
a {
    font-size: 16px;
    color: var(--black);
}
</style>