<template lang="html">
    <div class="route diy">
        <section class="section section-1">
            <div class="resources-list-container">
                <h1 class="resources-header secondary-text">DIY Programs</h1>

                <div class="resources-category">
                    <a target="_blank" href="https://julienaismith.com/work-with-julie/#parents" class="resource-link">
                        Separation Anxiety Heros.
                    </a>
                    <a target="_blank" href="https://347611--julienaismith.thrivecart.com/separation-anxiety-heroes-app-only-usd/" class="resource-link">
                        Separation Anxiety Heros. (App Only Membership)
                    </a>
                    <a target="_blank" href="https://courses.malenademartini.com/?aff=26" class="resource-link">
                        Mission Possible.
                    </a>
                    <a target="_blank" href="https://347611--julienaismith.thrivecart.com/separation-anxiety-heroes-usd-new/" class="resource-link">
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
import Footer from '../components/Footer';
import { useMeta } from 'vue-meta';
export default {
    name: 'DIY',
    components: {
        Footer
    },
    setup() {
        useMeta({
            title: 'DIY Programs | Healthy Mind Canine | Dog Separation Anxiety Expert',
            description: 'Meet our multi certified separation anxiety dog training expert, Lauren Sorensen. She prioritizes bringing her clients the most effective and humane methods available.'
        })
    }
};
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';

.route.diy {
    scroll-snap-type: none;

    .section {
        scroll-snap-align: start;
        height: auto;
        min-height: 100%;
    }

    .section-1 {
        display: flex;
        justify-content: center;

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

}
</style>
