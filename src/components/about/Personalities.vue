<script setup></script>

<template>
    <div class="container">
        <div class="row mx-0">
            <div class="col-12 text-center px-0 position-relative">
                <img class="d-none d-lg-block vector" src="@/assets/vectors/popcornbeker.webp" alt="Vector">
                <img class="banner" src="@/assets/images/about-cinema-banner.webp" alt="Bioscoop banner Daniel en Leendert-Jan">
            </div>
        </div>
        <div class="row mx-0 mt-5">
            <div class="col-12 col-lg-6 ps-0 pe-0 pe-lg-3 mb-4 mb-lg-0">
                <div class="card">
                    <div class="d-flex align-items-center"><img src="@/assets/images/personalities-daniel.webp" alt="Daniel"></div>
                    <div class="ps-lg-3">
                        <strong>Daniel</strong>
                        <p class="mt-3">“Het is mijn doel om bedrijven in de amusementssector te helpen aan unieke, verrassende verpakkingen die ondertussen de afvalstroom verminderen.”</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 pe-0 ps-0 ps-lg-3">
                <div class="card">
                    <div class="d-flex align-items-center"><img src="@/assets/images/personalities-leendert-jan.webp" alt="Leendert-Jan"></div>
                    <div class="ps-lg-3">
                        <strong>Leendert-Jan</strong>
                        <p class="mt-3">"De aanstaande transitie van wegwerp- naar herbruikbare verpakkingen vergt creativiteit van organisaties. Het geeft mij voldoening om klanten te helpen met het realiseren van maatwerkoplossingen.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<style scoped>
img.banner {
    width: 100%;
}
strong {
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
}
p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
}
.card {
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    background: white;
    border: none;
    display: flex;
    flex-direction: row;
    padding: 40px 17px 40px 30px;
    height: 100%;
}
.card img {
    max-height: 118px;
    margin-right: 17px;
}
@media (min-width: 992px) {
    img.vector {
        position: absolute;
        z-index: -1;
        width: 253px;
        height: 280px;
        top: -10px;
        left: -215px;
    }
}

</style>