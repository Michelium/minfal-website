<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1">
                <div class="card-wrapper first">
                    <img class="vector" src="@/assets/vectors/six-squares.webp" alt="vector">
                    <img src="@/assets/images/product-range-basic.webp" alt="Basic popcornbeker">
                    <div class="card">
                        <h2>Basic</h2>
                        <p>onbedrukt, alleen gravure aan 1 zijde</p>
                    </div>
                </div>
                <div class="card-wrapper second">
                    <img class="vector" src="@/assets/vectors/six-squares.webp" alt="vector">
                    <img src="@/assets/images/product-range-plus.webp" alt="Plus popcornbeker">
                    <div class="card">
                        <h2>Plus</h2>
                        <p>1-4 zijden full color bedrukt met artwork (zoals logo)</p>
                    </div>
                </div>
                <div class="card-wrapper third">
                    <img class="vector" src="@/assets/vectors/six-squares.webp" alt="vector">
                    <img src="@/assets/images/product-range-pro.webp" alt="Pro popcornbeker">
                    <div class="card">
                        <h2>Pro</h2>
                        <p>4 zijden bedrukt, full color (ook foto’s mogelijk)</p>
                        <p>Maximale marketingmogelijkheden</p>
                        <p>Verschillende bedrukkingen/artworks per zijde mogelijk</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.card-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 240px;
}
div.card-wrapper img {
    position: absolute;
    z-index: 3;
    max-height: 240px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: -170px;
}
div.card-wrapper img.vector {
    z-index: 1;
    top: -40px;
    left: 16px;
    margin: unset;
    width: 80px;
    height: 80px;
}
div.card-wrapper div.card {
    z-index: 2;
    text-align: center;
    border: none;
    background: white;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    position: relative;
    padding: 80px 34px 34px 34px;
}

div.card-wrapper.third {
    margin-bottom: 0;
}


@media (min-width: 992px) {
    div.card-wrapper img {
        max-height: 420px;
        left: unset;
        right: 0;
        top: -50%;
    }
    div.card-wrapper img.vector {
        left: -40px;
    }
    div.card-wrapper div.card {
        padding: 42px 40px;
        margin-bottom: 300px;
        width: 90%;
        text-align: start;
    }
    
    div.card-wrapper.second img {
        right: unset;
        left: 0;
    }
    div.card-wrapper.second img.vector {
        right: -40px;
        left: unset;
    }
    div.card-wrapper.second div.card {
        margin-left: 10%;
        padding-left: 35%;
    }
    
    div.card-wrapper.third div.card {
        margin-bottom: 0;
    }
    div.card-wrapper.third img {
        top: -16%;
    }
}

@media (min-width: 1400px) {
    div.card-wrapper.second div.card {
        padding-left: 30%;
    }
}
</style>