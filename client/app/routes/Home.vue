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
                        <br><br>
                        We get it, you're sad to see your pup suffering, you're at your wits end, and you don't
                        know how
                        else to help your dog.
                    </p>
                </div>
            </div>

            <div class="disovery-button-container" :class="{ 'heartbeat': isDiscoveryCallBeating }">
                <BigDiscoveryCallButton></BigDiscoveryCallButton>
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
        <section class="section section-4" ref="lastSection">
            <div class="sleepy-dog-image-container">
                <div class="sleepy-dog-image"></div>
            </div>
            <div class="imagine-peace-text-container">
                <p class="imagine-peace-text">
                    Imagine returning home to a dog peacefully lounging, free from barking, howling, or home destruction.
                    With a specialist's assistance, dogs with separation anxiety can learn to relax at home.
                </p>
            </div>
            <div class="continue-button-container">
                <button class="continue-button btn btn-lg btn-primary" @click="goToServices">View Training Programs</button>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../components/Footer";
import BigDiscoveryCallButton from '../components/DiscoveryCallButton.vue';
import { useMeta } from "vue-meta";
const TEN_SECONDS_IN_MS = 10000;
const TWO_SECONDS_IN_MS = 2000;
const ONE_SECONDS_IN_MS = 1000;

export default {
    name: 'Home',
    data() {
        return {
            scrollDistance: 0,
            isDiscoveryCallBeating: false
        }
    },
    components: {
        Footer,
        BigDiscoveryCallButton
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

            let lastSectionOffsetTop = this.$refs.lastSection.offsetTop;

            let distanceToLastSection = lastSectionOffsetTop - this.scrollDistance;

            if (distanceToLastSection < 100) {
                setTimeout(() => {
                    this.triggerDiscoveryCallButtonHeartBeat();
                }, TWO_SECONDS_IN_MS)
            }

            if (this.showDiscoveryCallOnStopScrollTimeout) {
                clearTimeout(this.showDiscoveryCallOnStopScrollTimeout);
            }

            this.showDiscoveryCallOnStopScrollTimeout = setTimeout(() => {
                this.triggerDiscoveryCallButtonHeartBeat();
            }, TEN_SECONDS_IN_MS);
        },
        scrollToNextSection: function () {
            var route = document.querySelector('.route');
            var scrollTop = route.scrollTop;
            var routeHeight = route.clientHeight;
            route.scrollTo(0, (scrollTop + routeHeight));
        },
        goToServices: function () {
            this.$router.push('/services')
        },
        triggerDiscoveryCallButtonHeartBeat() {
            setTimeout(() => {
                this.isDiscoveryCallBeating = true;
            }, ONE_SECONDS_IN_MS);

            setTimeout(() => {
                this.isDiscoveryCallBeating = false
            }, TWO_SECONDS_IN_MS)
        },
        hideDiscoveryCallPopup() {
            this.isDiscoveryCallBeating = false
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
    },
    created() {
        setTimeout(() => {
            if (this.scrollDistance < 500) {
                this.triggerDiscoveryCallButtonHeartBeat();
            }
        }, TEN_SECONDS_IN_MS)
    }
};
</script>
<style lang="scss">
@import "@/scss/routes/home.scss";
</style>
