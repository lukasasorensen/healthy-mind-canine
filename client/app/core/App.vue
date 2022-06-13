<template lang="html">
    <div class="app">
        <div class="nav-bar">
            <div class="nav-bar-inner row">
                <div class="nav-bar-logo col-xs-4"></div>
                <div class="nav-bar-buttons col-xs-8">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">Meet the Trainer</router-link>
                    <router-link to="/faq">FAQ</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
        </div>
        <div class="router-view-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App'
};
</script>
<style lang="scss">
@import '@/scss/_variables';
@import '@/scss/_mixins';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import '@/vendor/css/bootstrap.min.css';

$nav-height: 90px;

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
h3 {
    color: $primary-color;
}

p {
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

.router-view-container {
    width: 100vw;
    height: 100vh;
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

.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $nav-height;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 999999;

    .nav-bar-inner {
        width: 100%;
        height: 100%;
    }

    .nav-bar-logo {
        @include bgimage;
        background-image: url('assets/healthy-mind-canine-logo.png');
        height: 100%;
    }

    .nav-bar-buttons {
        margin: auto;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        max-width: 630px;
    }
}

a {
    text-decoration: none;
}
</style>
