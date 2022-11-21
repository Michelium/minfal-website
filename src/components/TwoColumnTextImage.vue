<script setup>
defineProps({
    image: {
        type: String,
    },
    imageLabel: {
        type: String,
    },
    imageFirst: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <div class="container">
        <div class="row" v-if="imageFirst === false">
            <div class="col-12 col-lg-5 pe-lg-5 order-last order-lg-first">
                <slot></slot>
            </div>
            <div class="col-12 col-lg-7 text-center order-first order-lg-last mb-4 mb-lg-0">
                <img :src="image" :alt="imageLabel"/>
                <strong>{{ imageLabel }}</strong>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 col-lg-7 text-center">
                <img :src="image" :alt="imageLabel"/>
                <strong>{{ imageLabel }}</strong>
            </div>
            <div class="col-12 col-lg-5 ps-lg-5 order-last">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 14px;
}
strong {
    margin-top: 14px;
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
}
</style>