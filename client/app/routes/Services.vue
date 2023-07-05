<template lang="html">
    <div class="route services" ref="route-services">
        <div class="discovery-call-attention-container"
            :class="{ 'push-down': isDiscoveryCallShown, 'heartbeat': isDiscoveryCallBeating }" ref="discoveryCallPopup">
            <BigDiscoveryCallButton></BigDiscoveryCallButton>
        </div>
        <section class="section section-1">
            <div class="separation-anxiety-header-container">
                <h1 class="separation-anxiety-header">Separation Anxiety Training <br>That Works!</h1>
                <div class="separation-anxiety-learn-more-button-container">
                    <button @click="scrollTo('section-2')" class="btn btn-lg btn-primary" aria-label="Learn More">Learn
                        More</button>
                </div>
            </div>
        </section>
        <section ref="section-2" class="section section-2">
            <div class="separation-anxiety-info-container">
                <h1 class="separation-anxiety-info-header hidden-xs" id="what-is-separation-anxiety">What Is Separation
                    Anxiety?</h1>
                <h2 class="separation-anxiety-info-header visible-xs" id="what-is-separation-anxiety">What Is Separation
                    Anxiety?</h2>
                <p class="separation-anxiety-info-text">
                    Separation Anxiety is very similar to phobias in humans such as a fear of heights, spiders, or
                    germs. It is exactly what it sounds like, a phobia of being left alone. Dogs with separation anxiety
                    typically display panic induced behavior such as: pacing, panting, trembling, drooling, vocalizing,
                    accidents, and destroying items.
                    <br /><br />
                    If left untreated, these symptoms can increase in intensity, and become dangerous for the dog. Rest
                    assured your dog is not trying to spite you, they are truly panicking, and they need your help! That
                    is where we come in.
                </p>
            </div>
        </section>
        <section ref="section-3" class="section section-3">
            <div class="how-does-training-work-container">
                <div class="how-does-training-work-info-container">
                    <div class="how-does-training-work-header-container">
                        <h1 class="how-does-training-work-header hidden-xs">What Is Our Training Method?</h1>
                        <h2 class="how-does-training-work-header visible-xs">What Is Our Training Method?</h2>
                    </div>
                    <div class="how-does-training-work-text-container">
                        <p class="how-does-training-work-text">
                            Our method relies on systematic desensitization. Gradually your dog is exposed to small
                            periods of stress-free home alone time while increasing the duration at the dogs pace.
                            Slowly, your dog becomes more comfortable with longer stretches of time until they are able
                            to be home alone as needed.
                            <br /><br />
                            Studies support that this is not only the most humane treatment option but the only one that
                            offers lasting results. Although fairly straightforward, implementing a desensitization
                            training plan can be challenging for owners on their own without the guidance of a
                            separation anxiety specialist.
                            <br /><br />
                        </p>
                        <br />
                        <h2 class="virtual-training-header">Training is done 100% virtual</h2>
                        <p class="how-does-training-work-text">
                            This way we can see your dog's true behavior in their
                            normal environment. During training, it is absolutely essential that you do not leave your
                            dog alone unless it's part of that day's training homework. If a dog continues to experience
                            alone time filled with anxiety and stress, it is unlikely they will recover.
                            <br /><br />
                            We can achieve
                            this by temporarily utilizing daycares, pet sitters, family, friends, and neighbors.
                            Treating separation anxiety requires some short term pain for long term gain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section ref="section-4" class="section section-4 pricing" id="pricing">
            <div class="pricing-info-container">

                <div class="pricing-header-container">
                    <h1 class="pricing-header secondary-text">Separation Anxiety Training Services</h1>
                </div>
                <div class="package-disclaimer w-100 text-center">
                    <p><i>*Initial Consult is required before purchasing programs.</i></p>
                </div>
                <div class="pricing-panels-container">
                    <div class="col-xs-12 col-sm-4 pricing-panel-container">
                        <div class="pricing-panel">
                            <div class="col-xs-12 pricing-panel-header">
                                <h2>Initial Consultation and Assessment</h2>
                                <p class="pricing-panel-price">$200</p>
                            </div>
                            <div class="pricing-panel-details">
                                <ul>
                                    <li>90 minute private session</li>
                                    <li>Review of your dog's history and goals</li>
                                    <li>Assessment of your dog</li>
                                    <li>Overview of what training looks like</li>
                                    <li>Discuss tech set up</li>
                                    <li>A recording of your session</li>
                                    <li>Resources & handouts</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-4 pricing-panel-container program-panel">
                        <div class="pricing-panel">
                            <div class="col-xs-12 pricing-panel-header">
                                <h2>4 Week Program</h2>
                                <p class="pricing-panel-price"><strike>$800</strike> $600</p>
                                <p>Limited Time Offer!</p>
                            </div>
                            <div class="pricing-panel-details">
                                <ul>
                                    <li>4 weekly zoom check-ins</li>
                                    <li>5 individualized training plans for the pet parent to conduct each week</li>
                                    <li>Access to the SA Pro Trainer App</li>
                                    <li>Daily messaging support M - F</li>
                                    <li>Unlimited video review from your trainer</li>
                                    <li>As needed reports & communication with your vet.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-4 pricing-panel-container program-panel">
                        <div class="pricing-panel">
                            <div class="col-xs-12 pricing-panel-header">
                                <h2>8 Week Program</h2>
                                <p class="pricing-panel-price"><strike>$1,350</strike> $1,075</p>
                                <p>Limited Time Offer!</p>
                            </div>
                            <div class="pricing-panel-details">
                                <ul>
                                    <li>8 weekly zoom check-ins</li>
                                    <li>5 individualized training plans for the pet parent to conduct each week</li>
                                    <li>Access to the SA Pro Trainer App</li>
                                    <li>Daily messaging support M - F</li>
                                    <li>Unlimited video review from your trainer</li>
                                    <li>As needed reports & communication with your vet.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="more-services">
                    <div class="pricing-table">
                        <div class="dotted-table-row">
                            <p class="dotted-table-left">1 Hour as-needed Session</p>
                            <div class="dotted-table-line"></div>
                            <p class="dotted-table-right">$175</p>
                        </div>
                        <small class="pricing-submessage">*to supplement DIY programs</small>
                    </div>
                </div>
            </div>
        </section>
        <section ref="section-5" class="section section-5">
            <div class="what-do-i-need-container">
                <h1 class="what-do-i-need-header secondary-text hidden-xs">What You Will Need For Training</h1>
                <h2 class="what-do-i-need-header secondary-text visible-xs">What You Will Need For Training</h2>
                <div class="what-do-i-need-info col-sm-8 col-xs-12">
                    <div class="what-do-i-need-list">
                        <ul>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-wifi" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    High speed internet connection.
                                </div>
                            </li>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-laptop" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    A laptop or tablet for video chat.
                                </div>
                            </li>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-video" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    A Home Monitoring Camera <br />
                                    <span class="wzye-text">
                                        (we recommend the <a
                                            href="https://www.wyze.com/products/wyze-cam?related_selling_plan=41618559008930"
                                            target="_blank">
                                            Wyze
                                        </a> camera)
                                    </span>
                                </div>
                            </li>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-mobile" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    A smart phone to access our training app and your home cameras.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="what-do-i-need-image-container col-sm-4 col-xs-12 hidden-xs"></div>
                <div class="go-to-buttons">
                    <p class="call-to-action">Are you ready to go from <i>chaos</i> to calm?</p>
                    <button @click="goToContact()" class="btn btn-secondary btn-lg go-to-contact">Yes, I'm Ready!</button>
                    <p class="or">or</p>
                    <a href="https://calendly.com/healthymindcanine/discovery-call" target="_blank" role="button"
                        class="btn btn-primary btn-lg">Book a FREE Discovery Call</a>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
    <div class="scroll-down-container hidden-xs" @click="scrollToNextSection">
        <div class="col-xs-12" :class="{ 'bounce-top': bounceScrollDown }">
            <p>scroll down for more</p>
        </div>
        <div class="col-xs-12">
            <font-awesome-icon class="scroll-down-icon" icon="fa-solid fa-chevron-down" />
        </div>
    </div>
