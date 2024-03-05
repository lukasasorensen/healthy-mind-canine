<template lang="html">
    <div class="route pricing">
        <section class="section section-1 pricing">
            <div class="pricing-info-container">

                <div class="pricing-header-container">
                    <h1 class="pricing-header secondary-text">Pricing</h1>
                </div>
                <div class="package-disclaimer w-100 text-center">
                    <p><i>*Initial Consult is required before purchasing programs.</i></p>
                </div>
                <div class="pricing-panels-container">
                    <div class="col-xs-12 col-sm-4 pricing-panel-container">
                        <div class="pricing-panel">
                            <div class="col-xs-12 pricing-panel-header">
                                <h2>Initial Consultation and Assessment</h2>
                                <p class="pricing-panel-price">$175</p>
                            </div>
                            <div class="pricing-panel-details">
                                <ul>
                                    <li>1.5-2hr private Zoom session</li>
                                    <li>Comprehensive review of your dog's history & goals</li>
                                    <li>Live separation anxiety assessment of your dog</li>
                                    <li>Overview of what training will look like & instructions for getting started</li>
                                    <li>Recommendations for life adjustments to improve your dog's well-being & relationship
                                        with you</li>
                                    <li>Discuss tech setup</li>
                                    <li>A recording of your session to refer back to</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-4 pricing-panel-container">
                        <div class="pricing-panel">
                            <div class="col-xs-12 pricing-panel-header">
                                <h2>4 Week Program</h2>
                                <p class="pricing-panel-price">$800</p>
                            </div>
                            <div class="pricing-panel-details">
                                <ul>
                                    <li>4 weekly zoom check-ins</li>
                                    <li>5 individualized training plans for the pet parent to conduct each week</li>
                                    <li>Access to the SA Pro Trainer App</li>
                                    <li>Daily messaging support M - F</li>
                                    <li>Unlimited video review from your trainer</li>
                                    <li>As needed data driven reports & communication with your vet.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-4 pricing-panel-container">
                        <div class="pricing-panel">
                            <div class="col-xs-12 pricing-panel-header">
                                <h2>8 Week Program</h2>
                                <p class="pricing-panel-price">$1,350 (save $250!)</p>
                            </div>
                            <div class="pricing-panel-details">
                                <ul>
                                    <li>8 weekly zoom check-ins</li>
                                    <li>5 individualized training plans for the pet parent to conduct each week</li>
                                    <li>Access to the SA Pro Trainer App</li>
                                    <li>Daily messaging support M - F</li>
                                    <li>Unlimited video review from your trainer</li>
                                    <li>As needed data driven reports & communication with your vet.</li>
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

    .pricing-panels-container {
        display: inline-block;
    }

    .pricing-panel-container {
        padding: 10px;

        .pricing-panel {
            padding: 30px 25px 20px 30px;
            background: #e1cdec;
            border-radius: 10px;
            height: 500px;
            max-width: 390px;

            &:hover {
                background: #98609e;
                box-shadow: 0 0 11px rgba(33, 33, 33, .2);

                .pricing-panel-details {
                    ul li {
                        color: #fff;
                    }
                }

                .pricing-panel-header {

                    h2,
                    .pricing-panel-price {
                        color: #fff;
                    }
                }
            }

            .pricing-panel-header {
                text-align: center;
                margin-bottom: 10px;

                h2 {
                    font-family: Arial, Helvetica, sans-serif;
                }

                .pricing-panel-price {}
            }

            .pricing-panel-details {
                ul {
                    text-decoration: none;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;

                    li {
                        margin-top: 10px;
                        font-size: 15px;
                        list-style-image: url("assets/pawprint.svg");

                        &::marker {
                            width: 20px;
                            height: 20px;
                            color: $secondary-color;
                        }
                    }
                }
            }
        }
    }

    .more-services {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 40px;

        .pricing-table {
            width: 100%;
            max-width: 700px;
            margin: 20px auto;
        }

        .dotted-table-row {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .dotted-table-line {
                border-bottom: 2px dotted $secondary-color;
                flex: 1;
                margin-bottom: 8px;
                margin: 8px 4px;
            }

            .dotted-table-right {
                color: $secondary-color;
                font-weight: bolder;
            }
        }

        .pricing-submessage {
            margin-left: 20px;
            color: $primary-color;
        }
    }

    .section-1 {
        display: flex;
        justify-content: center;

        .pricing-info-container {
            width: 100%;
            padding: 20px;
            overflow: auto;
            max-width: 1050px;

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

    @media(max-width: $screen-md) {
        .pricing-info-container {

            .pricing-panel-container {
                display: flex;
                justify-content: center;
                margin-bottom: 30px;
            }
        }
    }
}
</style>