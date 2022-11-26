<template>
    <footer class="container-fluid">
        <p class="d-none d-lg-block">Minfal © 2022. All rights reserved. | Turfschipper 62, 2292 JB Wateringen</p>
        <p class="d-lg-none">Minfal © 2022. All rights reserved. <br>Turfschipper 62, 2292 JB Wateringen</p>
    </footer>
</template>

<style scoped>
.container-fluid {
    padding: 12px 10px;
    background-color: var(--secondary);
}
p {
    margin-bottom: 0;
    color: var(--white);
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
}
@media (min-width: 992px) {
    p {
        font-size: 16px;
    }
}
</style>