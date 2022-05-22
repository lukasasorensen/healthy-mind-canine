<template lang="html">
    <div class="app">
        <div class="nav-bar">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/faq">FAQ</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
<style lang="scss">
    .nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: white;
    }
</style>