<template lang="html">
    <div class="route home">
        <div class="home-logo-container" :style="{ 'opacity': homeLogoOpacity }">
            <div class="home-logo"></div>
            <h3 class="tag-line">Separation Anxiety Training</h3>
        </div>
        <div class="down-icon">
            <font-awesome-icon class="scroll-down-icon" icon="fa-solid fa-chevron-down" />
        </div>
        <section class="section section-1">
            <div class="section-1-bg"></div>
        </section>
        <section class="section section-2">
            <div class="home-mission">
                <!-- <h4>Our Mission</h4> -->
                <p class="home-mission-text">
                    <span>"</span>Your dog isn't giving you a hard time, they're <i>having</i> a hard time.
                    We are here to help you regain your freedom!<span>"</span>
                </p>
                <div class="home-learn-more-button-container">
                    <button @click="goToServices()" class="btn btn-lg btn-primary">Learn More</button>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
    name: 'Home',
    data() {
        return {
            scrollDistance: Number
        }
    },
    components: {
        Footer
    },
    methods: {
        registerScrollEventListener: function () {
            let ticking = false;
            document.querySelector('.route.home').addEventListener('scroll', event => {
                let lastKnownScrollPosition = event.target.scrollTop;

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.onScroll(lastKnownScrollPosition);
                        ticking = false;
                    });

                    ticking = true;
                }
            });
        },
        onScroll: function (scrollDistance) {
            this.scrollDistance = scrollDistance;
        },
        goToServices: function () {
            this.$router.push('/services#what-is-separation-anxiety')
        }
    },
    computed: {
        homeLogoOpacity() {
            if (!this.scrollDistance) return 1;
            return 0.8 - this.scrollDistance / window.innerHeight;
        }
    },
    mounted() {
        this.registerScrollEventListener();
    }
};
</script>
<style lang="scss">
@import '@/scss/_variables.scss';

.route {
    scroll-snap-type: y mandatory;
}

.home.route {
    .down-icon {
        position: absolute;
        bottom: 40px;
        width: 100%;
        justify-content: center;
        display: flex;
        z-index: 9999999;
        font-size: 20px;
        color: $primary-color;
    }

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
            height: 100px;
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
        scroll-snap-align: start;
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
        height: 150%;

        .home-mission {
            position: fixed;
            width: 100%;
            max-width: 850px;
            margin: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            font-size: 20px;
            pointer-events: none;
            padding: 20px;

            .home-mission-text {
                text-align: center;
                font-size: 1.5em;
                line-height: 2.2em;

                span {
                    font-size: 1.3em;
                }
            }

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

        .home-learn-more-button-container {
            margin-top: 80px;
            pointer-events: all;
            text-align: center;
        }
    }
}
</style>
