<script setup>
</script>

<template>
    <div class="container-fluid d-flex flex-column align-items-center">
        <h1>Wij ontwikkelen herbruikbare verpakkingen en circulaire
            <wbr>
            systemen voor bioscopen, theaters en meer...
        </h1>
        <button class="secondary">Meer</button>
        <div class="card">
                        <img src="@/assets/images/home-hero-main-image.png" alt="">
        </div>
    </div>
    <div class="background-image">
        <svg class="d-none d-lg-block" preserveAspectRatio="none" viewBox="0 0 1920 788" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M593.199 649.593C310.389 463.752 79.8955 572.159 0 649.593V0H1920V649.593C1599.08 494.322 1537.4 519.796 1285.68 649.593C1033.96 779.39 946.712 881.894 593.199 649.593Z" fill="#436041"/>
        </svg>
        <svg class="d-lg-none" width="390" height="263" viewBox="0 0 390 263" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-48.7697 171.139C-236.721 47.7951 -389.903 119.745 -443 171.139V0H833V171.139C619.722 68.084 578.733 84.9913 411.443 171.139C244.154 257.286 186.169 325.318 -48.7697 171.139Z" fill="#436041"/>
        </svg>
    </div>
</template>

<style scoped>
.container-fluid {
    padding: 0 180px;
}
h1 {
    max-width: 1280px;
    text-align: center;
    margin-top: 60px;
}
button {
    margin-top: 35px;
}

.card {
    margin-top: 64px;
    max-width: 750px;
    border: none;
    border-radius: 30px;
    border-bottom: 7px solid var(--primary);
}
.card img {
    /*position: relative;*/
    margin: 60px 113px;
}

.background-image {
    position: absolute;
    z-index: -1;
    top: -10vh;
}
.background-image svg {
    width: calc(100vw);
}
@media (min-width: 992px) {
    .background-image {
        top: -5vh;
    }
    .background-image svg {
        width: calc(100vw - 15px);
    }
}
</style>