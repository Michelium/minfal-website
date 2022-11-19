<script setup>
defineProps({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
})
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-column align-items-center text-center">
                <h2 class="mb-3 mb-lg-2">{{ title }}</h2>
                <div class="text">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 992px) {
    div.text {
        max-width: 75%;
    }
}
</style>