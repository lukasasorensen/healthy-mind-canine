<template lang="html">
    <div class="route faq">
        <section class="section section-1">
            <div class="resources-list-container">
                <h1 class="resources-header secondary-text">Resources</h1>
                <div class="resources-category">
                    <h2 class="resource-header">Books</h2>
                    <a target="_blank" class="resource-link"
                        href="https://www.amazon.com/Be-Right-Back-Overcome-Separation/dp/1999296605/ref=sr_1_3?crid=2JVN3WF1TE1T2&keywords=Julie+naismith&qid=1660143544&sprefix=julie+naismith%2Caps%2C96&sr=8-3">
                        Be Right Back! How to overcome separation anxiety and regain your
                        freedom.
                    </a>
                    <a target="_blank"
                        href="https://www.amazon.com/Right-Puppy-Separation-Anxiety-Step/dp/1999296621/ref=sr_1_1_sspa?crid=2JVN3WF1TE1T2&keywords=Julie+naismith&qid=1660143544&sprefix=julie+naismith%2Caps%2C96&sr=8-1-spons&psc=1"
                        class="resource-link">
                        Be right Back! Puppy Separation Anxiety Edition.
                    </a>
                    <a target="_blank"
                        href="https://www.amazon.com/Separation-Anxiety-Dogs-Generation-Treatment-ebook/dp/B08LRPXSRP/ref=sr_1_1?crid=3LWXYV0TH3EN9&keywords=separation+anxiety+in+dogs+book&qid=1660143700&sprefix=separation+anxiety+in+dogs+book%2Caps%2C82&sr=8-1"
                        class="resource-link">
                        Separation Anxiety In Dogs: Next Generation Treatment Protocols And Practices.
                    </a>
                </div>

                <div class="resources-category">
                    <h2 class="resource-header">Podcasts</h2>
                    <a target="_blank" href="https://open.spotify.com/show/5TOhsYqGCGsuQ6WoS1HrmM" class="resource-link">
                        Be Right Back! The separation anxiety podcast.
                    </a>
                    <a target="_blank" href="https://pawsandreward.com/episode5/" class="resource-link">
                        Separation related behaviors with Jackie Johnson
                    </a>
                    <a target="_blank" href="https://www.trainingwithally.com/the-podcast" class="resource-link">
                        Home Alone And Comfortable As Heck.
                    </a>
                    <a target="_blank" href="https://www.believeinyour.dog/podcast" class="resource-link">
                        The Believe In Your Dog Podcast.
                    </a>
                </div>

                <div class="resources-category">
                    <h2 class="resource-header">Blogs</h2>

                    <a target="_blank" href="https://www.believeinyour.dog/blog" class="resource-link">
                        Believe in your dog.
                    </a>
                    <a target="_blank" href="https://malenademartini.com/blog/" class="resource-link">
                        Melena Demartini.
                    </a>
                    <a target="_blank" href="https://rescuedbytraining.com/tag/separation-anxiety/" class="resource-link">
                        Rescued By Training.
                    </a>
                </div>

                <div class="resources-category">
                    <h2 class="resource-header">DIY programs</h2>
                    <a target="_blank" href="https://julienaismith.com/work-with-julie/#parents" class="resource-link">
                        Separation Anxiety Heros. Use discount code 347611 for 50% off your first 3 months.
                    </a>
                    <a target="_blank" href="https://courses.malenademartini.com/?aff=26" class="resource-link">
                        Mission Possible.
                    </a>
                    <a target="_blank"
                        href="https://separationanxietydog.thinkific.com/courses/do-it-yourself-separation-anxiety-program?ref=3183a4"
                        class="resource-link">
                        Separation Anxiety Dog DIY.
                    </a>
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
    name: 'Resources',
    components: {
        Footer
    },
    setup() {
        useMeta({
            title: 'Resources | Healthy Mind Canine | Separation Anxiety',
            description: 'We provide separation anxiety dog training resources so you can learn how to help your dog recover from their separation anxiety.'
        })
    }
}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
@import "../scss/animations";

.route.faq {
    scroll-snap-type: none;

    .section {
        scroll-snap-align: start;
        height: auto;
        min-height: 100%;
    }

    .section-1 {

        .resources-header {
            margin-top: 20px;
            font-size: 2.5em;
        }

        .resources-list-container {
            display: block;
            width: 100%;
            height: auto;
            max-width: 600px;
            text-align: center;
            padding: 20px;
        }

        .resources-category {
            width: 100%;
            margin-top: 50px;

            .resource-header {
                width: 100%;
                text-align: center;
                font-size: 2em;
            }

            .resource-link {
                display: block;
                margin-top: 20px;
                font-size: 1.3em;
                background: #e1cdec;
                color: #4a4a4a;
                color: #444444;
                text-decoration: none;
                padding: 10px;
                border-radius: 3px;
                transition: box-shadow .3s, background .3s, color .3s;

                &:hover {
                    background: #98609e;
                    box-shadow: 0 0 11px rgba(33, 33, 33, .2);
                    color: white;
                }
            }
        }
    }

}</style>