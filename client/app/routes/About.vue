<template lang="html">
    <div class="route about">
        <div class="section">
            <div class="about-container">
                <h1 class="about-header">Lauren Sorensen</h1>
                <p class="certifications">SAPT • CPDT-KA • FFCP</p>
                <div class="about-pic-and-text-container row">
                    <div class="about-pic col-md-4 col-xs-12"></div>
                    <p class="about-text col-md-8 col-xs-12">
                        Lauren has been professionally training dogs for 9 years. She attended the Karen Pryor
                        Academy for professional dog trainers in 2016. She is also a Certified Pet Dog Trainer, Fear-Free
                        Certified Trainer, and Certified Separation Anxiety Pro Trainer. She is currently working on her
                        behavior consultant certification through the Certification Counsel For Pet Dog Trainers.
                        <br><br>
                        Lauren has experience teaching training classes, private lessons, shelter behavior work, board and
                        train, and day camp training. During her time working as a behavior specialist at a high volume
                        animal shelter she saw a great need for separation anxiety resources. Separation anxiety is
                        something that many dog trainers won't touch due to the complicated nature and the level of support
                        that is needed. Because of this, Lauren decided to take the leap to pursue her certification to
                        specialize in separation anxiety and open her own business where pet owners can get expert help no
                        matter where they live!
                        <br><br>
                        Lauren values continuing education so she can bring clients the most effective methods available.
                        She is committed to using only humane training methods backed by the latest scientific research.
                        This means that she will never do anything that hurts or scares your dog.
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
