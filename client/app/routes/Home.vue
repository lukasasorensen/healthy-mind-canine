<template lang="html">
    <div class="route home">
        <section class="section section-1">
            <div class="home-logo-container">
                <div class="home-logo">
                </div>
                <h3 class="tag-line">Separation Anxiety Training</h3>
            </div>
        </section>
        <section class="section section-2">
        </section>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss">
    @import "@/scss/_variables.scss";

    .home.route {
        .home-logo-container {
            width: 100%;
            text-align: center;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
            .home-logo {
                margin: auto;
                width: 90%;
                height: 180px;
                max-width: 900px;
                background-image: url("assets/healthy-mind-canine-logo.png");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }

            .tag-line {
                color: $secondary-color;
                font-size: 24px;
            }
        }

        .section {
            width: 100%;
            height: 100%;
        }
    }
</style>