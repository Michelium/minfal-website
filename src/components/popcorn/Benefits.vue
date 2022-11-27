<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 background-image">
                <img class="d-lg-none mb-5" src="@/assets/images/benefits-popcorn.webp" alt="Oranje popcornbeker Minfal">
                <img class="d-none d-lg-block" src="@/assets/images/benefits-popcorn-desktop.webp" alt="Oranje popcornbeker Minfal">
            </div>
            <div class="col-12 col-lg-5 offset-lg-1G">
                <strong>Voordelen</strong>
                <div class="card mt-4">Herbruikbaar en 100% recyclebaar</div>
                <div class="card">Geproduceerd in Nederland</div>
                <div class="card">Vaatwasserbestendig</div>
                <div class="card">Alle kleuren mogelijk</div>
                <div class="card">Uw formaat, logo en huisstijl</div>
                <div class="card">Iconisch product</div>
                <div class="card">Past in meerdere verkoopmodellen</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.background-image {
    display: flex;
    justify-content: center;
    /*width: 100%;*/
    /*background-image: url("@/assets/images/benefits-popcorn-desktop.webp");*/
    /*background-size: cover;*/
    position: relative;
}
img {
    position: relative;
    padding: 0 10px;
    width: 100%;
    /*left: -100px;*/
}
strong {
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
}
div.card {
    background-color: white;
    border: none;
    box-shadow: 2px 0 30px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border-left: 5px solid var(--primary);
    padding: 17px 20px;
    margin-bottom: 18px;
    transition: .1s;
}
div.card:hover {
    background-color: var(--secondary);
    color: var(--white);
}

@media (min-width: 768px) {
    img {
        padding: 0 100px;
        width: 75%;
    }
}

@media (min-width: 992px) {
    strong {
        font-weight: 600;
        font-size: 32px;
        line-height: 47px;
    }
    div.background-image {
        flex-direction: column;
        align-items: center;
    }
    img {
        padding: unset;
        width: 88%;
        margin-right: 110px;
    }
    div.card {
        padding: 15px 35px;
        margin-bottom: 20px;
    }
}
</style>