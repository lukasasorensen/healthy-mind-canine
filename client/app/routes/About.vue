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
                        also a Certified Pet Dog Trainer (CPDT-KA), Fear-Free Certified Trainer, and certified
                        Separation Anxiety Pro Trainer (SAPT). Lauren started out her early dog training career doing
                        dog training classes and private lessons while mentoring with experienced dog trainers. She then
                        transitioned into a job as a behavior specialist at a large animal shelter for both cats and
                        dogs. After years in that position, she saw a great need for separation anxiety trainers, and
                        decided to pursue a certification to specialize in SA. She values continuing education so she
                        can bring clients the most effective methods available. She is committed to using humane science
                        based training practices. This means that she will never do anything that hurts or scares your
                        dog! Her favorite thing about dog training is seeing the relationship between dog and owner
                        flourish through fear-free training methods.
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

.about.route {
    .section {
        width: 100vw;
    }
    .about-container {
        margin: 50px auto;
        width: 100%;
        max-width: 900px;
        padding: 20px;
        pointer-events: none;
        height: 100%;

        .about-header {
        }

        .certifications {
            color: $secondary-color;
            font-size: 16px;
        }

        .about-pic-and-text-container {
            height: 100%;
            .about-pic {
                @include bgimage;
                background-image: url('assets/ABOUT_PIC.JPG');
                height: 100%;
                margin-bottom: 50px;
                margin-top: 20px;
            }

            .about-text {
                margin-top: -95px;
                padding: 25px;
                box-sizing: border-box;
            }
        }
    }

    @media (min-width: $screen-md) {
        .about-container {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            max-height: 400px;
        }
        .section {
            height: 100%;
        }
    }

    @media (max-width: $screen-md) {
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
