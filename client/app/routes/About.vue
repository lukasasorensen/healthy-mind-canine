<template lang="html">
    <div class="route about">
        <div class="section">
            <div class="about-container">
                <h1 class="about-header">Lauren Sorensen</h1>
                <p class="certifications">CSAP-BC • CPDT-KA • FFCP • FDM</p>
                <div class="about-pic-and-text-container row">
                    <div class="about-pic col-md-4 col-xs-12"></div>
                    <p class="about-text col-md-8 col-xs-12">
                        Lauren, a seasoned dog trainer with almost 10 years of professional experience, is your trusted
                        resource for separation anxiety dog training. Her certification journey began with an education from
                        the Karen Pryor Academy For Professional Dog Trainers. She has since achieved additional
                        certifications, including Cerdtified Pet Dog Trainer, Fear-Free Certified Trainer, Family Dog Mediator, and Certified
                        Separation Anxiety Pro Behavior Consultant. In an industry lacking official regulations, Lauren
                        firmly believes in the importance of voluntary certification, offering peace of mind to pet parents
                        in their pursuit of a qualified professional.
                        <br><br>
                        Lauren's extensive background encompasses teaching training classes, private lessons, shelter
                        behavior work, board and train, and day camp training. Her dedication to addressing separation
                        anxiety stems from her time as a behavior specialist at an animal shelter, where she recognized a
                        pressing need for resources in this area. Separation anxiety is a challenge that many dog trainers
                        shy away from due to its intricate nature and the substantial support it demands. Because of this
                        Lauren decided to pursue specialized certification and launch her own business, ensuring pet owners
                        worldwide can access expert help.
                        <br><br>
                        Lauren prioritizes ongoing education to provide clients with the most effective and up-to-date
                        training methods. Her commitment centers on humane training practices, firmly grounded in the latest
                        scientific research, assuring pet owners that she will never engage in methods that harm or distress
                        their dogs. You can trust Lauren to be your partner in achieving a well-balanced and confident
                        canine companion!
                    </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer';
import { useMeta } from 'vue-meta';
export default {
    name: 'About',
    components: {
        Footer
    },
    setup() {
        useMeta({
            title: 'About Us | Healthy Mind Canine | Dog Separation Anxiety Expert',
            description: 'Meet our multi certified separation anxiety dog training expert, Lauren Sorensen. She prioritizes bringing her clients the most effective and humane methods available.'
        })
    }
};
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';

.route {
    scroll-snap-type: none;
}


.about.route {
    footer {
        scroll-snap-align: none !important;
    }

    .section {
        width: 100vw;
        height: auto;
        min-height: calc(100% - $nav-height);
    }

    .about-container {
        margin: 50px auto;
        width: 100%;
        max-width: 900px;
        padding: 20px;
        pointer-events: none;
        height: auto;

        .about-header {}

        .certifications {
            color: $secondary-color;
            font-size: 16px;
        }

        .about-pic-and-text-container {
            height: 100%;

            .about-pic {
                @include bgimage;
                background-image: url('assets/ABOUT_PIC.png');
                height: 370px;
                margin-bottom: 50px;
                margin-top: 20px;
            }

            .about-text {
                margin-top: -95px;
                padding: 25px;
                box-sizing: border-box;
                color: $secondary-text;
            }
        }
    }

    @media (min-width: $screen-lg) {
        .about-container {
            height: auto;
        }

        .section {
            height: auto;
        }
    }

    @media (max-width: $screen-lg) {
        .about-container {
            margin: 0 auto;

            .about-header {
                text-align: center;
            }

            .certifications {
                width: 100%;
                text-align: center;
            }

            .about-pic-and-text-container {
                .about-pic {
                    height: 200px;
                    margin-bottom: 20px;
                }

                .about-text {
                    margin-top: 0;
                    padding: 25px;
                    padding-bottom: 100px;
                    box-sizing: border-box;
                }
            }
        }
    }
}</style>
