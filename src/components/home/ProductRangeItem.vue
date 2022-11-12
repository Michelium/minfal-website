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
    <div class="card d-flex align-items-center">
        <div class="d-flex justify-content-between">
        <img :src="`src/assets/images/${image}`" alt="">
        </div>
        <div class="card-footer">
            <p class="card-title"> {{ title }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: #FFFFFF;
    border: none;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 0 8px;
    width: 100%;
    min-height: 300px;
    text-align: center;
}
p.card-title {
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
}
img {
    width: 150px;
}
</style>