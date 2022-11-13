<script setup>
defineProps({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    textareaLabel: {
        type: String,
    }
})
</script>

<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 col-lg-4 d-flex flex-column">
                <h2>{{ title }}</h2>
                <p class="w-75">{{ text }}</p>
                <a href="https://www.linkedin.com/company/minfal-b-v/" target="_blank">
                    <img class="linked-button" src="@/assets/images/linkedin-button.png" alt="LinkedIn">
                </a>
                <img class="d-none d-lg-block left-vector" src="@/assets/images/contact-footer-vector.png" alt="">
            </div>
            <div class="col-12 col-lg-8">
                <form action="#">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <label for="name">Uw naam</label>
                            <input class="form-control" type="text" v-model="name" id="name">
                        </div>
                        <div class="col-12 col-lg-6">
                            <label for="company">Bedrijfsnaam</label>
                            <input class="form-control" type="text" v-model="company" id="company">
                        </div>
                        <div class="col-12 col-lg-6">
                            <label for="email">E-mail</label>
                            <input class="form-control" type="email" v-model="email" id="email">
                        </div>
                        <div class="col-12 col-lg-6">
                            <label for="phone">Telefoonnummer</label>
                            <input class="form-control" type="tel" v-model="phone" id="phone">
                        </div>
                        <div class="col-12">
                            <label for="message">Bericht</label>
                            <textarea class="form-control" rows="3" v-model="message" id="message" required></textarea>
                        </div>
                        <div class="col-12">
                            <button class="secondary" type="submit">Verstuur</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
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


img.linked-button {
    max-width: 45px;
}
img.left-vector {
    max-width: 100px;
    margin-top: 30px;
}
</style>