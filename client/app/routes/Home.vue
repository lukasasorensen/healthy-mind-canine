<template lang="html">
    <div class="route home">
        <div class="home-logo-container">
            <div class="home-logo">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss">
    .home.route {
        .home-logo-container {
            width: 100%;
            height: 100%;
            .home-logo {
                background-image: url("assets/healthy-mind-canine-logo-w-tagline.png");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
</style>