<script setup></script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="text-green-circle">
                    <h2 class="text-center">Onze verkoopmodellen.</h2>
                </div>
                <h3 class="text-center">Een Refill- of Circulair concept</h3>
            </div>
        </div>
        <div class="row refill-stations-row">
            <div class="col-12 col-lg-5 order-last order-lg-first d-flex flex-column">
                <h4>Minfal Refill Stations + Merchandise</h4>
                <dl>
                    <dt>Een bezoeker koopt een herbruikbare popcornbeker als merchandise en wordt eigenaar (neemt 'm mee naar huis)</dt>
                    <dt>De bezoeker krijgt korting op zijn Refill bij een volgende bezoek</dt>
                </dl>
                <p>Het is een trend: korting op je refill. AMC Cinemas doet dit al jaren, net als Starbucks, Albert Heijn, Hema, Kiosk en nog véél meer andere bedrijven. Het zorgt voor klantenbinding, het is duurzaam en het sluit aan op de
                    zelfservice trend. Dit concept werkt voornamelijk bij de vaste bezoekers die jaarlijks meer dan tien keer langskomen.</p>
                <p>Het kopen van een eigen popcornbeker is optioneel. Zo ligt de duurzame keuze bij de bezoeker. Het is een service dat de organisatie de duurzame optie aanbiedt.</p>
                <RouterLink to="/minfal-refill">
                    <button class="secondary align-self-center align-self-lg-start">Meer over Minfal Refill</button>
                </RouterLink>
            </div>
            <div class="col-12 col-lg-7 order-first order-lg-last my-3 mt-lg-0">
                <img src="@/assets/images/sale-models-refill-station.webp" alt="Minfal Refill Stations">
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-7 pe-lg-5">
                <img src="@/assets/images/sale-models-circulair.webp" alt="Minfal Circulair">
            </div>
            <div class="col-12 col-lg-5 d-flex flex-column">
                <h4>Minfal Circulair</h4>
                <dl>
                    <dt>Een bezoeker koopt popcorn zoals nu, maar ontvangt deze in herbruikbare popcornbeker)</dt>
                    <dt>De bezoeker levert de herbruikbare popcornbeker na gebruik in bij een inzamelstation op locatie.</dt>
                    <dt>De popcornbekers worden intern gewassen en vervolgens hergebruikt</dt>
                </dl>
                <h5 class="sub-title">Ga voor circulair.</h5>
                <p>Een volledig circulair verpakkingssysteem waarbij de popcornbekers intern gewassen worden zodat deze vervolgens hergebruikt kunnen worden.</p>
                <p>Minfal creëert daarnaast een speciale vaatwasmachine-configuratie op maat, afhankelijk van uw situatie. De popcornbekers krijgen ook een speciaal ontwikkeld wasprogramma voor optimale reiniging.</p>
                <RouterLink to="/minfal-circulair">
                    <button class="secondary align-self-center align-self-lg-start">Ontdek Minfal Circulair</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.refill-stations-row {
    margin-bottom: 82px;
}
img {
    width: 100%;
}
dl {
    counter-reset: counter;
}
dl dt {
    position: relative;
    font-size: 18px;
    font-style: normal;
    line-height: 30px;
    font-weight: 500;
    padding: 4px 0 17px 0;
}
dl dt:before {
    content: counter(counter);
    counter-increment: counter;
    position: absolute;
    left: 0;
    top: 0;
    font: 600 50px/1 Oswald Sans-Serif;
    color: var(--primary);
}
dl dd {
    margin: 0 0 50px 0;
}
dl dt, dl dd {
    padding-left: 50px;
}
h5.sub-title {
    font-size: 22px;
    line-height: 33px;
    font-weight: 600;
    margin-bottom: 15px;
    font-family: 'Oswald', sans-serif;
}
button {
    margin-top: 40px;
}

@media (min-width: 992px) {
    h5.sub-title {
        font-size: 32px;
        line-height: 39px;
    }
}
</style>
