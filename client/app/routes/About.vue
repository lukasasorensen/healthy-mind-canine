<template lang="html">
    <div class="route about">
        <div class="section">
            <div class="about-container">
                <h1 class="about-header">About The Trainer</h1>
                <p class="about-text">
                    Lauren is a 2016 participant of the Karen Pryor Academy for professional dog trainers. She is also a
                    Certified Pet Dog Trainer (CPDT-KA), Fear-Free Certified Trainer, and certified Separation Anxiety Pro
                    Trainer (SAPT). Lauren started out her early dog training career doing dog training classes and private
                    lessons while mentoring with experienced dog trainers. She then transitioned into a job as a behavior
                    specialist at a large animal shelter for both cats and dogs. After years in that position, she saw a great
                    need for separation anxiety trainers, and decided to pursue a certification to specialize in SA. She values
                    continuing education so she can bring clients the most effective methods available. She is committed to
                    using humane science based training practices. This means that she will never do anything that hurts or
                    scares your dog! Her favorite thing about dog training is seeing the relationship between dog and owner
                    flourish through fear-free training methods.
                </p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../components/Footer";
export default {
    name: 'About',
    components: {
        Footer
    }
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";

.about.route {
    .section {
        height: 100vh;
        widht: 100vw;
    }
    .about-container {
        margin: 50px auto;
        width: 100%;
        max-width: 700px;
        padding: 20px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;

        .about-header {
            margin-bottom: 40px;
        }
    }
}
</style>
