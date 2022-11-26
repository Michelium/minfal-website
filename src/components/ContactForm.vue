<template>
    <form action="" @submit.prevent="sendEmail">
        <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
            <p class="text-dark">Uw bericht is verstuurd! We komen zo spoedig mogelijk bij u terug!</p>
        </div>
        <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
            <p class="text-dark">Er is iets misgegaan met het versturen. Probeer het later opnieuw of stuur een e-mail!</p>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="name">Uw naam</label>
                <input class="form-control" type="text" v-model="name" id="name" name="name" required>
            </div>
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="company">Bedrijfsnaam</label>
                <input class="form-control" type="text" v-model="company" name="company" id="company">
            </div>
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="email">E-mail</label>
                <input class="form-control" type="email" v-model="email" name="email" id="email" required>
            </div>
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="phone">Telefoonnummer</label>
                <input class="form-control" type="tel" v-model="phone" name="phone" id="phone">
            </div>
            <div class="col-12">
                <label for="message">{{ textareaLabel }}</label>
                <textarea class="form-control" rows="3" v-model="message" name="message" id="message" required></textarea>
            </div>
            <div class="col-12">
                <button :disabled="!loaded" class="secondary" type="submit">Verstuur</button>
            </div>
        </div>
    </form>
</template>

<style scoped>
form label {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 800;
    line-height: 26px;
}
form input, form textarea {
    background-color: var(--light-white);
    border: 1px solid var(--secondary);
    border-radius: 4px;
    height: 55px;
    font-size: 18px;
}
form textarea {
    height: unset;
}
form button {
    margin-top: 40px;
}
</style>

<script setup>
import emailjs from 'emailjs-com';
import {ref} from "vue";

defineProps({
    textareaLabel: {
        type: String,
        default: 'Bericht',
    },
    fullColls: {
        type: Boolean,
        default: false,
    }
})

let success = ref(false);
let loaded = ref(true);
let error = ref(false);

let name = ref('');
let company = ref('');
let email = ref('');
let phone = ref('');
let message = ref('');

function sendEmail(e) {
    if (loaded) {
        loaded.value = false;
        success.value = false;
        emailjs.sendForm('service_jgsniw7', 'template_bjcrtfm', e.target, 'user_UDbcG4RfnxXHwOYkfG6t6')
            .then((result) => {
                console.debug('SUCCESS!', result.status, result.text);
                name.value = '';
                email.value = '';
                company.value = '';
                phone.value = '';
                message.value = '';
                loaded.value = true;
                success.value = true;
                error.value = false;
            }, (err) => {
                loaded.value = true;
                success.value = false;
                error.value = true;
                console.error('FAILED...', err);
            });
    }
}
</script>