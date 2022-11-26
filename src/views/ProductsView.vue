<script setup>
import Hero from "../components/Hero.vue";
import TitleText from "../components/TitleText.vue";
import TwoColumnTextImage from "../components/TwoColumnTextImage.vue";
import ContactFooter from "../components/ContactFooter.vue";
import Products from "../components/products/Products.vue";
</script>

<style scoped src="../assets/css/products.css"></style>

<template>
    <section id="hero">
        <Hero title="Onze Verpakkingen"/>
    </section>
    <section id="intro">
        <div class="vector"></div>
        <div class="vector-waves"></div>
        <TitleText title="Ons volledige assortiment verpakkingen">
            <p>Alle popcornbekers, nacho trays en chipsbakjes zijn maatwerk. Het definitieve formaat en de vormen staan nog niet vast en zijn op basis van uw wensen.</p>
            <p>De Frisdrank- en koffiebekers zijn wel standaard. Deze kunt u alleen bedrukken naar uw wens en in sommige gevallen kunt u ook een eigen kleur kiezen.</p>
        </TitleText>
    </section>
    <section id="popcornbekers">
        <TitleText title="Popcornbekers (maatwerk)">
            <p>De definitieve vorm en het formaat zijn nader te bepalen. Doordat veel bedrijven eigen porties hanteren hebben we geen standaardmodellen maar is alles maatwerk.</p>
        </TitleText>
    </section>
    <section id="products">
        <Products/>
    </section>
    <section id="nacho-trays">
        <div class="vector"></div>
        <TwoColumnTextImage image="products-nacho-trays.png" :image-first="true" :image-bigger="false">
            <h2 class="mt-5  mt-lg-0">Nacho trays en chipsbakjes<br> (maatwerk)</h2>
            <p>Wij bieden ook unieke herbruikbare nacho-bakjes aan. Volledig herbruikbaar en passend in een circulair verpakkingssysteem.</p>
            <p>Wij bieden ook unieke herbruikbare nacho-bakjes aan. Volledig herbruikbaar en passend in een circulair verpakkingssysteem.</p>
            <h4>Eigenschappen/specificaties</h4>
            <ul class="mt-4">
                <li><span>Gemaakt in Nederland</span></li>
                <li><span>Herbruikbaar en 100% Recyclebaar</span></li>
                <li><span>Vaatwasserbestendig</span></li>
                <li><span>Alle kleuren mogelijk</span></li>
                <li><span>Uw formaat, logo en huisstijl</span></li>
            </ul>
        </TwoColumnTextImage>
    </section>
    <section id="soft-drink">
        <TwoColumnTextImage image="products-soft-drink.png" :image-bigger="false">
            <h2 class="mt-4 mt-lg-0">Frisdrank- en koffiebekers</h2>
            <p>Onze herbruikbare frisdrank- en koffiebekers zijn er in de volgende maten:</p>
            <div class="row mb-4">
                <div class="col-12 col-lg-6">
                    <div class="card">
                        <div class="card-header">Frisdrankbekers</div>
                        <table>
                            <tr>
                                <th>Small</th>
                                <td>300 ml</td>
                            </tr>
                            <tr>
                                <th>Medium</th>
                                <td>400 ml</td>
                            </tr>
                            <tr>
                                <th>Large</th>
                                <td>500 ml</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card">
                        <div class="card-header">Koffiebekers</div>
                        <table>
                            <tr>
                                <th>Small</th>
                                <td>200 ml</td>
                            </tr>
                            <tr>
                                <th>Medium</th>
                                <td>300 ml</td>
                            </tr>
                            <tr>
                                <th>Large</th>
                                <td>400 ml</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <h4>Eigenschappen/specificaties</h4>
            <ul class="mt-4">
                <li><span>Gemaakt in Duitsland</span></li>
                <li><span>Herbruikbaar en 100% Recyclebaar</span></li>
                <li><span>Vaatwasserbestendig</span></li>
                <li><span>Alle kleuren mogelijk</span></li>
                <li><span>Bedrukking met uw logo of artwork</span></li>
            </ul>
        </TwoColumnTextImage>
    </section>
    <section id="contact-footer">
        <ContactFooter
            title="Geïnteresseerd in onze producten? Vraag offerte of meer informatie aan!"
            text="We reageren zo snel mogelijk op uw aanvraag."
            textarea-label="Waarvan wilt u een offerte/informatie ontvangen?"/>
    </section>
</template>