<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="@/assets/images/products-basic.webp" alt="rijtje met Basic popcornbekers">
                    <div class="card-footer"><p>Basic</p></div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="@/assets/images/products-plus.webp" alt="rijtje met Plus popcornbekers">
                    <div class="card-footer"><p>Plus</p></div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src="@/assets/images/products-pro.webp" alt="rijtje met Pro popcornbekers">
                    <div class="card-footer"><p>Pro</p></div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 d-flex justify-content-center">
                <button class="secondary">Naar popcornbekers</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.card {
    background: white;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: none;
}
div.card img {
    padding: 35px;
}
div.card .card-footer {
    border: none;
    text-align: center;
}
div.card .card-footer p {
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    padding: 11px 0;
    margin-bottom: 0;
}
</style>