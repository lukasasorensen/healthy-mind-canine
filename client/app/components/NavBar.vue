<template lang="html">
    <div class="nav-bar nav-bar-buttons mobile col-xs-8" :class="{ open: isNavBarOpen }">
        <router-link @click="onNavigation" to="/separation-anxiety">Separation Anxiety</router-link>
        <router-link @click="onNavigation" to="/pricing">Pricing</router-link>
        <router-link @click="onNavigation" to="/faq">FAQ</router-link>
        <router-link @click="onNavigation" to="/resources">Resources</router-link>
        <router-link @click="onNavigation" to="/about">Meet the Trainer</router-link>
        <router-link @click="onNavigation" to="/contact">Contact</router-link>
    </div>
    <div class="nav-bar">
        <div class="nav-bar-inner row">
            <router-link to="/">
                <div class="nav-bar-logo col-sm-4 col-xs-8"></div>
            </router-link>
            <div class="nav-bar-buttons col-sm-8 hidden-xs">
                <div class="dropdown-container" :class="{ open: isSaDropdownOpen }" @mouseenter="isSaDropdownOpen = true" @mouseleave="isSaDropdownOpen = false">
                    <button class="separation-anxiety dropdown-button" @click="goToServices()">Separation Anxiety</button>
                    <div class="dropdown" ref="saDropdown" v-show="isSaDropdownOpen">
                        <router-link @click="onNavigation" to="/separation-anxiety">Separation Anxiety</router-link>
                        <router-link @click="onNavigation" to="/faq">FAQ</router-link>
                        <router-link @click="onNavigation" to="/resources">Resources</router-link>
                    </div>
                </div>
                <router-link @click="onNavigation" to="/pricing">Pricing</router-link>
                <router-link @click="onNavigation" to="/about">Meet the Trainer</router-link>
                <router-link @click="onNavigation" to="/contact">Contact</router-link>
            </div>
            <div class="navbar-toggle visible-xs">
                <button class="hamburger hamburger--squeeze" :class="{ 'is-active': isNavBarOpen }"
                    aria-label="Open Menu" @click="toggleNavBar" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isSaDropdownOpen: false,
            isNavBarOpen: false
        }
    },
    methods: {
        onNavigation: function () {
            this.closeNavBar();

            this.isSaDropdownOpen = false;
        },
        openNavBar: function () {
            this.isNavBarOpen = true;
        },
        closeNavBar: function () {
            this.isNavBarOpen = false;
        },
        toggleNavBar: function () {
            this.isNavBarOpen ? this.closeNavBar() : this.openNavBar();
        },
        goToServices: function() {
            this.$router.push('/services');
        }
    }
}
</script>
<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $nav-height;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 999999;

    a {
        text-decoration: none;
    }

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
        font-size: 18px;
        max-width: 740px;
        padding: 0;
        color: $primary-color;

        button {
            font-size: 18px;
            color: $primary-color;
            background: transparent;
            border: none;
            outline: none;

            &:hover {
                font-family: 'Satisfy', cursive;
                color: $secondary-color;
                font-size: 1.2em;
            }
        }

        a {
            color: $primary-color;
            text-decoration: none;

            &:hover {
                font-family: 'Satisfy', cursive;
                color: $secondary-color;
                font-size: 1.2em;
            }
        }

        &.mobile {
            display: none;
        }
    }
}

.dropdown-container {
    .dropdown-button {}

    .dropdown {
        margin-left: -10px;
        width: 220px;
        font-size: 18px;
        background: #fff;
        padding: 30px 25px 15px 25px;
        box-sizing: border-box;
        position: absolute;
        top: 50px;
        z-index: 9;
        border-radius: 5px;
        height: auto;

        a {
            float: left;
            clear: both;
            display: block;
            margin-bottom: 20px;
        }
    }

    &.open {
        height: 250px;
    }
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
        background: $secondary-color;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        padding: 20px 5px;
        height: 400px;
        top: -350px;
        z-index: 999997;
        overflow: hidden;
        transition: top 600ms ease-in-out, opacity 200ms ease-in-out;

        a {
            color: #fff;
            width: 100%;
            text-align: center;
            height: 25%;
            display: flex;
            justify-content: center;
            vertical-align: middle;
            flex-direction: column;

            &:active {
                background-color: $primary-color;
            }
        }

        &.open {
            top: 83px;
            opacity: 1;
        }
    }

    .navbar-toggle {
        position: absolute;
        top: 13px;
        right: 5px;

        .hamburger-box {
            .hamburger-inner {

                &:before,
                &:after {
                    background-color: $secondary-color;
                }

                background-color: $secondary-color;
            }
        }
    }
}
</style>