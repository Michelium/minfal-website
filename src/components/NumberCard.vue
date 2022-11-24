<script setup></script>

<template>
    <div class="container">
        <div class="card">
            <img class="vector" src="@/assets/vectors/six-squares.png" alt="vector">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <p class="card-title">10 mln</p>
                    <p class="card-text">Wegwerp- popcornbekers <wbr> vervangen is één van onze <wbr> doelen</p>
                </div>
                <div class="col-12 col-lg-4">
                    <p class="card-title">1 vs 100</p>
                    <p class="card-text">Elke popcornbeker kan meer dan <wbr> honderd wegwerpverpakkingen <wbr>besparen</p>
                </div>
                <div class="col-12 col-lg-4">
                    <p class="card-title">100.000</p>
                    <p class="card-text">bezoekers eindigen hun bezoek door ons niet bij de prullenbak <wbr></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.card {
    background-image: url("@/assets/images/number-card-background.png"), url("@/assets/vectors/six-squares.png");
    background-position: center, top right;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    background-color: var(--primary);
    padding: 38px 36px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-align: center;
}
p.card-title {
    font-size: 30px;
    line-height: 60px;
    font-weight: 700;
    color: var(--white);
}
p.card-text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--white);
}
img.vector {
    position: absolute;
    width: 53px;
    height: 53px;
    top: -18px;
    left: -7px;
}

@media (min-width: 992px) {
    div.card {
        padding: 38px 70px;
    }
    p.card-title {
        font-size: 30px;
    }
    p.card-text {
        font-size: 18px;
    }
    img.vector {
        width: 80px;
        height: 80px;
        top: -38px;
        left: -27px;
    }

}
</style>