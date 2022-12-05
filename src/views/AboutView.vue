<script setup>
import Hero from "../components/Hero.vue";
import Personalities from "../components/about/Personalities.vue";
import TitleText from "../components/TitleText.vue";
import Challenge from "../components/about/Challenge.vue";
import NumberCard from "./../components/NumberCard.vue";
import ContactFooter from "../components/ContactFooter.vue";
</script>

<style scoped src="../assets/css/about.css"></style>

<template>
    <section id="hero">
        <Hero title="Over ons"/>
    </section>
    <section id="personalities">
        <Personalities/>
    </section>
    <section id="lean-startup">
        <TitleText title="Wij zijn een Lean-Startup.">
            <p>Dat wil zeggen dat we onze producten mede ontwikkeld hebben met feedback vanuit de markt zelf, waardoor ons product perfect in de markt past.</p>
        </TitleText>
    </section>
    <section id="challenge">
        <div class="vector"></div>
        <Challenge/>
    </section>
    <section id="mission">
        <TitleText title="Onze Missie.">
            <p>Onze missie is het reduceren van verpakkingsafval in de amusementssector doormiddel van het ontwikkelen van herbruikbare verpakkingen en circulaire verpakkingssystemen.</p>
        </TitleText>
    </section>
    <section id="number-card">
        <NumberCard/>
    </section>
    <section id="contact-footer">
        <ContactFooter
            class="hide-green-circle"
            title="Laten we beginnen!"
            text="We komen graag op bezoek om vrijblijvend de mogelijkheden te bespreken."
            textarea-label="Bericht"/>
    </section>
</template>