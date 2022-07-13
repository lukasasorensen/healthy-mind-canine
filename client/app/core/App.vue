<template lang="html">
    <div class="app">
    <div class="nav-bar-buttons mobile col-xs-8" :class="{ open: isNavBarOpen }">
        <router-link @click="onNavigation" to="/">Home</router-link>
        <router-link @click="onNavigation" to="/separation-anxiety">Separation Anxiety</router-link>
        <router-link @click="onNavigation" to="/about">Meet the Trainer</router-link>
        <router-link @click="onNavigation" to="/contact">Contact</router-link>
    </div>
        <div class="nav-bar">
            <div class="nav-bar-inner row">
                <router-link to="/">
                    <div class="nav-bar-logo col-xs-4"></div>
                </router-link>
                <div class="nav-bar-buttons col-xs-8 hidden-xs">
                    <router-link @click="onNavigation" to="/">Home</router-link>
                    <router-link @click="onNavigation" to="/separation-anxiety">Separation Anxiety</router-link>
                    <router-link @click="onNavigation" to="/about">Meet the Trainer</router-link>
                    <router-link @click="onNavigation" to="/contact">Contact</router-link>
                </div>
                <div class="navbar-toggle visible-xs">
                    <button class="hamburger hamburger--squeeze" :class="{ 'is-active': isNavBarOpen }" @click="toggleNavBar" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
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
    name: 'App',
    data() {
        return {
            isNavBarOpen: false
        }
    },
    methods: {
        openNavBar: function() {
            this.isNavBarOpen = true;
        },
        closeNavBar: function() {
            this.isNavBarOpen = false;
        },
        toggleNavBar: function() {
            this.isNavBarOpen ? this.closeNavBar() : this.openNavBar();
        },
        onNavigation: function() {
            this.closeNavBar();
        }
    }
};
</script>
<style lang="scss">
@import '@/scss/_variables';
@import '@/scss/_mixins';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import '@/vendor/css/bootstrap.min.css';
@import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';

a,p,h1,h2,h3,h4,h5,h6,div,header,article,section,table,input,form {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
}

p,a,h1,h2,
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
        justify-content: space-between;
        font-size: 20px;
        max-width: 740px;
        padding: 0;

        &.mobile {
            display: none;
        }
    }
}

a {
    text-decoration: none;
}

@media(max-width: $screen-md) {
    .nav-bar-buttons.mobile {
        margin: auto;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        max-width: 630px;
        position: absolute;
        left: 0;
        width: 100%;
        height: 0;
        background: $secondary-bg;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        padding: 20px 5px;
        height: 300px;
        top: -350px;
        z-index: 999997;
        overflow: hidden;
        &.open {
            top: 83px;
            opacity: 1;
            transition: top 1s ease-in-out, opacity 500ms ease-in-out;
        }
    }

    .navbar-toggle {
        position: absolute;
        top: 13px;
        right: 5px;

        .hamburger-box {
            .hamburger-inner {
                &:before, &:after {
                    background-color: $secondary-color;
                }
                background-color: $secondary-color;
            }
        }
    }
}
</style>
