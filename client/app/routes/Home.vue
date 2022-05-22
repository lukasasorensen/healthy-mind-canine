<template lang="html">
    <div class="route home">
        <section class="section section-1">
            <div class="home-logo-container">
                <div class="home-logo">
                </div>
                <h3 class="tag-line">Separation Anxiety Training</h3>
            </div>
            <div class="section-1-bg"></div>
        </section>
        <section class="section section-2">
            <p class="home-mission">
                Here at <strong>Healthy Mind Canine</strong>, our mission is to provide safe and humane treatment for dogs with separation anxiety. 
                We use the most effective training methods that are available for separation anxiety. We strive to promote a healthier mindset about being home alone for both dogs and their people. 
                Not to mention FREEDOM!
            </p>
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
            z-index: 1001;
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

        .section-1 {
            z-index: 1;
        }

        .section-1-bg {
            width: 100%;
            height: 100%;
            background: $primary-bg;
            position: absolute;
            z-index: 1000;
            top: 0;
            left: 0;
        }

        .section-2 {
            background: $secondary-bg;

            .home-mission {
                position: fixed;
                width: 100%;
                max-width: 650px;
                margin: auto;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                font-size: 20px;
                line-height: 50px;
                pointer-events: none;
                color: white;
            }
        }
    }
</style>