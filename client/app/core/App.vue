<template lang="html">
    <div class="app">
        <NavBar></NavBar>
        <div class="router-view-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
export default {
    name: 'App',
    components: {
        NavBar
    }
};
</script>
<style lang="scss">
@import '@/scss/_variables';
@import '@/scss/_mixins';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import '@/vendor/css/bootstrap.min.css';
@import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';

a,
p,
h1,
h2,
h3,
h4,
h5,
h6,
div,
header,
article,
section,
table,
input,
form {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
}

p,
a,
h1,
h2,
h3,
li {
    color: $primary-color;
}

.secondary-text {
    color: $secondary-color;
}

.primary-text {
    color: $primary-color;
}

p, li {
    font-size: 17px;
    line-height: 30px;
}

body {
    width: 100vw;
    height: 100vh;
    background: $primary-bg;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.text-center {
    text-align: center;
}

.w-100 {
    width: 100%;
}

.h-100 {
    height: 100%;
}

.router-view-container {
    width: 100vw;
    height: 100vh;
}

.section {
    height: calc(100vh - $nav-height);
    width: 100vw;
}

.route {
    width: 100%;
    height: calc(100% - $nav-height);
    position: absolute;
    top: $nav-height;
    left: 0;
    overflow: auto;
    scroll-behavior: smooth;
}

a {
    text-decoration: underline;
    color: $secondary-color;
}

.scroll-padding {
    width: 100%;
    height: 150px;        
}

.btn-secondary {
    background-color: $secondary-color;
    color: white;

    &:hover {
        color: white;
        background-color: darken($secondary-color, 10%);
    }
}
</style>
