<template lang="html">
    <div class="route about">
        <div class="section">
            <div class="about-container">
                <h1 class="about-header">Lauren Sorensen</h1>
                <p class="certifications">SAPT • CPDT-KA • Fear-Free Certified</p>
                <div class="about-pic-and-text-container row">
                    <div class="about-pic col-md-4 col-xs-12"></div>
                    <p class="about-text col-md-8 col-xs-12">
                        Lauren is a 2016 participant of the Karen Pryor Academy for professional dog trainers. She is
                        also a Certified Pet Dog Trainer (CPDT-KA), Fear-Free Certified Trainer (FFCP), and Certified
                        Separation Anxiety Pro Trainer (Cert-SAPT). She is currently working on her behavior consultant
                        certification through the Certification Counsel For Pet Dog Trainers.
                        <br><br>
                        Lauren started out her early dog training career mentoring with experienced local trainers
                        before taking on her own training classes and private lessons. She most recently worked as a
                        behavior specialist at a high volume animal shelter for a number of years. In that position, she
                        saw a great need for separation anxiety trainers, and decided to pursue certification to
                        specialize in separation anxiety. Lauren also has experience working in vet clinics, dog
                        daycares, and grooming salons.
                        <br><br>
                        She values continuing education so she can bring clients the most effective methods available.
                        She is committed to using humane training methods backed by the latest scientific research. This
                        means that she will never do anything that hurts or scares your dog! Her favorite thing about
                        dog training is seeing the “AH-HA!” moment when a dog catches on to a new training exercise.
                    </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer';
export default {
    name: 'About',
    components: {
        Footer
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
    }

    .about-container {
        margin: 50px auto;
        width: 100%;
        max-width: 900px;
        padding: 20px;
        pointer-events: none;
        height: 100%;

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
                height: 100%;
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
            max-height: 400px;
            height: 100%;
        }

        .section {
            height: 100%;
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
}
</style>
