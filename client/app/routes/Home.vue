<template lang="html">
    <div class="route home">
        <div class="home-logo-container" :style="{'opacity': homeLogoOpacity }">
            <div class="home-logo"></div>
            <h3 class="tag-line">Separation Anxiety Training</h3>
        </div>
        <section class="section section-1">
            <div class="section-1-bg"></div>
        </section>
        <section class="section section-2">
            <div class="home-mission">
                <h4>Our Mission</h4>
                <p>
                    To provide safe and humane treatment for dogs with separation anxiety. We use the most effective
                    training methods that are available for separation anxiety. We strive to promote a healthier mindset
                    about being home alone for both dogs and their people. Not to mention FREEDOM!
                </p>
            </div>
        </section>
    </div>
</template>
<script>
import debounce from 'lodash/debounce';
export default {
    name: 'Home',
    data() {
        return {
            scrollPercent: Number
        }
    },
    methods: {
        registerScrollEventListener: function () {
            let ticking = false;
            document.querySelector('.route.home').addEventListener('scroll', event => {
                let lastKnownScrollPosition = event.target.scrollTop;
                let scrollPercent = lastKnownScrollPosition / event.target.clientHeight;

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.onScroll(scrollPercent);
                        ticking = false;
                    });

                    ticking = true;
                }
            });
        },
        onScroll: function (scrollPercent) {
            this.scrollPercent = scrollPercent;
            console.log(this.homeLogoOpacity);
        }
    },
    computed: {
        homeLogoOpacity() {
            if (!this.scrollPercent) return 1;
            return 1 - this.scrollPercent;
        }
    },
    mounted() {
        this.registerScrollEventListener();
    }
};
</script>
<style lang="scss">
@import '@/scss/_variables.scss';

.home.route {
    .home-logo-container {
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        position: fixed;
        pointer-events: none;
        z-index: 1001;
        .home-logo {
            margin: auto;
            width: 90%;
            height: 180px;
            max-width: 900px;
            background-image: url('assets/healthy-mind-canine-logo.png');
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
            pointer-events: none;

            h4 {
                color: $primary-color;
                font-size: 35px;
                margin-bottom: 15px;
            }

            p {
                color: white;
                line-height: 50px;
            }
        }
    }
}
</style>
