<template lang="html">
    <div class="route pricing">
        <section class="section section-1 pricing">
            <div class="pricing-info-container">
                <div class="pricing-header-container">
                    <h1 class="pricing-header secondary-text">Pricing</h1>
                </div>
                <div class="package-disclaimer w-100 text-center">
                    <p>Separation Anxiety Training is sold in 4 week packages.</p>
                </div>
                <div class="pricing-table">
                    <div class="dotted-table-row">
                        <p class="dotted-table-left">Initial Consultation (60-90min)</p>
                        <div class="dotted-table-line"></div>
                        <p class="dotted-table-right">$150</p>
                    </div>
                    <!-- maybe add this later -->
                    <!-- <div class="dotted-table-row">
                        <p class="dotted-table-left">Tune up for previous clients (60min)</p>
                        <div class="dotted-table-line"></div>
                        <p class="dotted-table-right">$120</p>
                    </div> -->
                    <div class="dotted-table-row">
                        <p class="dotted-table-left">4 week package</p>
                        <div class="dotted-table-line"></div>
                        <p class="dotted-table-right">$1200</p>
                    </div>
                </div>
                <div class="four-week-package-includes-container w-100 text-center">
                    <h2>4 week package includes:</h2>
                </div>
                <ul class="four-week-package-items">
                    <li>
                        1 face to face Zoom meeting per week, 30-60 Minutes. During these sessions we will walk you
                        through
                        a training exercise, assess your dog, and answer any questions that come up.
                    </li>
                    <li>
                        5 individualized training plans for the pet parent to conduct each week. These daily plans are
                        based
                        on how your dog did during training the previous day.
                    </li>
                    <li>
                        Access to our exclusive separation anxiety app to track your progress and communicate with your
                        trainer.
                    </li>
                    <li>
                        Daily messaging support and video review from your Separation Anxiety Pro Trainer.
                        Monday-Friday.
                    </li>
                </ul>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
export default {
    name: 'PricingAndFAQ',
    components: {
        Footer
    },
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

            .four-week-package-includes-container {
                margin-top: 40px;
                margin-bottom: 20px;
            }

            ul.four-week-package-items {
                li {
                    margin-bottom: 15px;
                    color: $secondary-text;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>