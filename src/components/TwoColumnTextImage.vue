<script setup>
import {computed} from "vue";

const props = defineProps({
    image: {
        type: String,
    },
    imageLabel: {
        type: String,
    },
    imageFirst: {
        type: Boolean,
        default: false,
    },
    imageBigger: {
        type: Boolean,
        default: true,
    }
})

const imagePath = computed(() => {
    return new URL(`/src/assets/images/${props.image}`,
        import.meta.url).href
});

</script>

<template>
    <div class="container">
        <div class="row" v-if="imageFirst === false">
            <div class="col-12 pe-lg-5 order-last order-lg-first" :class="[imageBigger ? 'col-lg-5' : 'col-lg-6']">
                <slot></slot>
            </div>
            <div class="col-12 text-center order-first order-lg-last mb-4 mb-lg-0" :class="[imageBigger ? 'col-lg-7' : 'col-lg-5']">
                <img :src="imagePath" :alt="imageLabel"/>
                <strong>{{ imageLabel }}</strong>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 text-center d-flex justify-content-center flex-column" :class="[imageBigger ? 'col-lg-7' : 'col-lg-6']">
                <img :src="imagePath" :alt="imageLabel"/>
                <strong>{{ imageLabel }}</strong>
            </div>
            <div class="col-12 ps-lg-5 order-last" :class="[imageBigger ? 'col-lg-5' : 'col-lg-6']">
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