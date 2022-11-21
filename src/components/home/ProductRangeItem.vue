<script setup>
defineProps({
    title: {
        type: String,
    },
    image: {
        type: String,
    }
})
</script>

<template>
    <div class="card">
        <div class="card-body d-flex align-items-center">
            <img :src="`/src/assets/images/product-range-${image}`" :alt="title">
        </div>
        <div class="card-footer">
            <p class="card-title">{{ title }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: none;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    width: 100%;
    min-height: 320px;
}
.card-footer {
    background-color: var(--light-white);
    border-top: none;
}
p.card-title {
    font-size: 1.3rem;
    line-height: 30px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
}
img {
    width: 100%;
    min-width: 100px;
    padding: 15%;
}

@media (min-width: 992px) {
    .card {
        max-width: 210px;
    }
    img {
    padding: 5%;
    }
}
</style>