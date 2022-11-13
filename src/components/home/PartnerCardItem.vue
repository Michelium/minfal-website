<script setup>
defineProps({
    title: {
        type: String,
    },
    text: {
        type: String,
    }
})
</script>

<template>
    <div class="card-item">
        <p class="card-title">{{ title }}</p>
        <p class="card-text">{{ text }}</p>
    </div>
</template>

<style scoped>
div.card-item {
    background-image: url("@/assets/images/partner-card-item-background.png");
    background-position: right 20px top 20px;
    background-size: 22px;
    background-repeat: no-repeat;
    background-color: var(--white);
    width: 100%;
    padding: 30px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
}
p.card-title {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: var(--black);
}
p.card-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
}
button {
    margin-top: 87px;
}
</style>