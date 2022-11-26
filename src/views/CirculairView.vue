<script setup>
import Hero from "../components/Hero.vue";
import TitleText from "../components/TitleText.vue";
import TwoColumnTextImage from "../components/TwoColumnTextImage.vue";
import ContactFooter from "../components/ContactFooter.vue";
import Bullets from "../components/circulair/Bullets.vue";
</script>

<style scoped src="../assets/css/circulair.css"></style>

<template>
    <section id="hero">
        <Hero title="Minfal Circulair"/>
    </section>
    <section id="intro">
        <div class="vector"></div>
        <div class="vector-waves"></div>
        <TitleText title="Ga voor Circulair met Minfal.">
            <p>Minfal Circulair is een innovatief concept waarbij herbruikbare verpakkingen na gebruik intern worden gewassen zodat deze vervolgens tientallen- tot honderden keren kunnen worden hergebruikt.</p>
            <p>Bespaar op verpakkingskosten door wegwerpverpakkingen te vervangen voor herbruikbare verpakkingen.</p>
        </TitleText>
    </section>
    <section id="circulair">
        <Bullets/>
    </section>
    <section id="collection-station">
        <div class="background-vector"></div>
        <TwoColumnTextImage image="circulair-collection-stations.png" :imageFirst="true" :imageBigger="false">
            <h2 class="mt-4 mt-lg-0">Inzamelstations</h2>
            <p>Minfal levert zelf ontwikkelde inzamelstations bij Minfal Circulair. Bezoekers kunnen de herbruikbare popcornbekers hier inleveren na gebruik. Deze inzamelstations worden vervolgens geleegd zodat de verpakking gereinigd kunnen
                worden.</p>
            <h4 class="mt-4">Maatwerk</h4>
            <p>Wij leveren de inzamelstations op basis van de door u geconfigureerde verpakkingen, zodat deze perfect passen. Minfal kan de inzamelstations ook vergroten of verkleinen, op basis van uw wensen.</p>
        </TwoColumnTextImage>
    </section>
    <section id="dishwasher">
        <div class="vector"></div>
        <TwoColumnTextImage image="circulair-dishwasher.png" :imageFirst="false" :imageBigger="false">
            <h2 class="mt-4 mt-lg-0">Industriële vaatwasmachine</h2>
            <p>Om de herbruikbare verpakkingen te reinigen wordt (optioneel) een industriële vaatwasmachine meegeleverd. Minfal werkt samen met een fabrikant van industriële vaatwasmachine's die uitermate geschikt zijn voor de herbruikbare popcornbekers.</p>
            <p>De vaatwasmachine's zijn er van klein naar groot. Zo zijn er voorladers (net als in de keuken thuis), maar ook doorschuif- en transportmachines.</p>
            <p>Minfal ontwikkelt samen met de fabrikant een wasprogramma op basis van het gewicht, de vorm en de dikte van de herbruikbare verpakkingen die u gewassen wilt hebben.</p>
        </TwoColumnTextImage>
    </section>
    <section id="contact-footer">
        <ContactFooter
            title="Laten we beginnen!"
            text="We komen graag op bezoek om vrijblijvend de mogelijkheden te bespreken."
            textarea-label="Bericht"/>
    </section>
</template>