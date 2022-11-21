<script setup>
import Logo from "./icons/Logo.vue";
import Hamburger from "./icons/Hamburger.vue";
import Close from "./icons/Close.vue";
import {RouterLink} from "vue-router";
import {ref} from "vue";

var menuToggle = ref(false);
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Fifth navbar example">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <Logo/>
            </a>
            <button @click="menuToggle  = !menuToggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="true" aria-label="Toggle navigation">
                <Hamburger v-if="!menuToggle" id="hamburger"/>
                <Close  v-if="menuToggle" id="close"/>
            </button>
            <div class="navbar-collapse collapse" id="navbar" style="">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="router-link active" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/over-ons">Over ons</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/popcornbeker">Popcornbeker</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/minfal-refill">Refill</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/minfal-circulair">Circulair</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/">Producten</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/about">
                            <button class="primary text-uppercase">Contact</button>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

/* Define the shape and color of the hamburger lines */
.navbar-toggler span {
    display: block;
    background-color: #4f4f4f;
    height: 3px;
    width: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    left: 0;
    opacity: 1;
    transition: all 0.35s ease-out;
    transform-origin: center left;
}


/* top line needs a little padding */
.navbar-toggler span:nth-child(1) {
    margin-top: 0.3em;
}

/**
 * Animate collapse into X.
 */

/* top line rotates 45 degrees clockwise and moves up and in a bit to close the center of the X in the center of the button */
.navbar-toggler:not(.collapsed) span:nth-child(1) {
    transform: translate(15%, -33%) rotate(45deg);
}
/* center line goes transparent */
.navbar-toggler:not(.collapsed) span:nth-child(2) {
    opacity: 0;
}
/* bottom line rotates 45 degrees counter clockwise, in, and down a bit to close the center of the X in the center of the button  */
.navbar-toggler:not(.collapsed) span:nth-child(3) {
    transform: translate(15%, 33%) rotate(-45deg) ;
}


/**
 * Animate collapse open into hamburger menu
 */

/* top line moves back to initial position and rotates back to 0 degrees */
.navbar-toggler span:nth-child(1) {
    transform: translate(0%, 0%) rotate(0deg) ;
}
/* middle line goes back to regular color and opacity */
.navbar-toggler span:nth-child(2) {
    opacity: 1;
}
/* bottom line goes back to initial position and rotates back to 0 degrees */
.navbar-toggler span:nth-child(3) {
    transform: translate(0%, 0%) rotate(0deg) ;
}



.container-fluid {
    padding: 0 10px;
}
@media (min-width: 1400px) {
    .container-fluid {
        padding: 0 180px;
    }
}
nav {
    background-color: var(--primary);
    border-bottom: 1px solid #ffffff33;
    display: flex;
}
nav button.navbar-toggler,
nav button.navbar-toggler:focus {
    border: none;
    box-shadow: none;
}
nav ul.navbar-nav {
    padding-top: 60px;
    height: calc(100vh - 115px);
    row-gap: 50px;
    align-items: center;
}
@media (min-width: 992px) {
    nav ul.navbar-nav {
        padding-top: unset;
        align-items: center;
        height: unset;
        width: 100%;
        column-gap: 10px;
        row-gap: 5px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
@media (min-width: 1400px) {
    nav ul.navbar-nav {
        width: 95%;
    }
}

.router-link {
    color: var(--white);
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
}
.router-link.router-link-exact-active {
    font-weight: 800;
}
</style>
