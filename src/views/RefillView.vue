<script setup>
import Hero from "../components/Hero.vue";
import TitleText from "../components/TitleText.vue";
import TwoColumnTextImage from "../components/TwoColumnTextImage.vue";
import ContactFooter from "../components/ContactFooter.vue";
</script>

<style scoped src="../assets/css/refill.css"></style>

<template>
    <section id="hero">
        <Hero title="Minfal Refill"/>
    </section>
    <section id="minfal-refill-stations">
        <div class="vector"></div>
        <div class="vector-waves"></div>
        <TitleText title="Minfal Refill Stations.">
            <p>Verras uw bezoekers met een popcorn- en/of dranken Refill Station. Ideaal voor in Bioscopen, pretparken en stadions.
                Minfal levert Refill Stations op maat en specifiek naar uw wensen. </p>
        </TitleText>
    </section>
    <section id="benefits">
        <TwoColumnTextImage image="refill-benefits.webp" image-label="Impressie schets">
            <h4>Voordelen van een Refill Station.</h4>
            <ul class="mt-4">
                <li><span>In combinatie met herbruikbare popcornbekers en andere herbruikbare producten van Minfal</span></li>
                <li><span>Verschillende formaten en samenstellingen mogelijk</span></li>
                <li><span>Het is een marketingmiddel (POS)</span></li>
                <li><span>Klanten zullen de mogelijkheid om zelf te tappen waarderen, het is een trend</span></li>
                <li><span>Bewezen verkoopmodel (bij AMC)</span></li>
                <li><span>Schaalbaar naar een circulair systeem</span></li>
            </ul>
            <h4 class="mt-4">Warme popcorn.</h4>
            <p>De Refill Stations houden de popcorn warm, zodat de bezoeker kan genieten van warme popcorn.
                De Refill stations houden de popcorn ook knapperig en droog. De stations moeten gevuld worden met Ready-to-serve popcorn.</p>
        </TwoColumnTextImage>
    </section>
    <section id="types">
        <div class="vector"></div>
        <div class="background-vector"></div>
        <TwoColumnTextImage image="refill-types.webp" image-label="Impressie schets" :imageFirst="true">
            <h4 class="mt-4">Verschillende types.</h4>
            <p>De Refill Stations zijn er in allerlei groottes en types. Op basis van de grootte van uw locatie en uw popcornverkopen adviseert Minfal een bepaald type machine.
                Er zijn ook verschillende soorten opvangbakken voor onder de dispensers.</p>
            <h4 class="mt-4">In uw huisstijl.</h4>
            <p>Wij zorgen dat al onze producten bij uw huisstijl passen. Zo maken we naast onze verpakkingen ook de Refill Stations op maat in uw gewenste afmeting, 
                kleur en voorzien we deze indien gewenst van uw logo.</p>
        </TwoColumnTextImage>
    </section>
    <section id="contact-footer">
        <ContactFooter
            class="hide-green-circle"
            title="Laten we beginnen!"
            text="We komen graag op bezoek om vrijblijvend de mogelijkheden te bespreken."
            textarea-label="Bericht"/>
    </section>
</template>