<script setup>
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
</script>

<template>
    <form action="#">
        <div class="row">
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="name">Uw naam</label>
                <input class="form-control" type="text" v-model="name" id="name">
            </div>
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="company">Bedrijfsnaam</label>
                <input class="form-control" type="text" v-model="company" id="company">
            </div>
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="email">E-mail</label>
                <input class="form-control" type="email" v-model="email" id="email">
            </div>
            <div class="col-12 col-lg-6" :class="[fullColls ? 'col-lg-12' : '']">
                <label for="phone">Telefoonnummer</label>
                <input class="form-control" type="tel" v-model="phone" id="phone">
            </div>
            <div class="col-12">
                <label for="message">{{ textareaLabel }}</label>
                <textarea class="form-control" rows="3" v-model="message" id="message" required></textarea>
            </div>
            <div class="col-12">
                <button class="secondary" type="submit">Verstuur</button>
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