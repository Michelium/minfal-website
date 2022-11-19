<script setup></script>

<template>
    <div class="container">
        <div class="row mx-0">
            <div class="col-12 text-center px-0">
                <img class="banner" src="@/assets/images/about-cinema-banner.jpg" alt="Bioscoop banner Daniel en Leendert-Jan">
            </div>
        </div>
        <div class="row mx-0 mt-5">
            <div class="col-12 col-lg-6 ps-0 pe-0 pe-lg-3 mb-4 mb-lg-0">
                <div class="card">
                    <div><img src="@/assets/images/personalities-daniel.png" alt="Daniel"></div>
                    <div>
                        <strong>Daniel</strong>
                        <p class="mt-3">Een stukje tekst over de beste webdeveloper in de wereld en omstreken</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 pe-0 ps-0 ps-lg-3">
                <div class="card">
                    <div><img src="@/assets/images/personalities-leendert-jan.png" alt="Leendert-Jan"></div>
                    <div>
                        <strong>Leendert-Jan</strong>
                        <p class="mt-3">Een stukje tekst over de beste webdeveloper in de wereld en omstreken</p>
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
    align-items: center;
    padding: 40px 17px 40px 30px;
}
.card img {
    max-height: 118px;
    margin-right: 17px;
}
</style>