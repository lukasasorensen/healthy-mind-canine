<template lang="html">
    <div class="route pricing">
        <section class="section section-1 pricing">
            <div class="pricing-info-container">
                <div class="pricing-header-container">
                    <h1 class="pricing-header secondary-text">Pricing</h1>
                </div>
                <div class="package-disclaimer w-100 text-center">
                    <p>Initial Consult is required before purchasing packages.</p>
                </div>

                <div class="col-xs-12 col-md-4 pricing-panel">
                    <div class="col-xs-12 pricing-panel-header">
                        <h2>Initial Consultation and Assessment</h2>
                        <p class="pricing-panel-price">$175</p>
                    </div>
                    <div class="pricing-panel-details">
                        <ul>
                            <li>90 minute private session</li>
                            <li>Review of your dogs history and goals</li>
                            <li>Assessment of your dog</li>
                            <li>Overview of what training will look like</li>
                            <li>Discuss tech set up</li>
                            <li>A recording of your session</li>
                            <li>Resources & handouts</li>
                        </ul>
                    </div>
                </div>

                <div class="col-xs-12 col-md-4 pricing-panel">
                    <div class="col-xs-12 pricing-panel-header">
                        <h2>4 Week Package</h2>
                        <p class="pricing-panel-price">$800</p>
                    </div>
                    <div class="pricing-panel-details">
                        <ul>
                            <li>4 weekly zoom check-ins (1 per week)</li>
                            <li>5 individualized training plans for the pet parent to conduct each week (20 total) based
                                on how your dog did the previous day</li>
                            <li>Access to the SA Pro Trainer app to track your progress and communicate with your
                                trainer</li>
                            <li>Daily messaging support Monday - Friday</li>
                            <li>Unlimited video review from your trainer</li>
                        </ul>
                    </div>
                </div>

                <div class="col-xs-12 col-md-4 pricing-panel">
                    <div class="col-xs-12 pricing-panel-header">
                        <h2>8 Week Package</h2>
                        <p class="pricing-panel-price">$1,350 (save $250!)</p>
                    </div>
                    <div class="pricing-panel-details">
                        <ul>
                            <li>8 weekly zoom check-ins (1 per week)</li>
                            <li>5 individualized training plans for the pet parent to conduct each week (40 total) based
                                on how your dog did the previous day</li>
                            <li>Access to the SA Pro Trainer app to track your progress and communicate with your
                                trainer</li>
                            <li>Daily messaging support Monday - Friday</li>
                            <li>Unlimited video review from your trainer</li>
                        </ul>
                    </div>
                </div>

                <div class="scroll-padding"></div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import { useMeta } from 'vue-meta';

export default {
    name: 'PricingAndFAQ',
    components: {
        Footer
    },
    setup() {
        useMeta({
            title: 'Pricing | Healthy Mind Canine | Separation Anxiety Programs',
            description: 'Learn more about our expert separation anxiety dog training packages and pricing. Get custom coaching, training, & support for you and your dog today!'
        })
    }
}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
@import "../scss/animations";

.route.pricing {
    scroll-snap-type: none;

    .section {
        scroll-snap-align: start;
        height: auto;
        min-height: 100%;
    }

    .pricing-detail {
        color: $secondary-color;
    }

    .pricing-panel {
        .pricing-panel-header {
            h2 {}

            .pricing-panel-price {}
        }

        .pricing-panel-details {
            ul {
                li {}
            }
        }
    }

    .section-1 {
        display: flex;
        justify-content: center;

        .pricing-info-container {
            width: 100%;
            max-width: 825px;
            padding: 20px;
            overflow: auto;

            .pricing-header-container {
                width: 100%;
                text-align: center;
                margin-bottom: 25px;
                margin-top: 25px;
            }

            .package-disclaimer {
                margin-bottom: 20px;

                p {
                    font-size: 15px;
                }
            }


        }
    }
}
</style>