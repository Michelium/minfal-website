<script setup>
import PartnerCardItem from './PartnerCardItem.vue';
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="row">
                <div class="col-12 col-lg-4 d-flex flex-column">
                    <p class="card-title">Ga het avontuur aan met Minfal als betrouwbare partner.</p>
                    <button class="secondary mt-4 mb-5 mb-lg-0 align-self-center align-self-lg-start">Over ons</button>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="item-row">
                        <PartnerCardItem
                            title="Totaalpakket"
                            text="Volledig assortiment en service, Minfal neemt uw werk uit handen"/>
                        <PartnerCardItem
                            title="Gespecialiseerd"
                            text="in oplossingen voor de amusementssector"/>
                    </div>
                    <div class="item-row">
                        <PartnerCardItem
                            title="Snelle service"
                            text="Korte doorlooptijden en direct beginnen"/>
                        <PartnerCardItem
                            title="Advies"
                            text="op basis van uw situatie en voorkeuren"/>
                        <PartnerCardItem
                            title="Maatwerk"
                            text="Uw logo, kleuren, formaten; alles is mogelijk"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.card {
    background-image: url("@/assets/images/number-card-background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    background-color: var(--primary);
    padding: 50px 34px;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
p.card-title {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: var(--white);
}
div.item-row {
    display: flex;
    column-gap: 24px;
}
div.item-row:first-of-type {
    margin-bottom: 25px;
}
@media screen and (max-width: 768px) {
    div.item-row {
        flex-wrap: wrap;
        row-gap: 20px;
    }
}

@media (min-width: 992px) {
    p.card-title {
        font-size: 40px;
        line-height: 50px;
        text-align: left;
    }
}
</style>