</template>
<script>
import Footer from "../components/Footer";
import BigDiscoveryCallButton from "../components/DiscoveryCallButton";
import { useMeta } from 'vue-meta';
const TEN_SECONDS_IN_MS = 10000;
const TWO_SECONDS_IN_MS = 2000;
const ONE_SECONDS_IN_MS = 1000;

export default {
    name: 'services',
    components: {
        Footer,
        BigDiscoveryCallButton
    },
    data() {
        return {
            bounceScrollDown: false,
            isDiscoveryCallShown: false,
            isDiscoveryCallBeating: false,
            scrollDistance: 0
        }
    },
    methods: {
        registerScrollEventListener: function () {
            let ticking = false;
            this.$refs['route-services'].addEventListener('scroll', event => {
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

            let lastSectionOffsetTop = this.$refs['section-5'].offsetTop;

            let distanceToLastSection = lastSectionOffsetTop - this.scrollDistance;

            if (distanceToLastSection < 100) {
                setTimeout(() => {
                    this.showDiscoveryCallPopup();
                }, TWO_SECONDS_IN_MS)
            }

            if (this.showDiscoveryCallOnStopScrollTimeout) {
                clearTimeout(this.showDiscoveryCallOnStopScrollTimeout);
            }

            this.showDiscoveryCallOnStopScrollTimeout = setTimeout(() => {
                this.showDiscoveryCallPopup();
            }, TEN_SECONDS_IN_MS);
        },
        scrollTo: function (refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            document.querySelector('.route').scrollTo(0, top);
        },
        runScrollDownAttentionAnimation: function () {
            this.bounceScrollDown = true;

            setTimeout(() => {
                this.bounceScrollDown = false;
            }, TWO_SECONDS_IN_MS);
        },
        scrollToNextSection: function () {
            var route = document.querySelector('.route');
            var scrollTop = route.scrollTop;
            var routeHeight = route.clientHeight;
            route.scrollTo(0, (scrollTop + routeHeight));
        },
        goToFaq: function () {
            this.$router.push('/faq');
        },
        goToPricing: function () {
            this.$router.push('/pricing');
        },
        goToContact: function () {
            this.$router.push('/contact')
        },
        showDiscoveryCallPopup() {
            this.isDiscoveryCallShown = true;
            setTimeout(() => {
                this.isDiscoveryCallBeating = true;
            }, ONE_SECONDS_IN_MS);

            setTimeout(() => {
                this.isDiscoveryCallBeating = false
            }, TWO_SECONDS_IN_MS)
        },
        hideDiscoveryCallPopup() {
            this.isDiscoveryCallShown = false;
            this.isDiscoveryCallBeating = false
        }
    },
    mounted() {
        this.registerScrollEventListener();

        if (location.hash.includes('what-is-separation-anxiety')) {
            this.scrollTo('section-2');
        }

        setTimeout(() => {
            this.runScrollDownAttentionAnimation();
        }, TWO_SECONDS_IN_MS);
    },
    setup() {
        useMeta({
            title: 'About Separation Anxiety | Healthy Mind Canine | Virtual Dog Training',
            description: 'Virtual separation anxiety dog training that actually works. No more noise complaints or household destruction. We take the guesswork out of training your dog. Learn more about our methods & how we can help you regain your freedom!'
        })
    },
    created() {
        setTimeout(() => {
            if (this.scrollDistance < 500) {
                this.showDiscoveryCallPopup();
            }
        }, TEN_SECONDS_IN_MS);
    }
};
</script>
<style lang="scss">
@import "@/scss/routes/services.scss";
</style>
