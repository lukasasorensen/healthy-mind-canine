<template lang="html">
    <div class="route home">
        <div class="down-icon" @click="scrollToNextSection" :style="{ 'opacity': homeLogoOpacity }">
            <font-awesome-icon class="scroll-down-icon" icon="fa-solid fa-chevron-down" />
        </div>
        <section class="section section-1">
            <div class="section-1-bg"></div>
            <div class="scrolling-copy-container">
                <div class="copy-container home-copy-1-container">
                    <h2 class="home-copy-1-header copy-header">There is Hope!</h2>
                    <p class="home-copy-1">
                        Do you feel like you have tried absolutely everything to fix your dog's separation anxiety and
                        you're still coming home to a destroyed space, angry neighbors, and a panicked dog?
                        &nbsp;&nbsp;We get it, you're at your wits end, you're sad to see your pup suffering, and you
                        don't know how
                        else to help your dog.
                    </p>
                </div>

                <div class="copy-container home-copy-2-container">
                    <h2 class="home-copy-2-header copy-header">Certified Pro Trainers</h2>
                    <p class="home-copy-2">
                        Our Certified Separation Anxiety Pro Trainers are here for you and can help even in the most
                        severe cases, no matter where you live.
                    </p>
                    <p class="emphasis">We live and breathe separation anxiety. In fact, it's all we do!</p>
                </div>
            </div>
        </section>
        <section class="section section-2 why-us-section">
            <div class="col-xs-12 why-us-list-container">
                <div class="why-us-item">
                    <div class="why-us-item-icon-container">
                        <font-awesome-icon class="fa-4x" icon="fa-solid fa-dog" />
                    </div>
                    <h2 class="why-us-item-header">Custom Training Plans</h2>
                    <p class="why-us-item-text">
                        We craft custom, easy to follow, training plans each day based on how your dog did the previous
                        day. We take the guesswork out of training, giving you, and your furry family member the best
                        chance of resolution.
                    </p>
                </div>

                <div class="why-us-item">
                    <div class="why-us-item-icon-container">
                        <font-awesome-icon class="fa-4x" icon="fa-solid fa-laptop" />
                    </div>
                    <h2 class="why-us-item-header">Remote Training</h2>
                    <p class="why-us-item-text">
                        Remote training allows trainers to see your dog in its natural environment and work with
                        each client up to 5 days a week.
                    </p>
                </div>

                <div class="why-us-item">
                    <div class="why-us-item-icon-container">
                        <font-awesome-icon class="fa-4x" icon="fa-solid fa-graduation-cap" />
                    </div>
                    <h2 class="why-us-item-header">1 on 1 Training</h2>
                    <p class="why-us-item-text">
                        Our trainers only take on a small number of cases so we can provide intensive individualized
                        support to each one of our clients. You are not just a client to us. You are part of the Healthy
                        Mind Canine family!
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../components/Footer";
import { useMeta } from "vue-meta";

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
        scrollToNextSection: function () {
            var route = document.querySelector('.route');
            var scrollTop = route.scrollTop;
            var routeHeight = route.clientHeight;
            route.scrollTo(0, (scrollTop + routeHeight));
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
    },
    setup() {
        useMeta({
            title: 'Healthy Mind Canine | Separation Anxiety Dog Training',
            description: 'Our certified dog separation anxiety experts provide custom coaching & training for pets and their guardians no matter where they live. We use the most effective methods available to give you the best chance of success!'
        })
    }
};
</script>
<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins';

.route {
    scroll-snap-type: y mandatory;
}

.home.route {
    .down-icon {
        position: fixed;
        bottom: 40px;
        width: 100%;
        justify-content: center;
        display: flex;
        z-index: 9999999;
        font-size: 20px;
        color: $primary-color;
        cursor: pointer;
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

        .service-area-tag-line {
            color: $secondary-color;
            font-style: oblique;
            font-size: 20px;
            margin-top: 7%;
        }
    }

    .section {
        width: 100%;
        height: 100%;
        scroll-snap-align: start;
    }

    .section-1 {
        z-index: 1;

        .section-1-bg {
            position: fixed;
            top: $nav-height;
            left: 0;
            width: 100%;
            height: calc(100% - $nav-height);
            z-index: -1;
            @include bgimage;
            background-image: url('assets/woman-shaking-hands-with-dog.jpg');
            background-size: cover;
            pointer-events: none;
        }

        .scrolling-copy-container {
            width: 100%;
            height: 100%;
            padding-top: 50px;

            .copy-container {
                width: 80%;
                height: auto;
                border-radius: 20px;
                padding: 30px 50px 30px 50px;
                position: absolute;
                backdrop-filter: blur(6px);
                background: rgba(246, 251, 255, 0.8);

                p {
                    color: $secondary-color;
                    line-height: 35px;
                    font-size: 17px;
                }
            }

            .copy-header {
                font-size: 40px;
                margin-bottom: 20px;
            }

            .home-copy-1-container {
                left: -20px;
                top: 50px;

                p {
                    color: black;
                }
            }

            .home-copy-2-container {
                right: -20px;
                bottom: 80px;
                background-color: rgba(14, 34, 49, 0.8);

                .home-copy-2-header {
                    font-size: 24px;
                }

                .emphasis {
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: bolder;
                    font-size: 20px;
                    margin-top: 10px;
                }
            }
        }
    }

    .section-2 {

        .why-us-list-container {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 50px 30px;

            .why-us-item {
                opacity: 0.95;
                padding: 20px;
                border-radius: 15px;
                width: 30%;
                height: 100%;
                max-height: 60%;
                background-color: $primary-bg;
                color: $secondary-text;
                font-size: 14px;
                align-self: center;

                .why-us-item-header {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .why-us-item-text {
                    color: $secondary-text;
                }

                .why-us-item-icon-container {
                    margin-bottom: 20px;
                }

                .why-us-item-icon-container,
                .why-us-item-text,
                .why-us-item-header {
                    text-align: center;
                }
            }
        }
    }

    @media (max-width: $screen-md) {
        .home-logo-container {

            .home-logo {
                height: 69px;
            }

            .tag-line {
                font-size: 18px;
            }

            .service-area-tag-line {
                margin-top: 13%;
            }
        }
    }
}
</style>
