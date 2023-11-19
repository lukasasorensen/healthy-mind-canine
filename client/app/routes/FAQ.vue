<template lang="html">
    <div class="route faq">
        <section class="section section-1">
            <div class="faq-container">
                <div class="faq-header w-100 text-center">
                    <h1 class="secondary-text">Frequently Asked Questions</h1>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">What area does <strong>Healthy Mind Canine</strong> service?</div>
                    <div class="faq-answer">
                        We are located in Minnesota. Separation anxiety training is done 100% virtually. This allows us to
                        help people and their pets
                        no matter where they live in the world as long as they speak english and we can accommodate their
                        time zone. We are in the
                        Central Time zone.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">Why is training done virtually?</div>
                    <div class="faq-answer">
                        Having the trainer work virtually allows us to see your dog's true behavior in their normal
                        environment. It also allows us to
                        work with each of our clients 5 days a week to provide an unmatched level of support!
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">Why can't I leave my dog home alone outside of training?</div>
                    <div class="faq-answer">
                        This is recommended for a couple of reasons. Firstly, we do this to prevent unnecessary suffering.
                        Secondly, it becomes very
                        difficult to teach a dog that being alone is <strong>safe</strong> if they are continuing to have
                        <strong>unsafe</strong> experiences. It's just further validating their fear of being alone which is
                        counterproductive to your
                        goal. We understand that emergencies do happen and we will work through it if something comes up and
                        you have to leave your
                        dog unexpectedly.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">Can you guarantee results?</div>
                    <div class="faq-answer">
                        The method we use is studied to be the most effective method available for separation anxiety so
                        far. However, we cannot
                        guarantee results since we are working with live beings.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">How long will training take?</div>
                    <div class="faq-answer">
                        The timeline is different for every dog. We always tell people to think in months, not weeks.
                        Separation anxiety training is
                        not a quick process and requires time, patience, and commitment to seeing a carefully crafted
                        training plan to completion. Our
                        job is to make this process smooth and attainable. Think of our training programs as a subscription
                        that you renew until your
                        dog's separation anxiety is resolved.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">How much of my time will training take per week?</div>
                    <div class="faq-answer">
                        This depends on where your dog is at with their training. We recommend training 4-5 days per week
                        for up to 30 minutes a day
                        to start out. Once your dog reaches longer durations of alone time we may be able to reduce the
                        frequency of training, but
                        your time away from home for training sessions will become longer. You will finally be able to run
                        some errands during
                        training!
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">Do you do payment plans?</div>
                    <div class="faq-answer">
                        We currently do not offer payment plans. We do offer one off sessions and custom packages for owners
                        who are enrolled in a DIY
                        program and need supplemental help. Check out our <router-link to="/diy"> resources</router-link>
                        page for other options if
                        working 1:1 with a trainer is not something you can do right now.
                    </div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">Will I need to give my dog less affection or stop letting them sleep in my
                        bed?</div>
                    <div class="faq-answer">No, there is no evidence that these things contribute to separation anxiety.
                        This is a common myth.</div>
                </div>
                <div class="faq-question-answer">
                    <div class="faq-question">Will getting a second dog cure separation anxiety?</div>
                    <div class="faq-answer">
                        This rarely works. Most dogs experience separation anxiety from their humans and another pet is
                        simply not a replacement for
                        them. Often bringing another dog in can complicate the situation if it doesn't work. The new dog
                        could also develop
                        separation-related issues if they are exposed to your dog panicking. If you must try it, use a
                        friend's dog a few times, and
                        make sure you truly want a second dog.
                    </div>
                </div>
                <div class="scroll-padding"></div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue';
import { useMeta } from 'vue-meta';
export default {
    name: 'PricingAndFAQ',
    components: {
        Footer
    },
    setup() {
        useMeta({
            title: 'FAQs | Healthy Mind Canine | Separation Anxiety',
            description: 'Learn more about our effective separation anxiety dog training programs on our FAQ page.'
        });
    }
};
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
@import '../scss/animations';

.route.faq {
    scroll-snap-type: none;

    .section {
        scroll-snap-align: start;
        height: auto;
        min-height: 100%;
    }

    .section-1 {
        display: flex;
        justify-content: center;

        .faq-header {
            margin-bottom: 40px;
            margin-top: 20px;
        }

        .faq-container {
            width: 100%;
            max-width: 700px;
            padding: 20px;
            height: auto;

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
}</style>
