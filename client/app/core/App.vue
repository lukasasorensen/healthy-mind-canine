<template lang="html">
    <div class="app">
        <div class="nav-bar">
            <div class="nav-bar-buttons">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/faq">FAQ</router-link>
                <router-link to="/contact">Contact</router-link>
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
}
</script>
<style lang="scss">
    @import "@/scss/_variables";
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    $nav-height: 90px;

    a,p,h1,h2,h3,h4,h5,h6,div,header,article,section,table,input,form {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
    }

    p, a, h1, h2, h3 {
        color: $primary-color;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: $primary-bg;
        overflow: hidden;
    }

    .router-view-container {
        width: 100vw;
        height: 100vh;
    }

    .route {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
    }

    .nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: $nav-height;
        padding: 30px;
        box-sizing: border-box;
        background-color: $primary-bg;

        .nav-bar-buttons {
            margin: auto;
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 800px;
            font-size: 20px;
        }
    }

    a {
        text-decoration: none;

    }
</style>