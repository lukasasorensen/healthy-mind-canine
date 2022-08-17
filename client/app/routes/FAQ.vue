<template lang="html">
    <div class="route faq">
        <section class="section section-1">
            <div class="faq-container">
                <div class="faq-header w-100 text-center">
                    <h1 class="secondary-text">Frequently Asked Questions</h1>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        What area does <strong>Healthy Mind Canine</strong> service?
                    </div>
                    <div class="faq-answer">
                        We are located in Minnesota. Separation anxiety training is done 100% virtually. This allows us
                        to help people and their pets no matter where they live in the world as long as they speak
                        english and we can accommodate their time zone. We are in the Central Time zone.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        Why is training done virtually?
                    </div>
                    <div class="faq-answer">
                        The goal of this training is to teach the dog to be home alone. We cannot train a dog to be home
                        alone time if there is a trainer in the home. It would defeat the purpose. Having the trainer
                        work virtually also allows us to see your dog's true behavior in their normal environment.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        Why can't I leave my dog home alone outside of training?
                    </div>
                    <div class="faq-answer">
                        We cannot convince your dog that being alone is safe if they continue to have scary alone time
                        experiences. It just doesn't work. Owners will need to commit to making other accommodations for
                        the dog while they are away in order to work with us. We understand that emergencies do happen
                        and we will work through it if something comes up and you have to leave your dog unexpectedly.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        Can you guarantee results?
                    </div>
                    <div class="faq-answer">
                        Ethically, we cannot guarantee results, as we are working with live sentient beings. Our method
                        is studied to have a 73% success rate if the training protocol is followed.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        How long will training take?
                    </div>
                    <div class="faq-answer">
                        The timeline is different for every dog. We always tell people to think in months, not weeks.
                        Separation anxiety training is not a quick process and requires time, patience, and commitment
                        to
                        seeing a carefully crafted training plan to completion. Our job is to make this process smooth
                        and attainable.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        How much of my time will training take per week?
                    </div>
                    <div class="faq-answer">
                        This depends on where your dog is at with their training. We recommend training 4-5 days per
                        week for up to 30 minutes a day to start out. Once your dog reaches longer durations of alone
                        time we may be able to reduce the frequency of training, but your time away from home for
                        training sessions will become longer. You will finally be able to run some errands during
                        training!
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        Will I need to give my dog less affection or stop letting them sleep in my bed?
                    </div>
                    <div class="faq-answer">
                        No, there is no evidence that these things contribute to separation anxiety. This is a common
                        myth.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">
                        Will getting a second dog cure separation anxiety?
                    </div>
                    <div class="faq-answer">
                        This rarely, if ever, works. Most dogs experience separation anxiety from their humans, and
                        often bringing another dog in can complicate the situation. That second dog could also develop
                        separation related issues themselves.
                    </div>
                </div>

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

.route.faq {
    scroll-snap-type: none;

    .section {
        scroll-snap-align: start;
    }

    .section-1 {
        display: flex;
        justify-content: center;
        .faq-header {
            margin-bottom: 30px;
            margin-top: 20px;
        }
        .faq-container {
            width: 100%;
            max-width: 700px;
            padding: 20px;
            overflow: auto;

            .faq-question-answer {
                margin-bottom: 25px;
                .faq-question {
                    font-size: 1.3em;
                    color: $primary-color;
                    margin-bottom: 6px;
                }
                .faq-answer {
                    font-size: 1.1em;
                    color: $secondary-text;
                }
            }
        }
    }

}
</style>