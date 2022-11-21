<script setup>
import ContactForm from "../components/ContactForm.vue";

defineProps({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    textareaLabel: {
        type: String,
        default: 'Bericht',
    }
})
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                <h2>{{ title }}</h2>
                <p class="w-75">{{ text }}</p>
                <a href="https://www.linkedin.com/company/minfal-b-v/" target="_blank">
                    <img class="linked-button" src="@/assets/images/linkedin-button.png" alt="LinkedIn">
                </a>
                <img class="d-none d-lg-block left-vector" src="@/assets/images/contact-footer-vector.png" alt="">
            </div>
            <div class="col-12 col-lg-8">
                <ContactForm :textarea-label="textareaLabel" />
            </div>
        </div>
    </div>
</template>

<style scoped>
img.linked-button {
    max-width: 45px;
}
img.left-vector {
    max-width: 100px;
    margin-top: 30px;
}
</style>