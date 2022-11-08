<template lang="html">
    <div class="route home">
        <div class="down-icon-container" @click="scrollToNextSection">
            <div class="down-icon">
                <font-awesome-icon class="scroll-down-icon" icon="fa-solid fa-chevron-down" />
            </div>
        </div>
        <section class="section section-1">
            <div class="section-1-bg"></div>

            <h1 class="home-main-header">Struggling with Dog Separation Anxiety?</h1>

            <div class="section-1-copy-container">
                <div class="copy-container home-copy-1-container">
                    <p class="home-copy-1">
                        Do you feel like you have tried absolutely everything to fix your dog's separation anxiety and
                        you're still coming home to a destroyed space, angry neighbors, and a panicked dog?
                        &nbsp;We get it, you're sad to see your pup suffering, you're at your wits end, and you don't
                        know how
                        else to help your dog.
                    </p>
                </div>


            </div>
        </section>
        <section class="section section-2">
            <div class="content-container">
                <div class="copy-container home-copy-2-container">
                    <h2 class="home-copy-2-header copy-header">There is Hope!</h2>
                    <p class="home-copy-2">
                        Our Certified Separation Anxiety Pro Trainers are here for you and can help even in the most
                        severe cases.
                    </p>
                    <p class="emphasis">We live & breathe separation anxiety. In fact, it's all we do!</p>
                </div>
            </div>
        </section>
        <section class="section section-3 why-us-section">
            <div class="col-xs-12 why-us-list-container">
                <div class="why-us-item">
                    <div class="why-us-item-icon-container">
                        <font-awesome-icon class="fa-4x" icon="fa-solid fa-dog" />
                    </div>
                    <h2 class="why-us-item-header">Customized training</h2>
                    <p class="why-us-item-text">
                        Every dog is an individual. Therefore, we craft custom, easy to follow, training plans each day
                        based on how your dog did the previous day. We take the guesswork out of training, giving you,
                        and your furry family member the best chance of resolution.
                    </p>
                </div>

                <div class="why-us-item">
                    <div class="why-us-item-icon-container">
                        <font-awesome-icon class="fa-4x" icon="fa-solid fa-laptop" />
                    </div>
                    <h2 class="why-us-item-header">100% Virtual</h2>
                    <p class="why-us-item-text">
                        Where you live should not be a barrier to expert help. Working virtually allows us to work with
                        pet owners no matter where they live, support each client up to 5 days a week and
                        allows us to see your dog's behavior in their typical environment.
                    </p>
                </div>

                <div class="why-us-item">
                    <div class="why-us-item-icon-container">
                        <font-awesome-icon class="fa-4x" icon="fa-solid fa-graduation-cap" />
                    </div>
                    <h2 class="why-us-item-header">1 on 1 Training</h2>
                    <p class="why-us-item-text">
                        Our trainers only take on a small number of cases so we can provide individualized support to
                        each one of our clients. You are not just a client to us. You and your dog are part of the
                        Healthy Mind Canine family! We love them too!
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

    h1,
    h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
    }

    .down-icon-container {
        position: fixed;
        bottom: 13px;
        width: 100%;
        justify-content: center;
        display: flex;
        z-index: 9999999;
        font-size: 20px;
        color: $primary-color;
        cursor: pointer;

        .down-icon {
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100px;

            &:hover {
                background: rgba(102, 102, 102, 0.1);
            }
        }
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

    .copy-container {
        width: 100%;
        max-width: 970px;
        height: auto;
        border-radius: 20px;
        padding: 30px 50px 30px 50px;
        backdrop-filter: blur(6px);
        background: rgba(246, 251, 255, 0.8);

        p {
            color: $secondary-text;
            line-height: 35px;
            font-size: 17px;
        }
    }

    .copy-header {
        margin-bottom: 20px;
    }

    .section-1-copy-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .section {
        width: 100%;
        height: 100%;
        scroll-snap-align: start;
    }

    .section-1 {
        z-index: 1;

        .home-main-header {
            text-align: center;
            width: 100%;
            position: absolute;
            top: 100px;
            font-size: 90px;
            text-shadow: 3px 3px 3px black;
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
        }

        .section-1-bg {
            position: fixed;
            top: $nav-height;
            left: 0;
            width: 100%;
            height: calc(100% - $nav-height - 60px);
            z-index: -1;
            @include bgimage;
            background-image: url('assets/woman-shaking-hands-with-dog.jpg');
            background-size: cover;
            pointer-events: none;
        }

        .home-copy-1-container {
            position: absolute;
            bottom: 120px;
            background-color: rgba(14, 34, 49, 0.9);

            p {
                color: #fff;
            }

            .home-copy-1-header {
                font-size: 36px;
            }

            .emphasis {
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bolder;
                font-size: 20px;
                margin-top: 10px;
            }
        }
    }

    .section-2 {
        .content-container {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .home-copy-2-container {
            bottom: 200px;
            right: -20px;
            position: absolute;

            .home-copy-2-header {
                font-size: 40px;
            }
        }
    }

    .section-3 {

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
                height: 410px;
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
