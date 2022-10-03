<template lang="html">
    <div class="route services">
        <section class="section section-1">
            <div class="separation-anxiety-header-container">
                <h1 class="separation-anxiety-header">Separation Anxiety Training <br>That Works!</h1>
                <div class="separation-anxiety-learn-more-button-container">
                    <button @click="scrollTo('section-2')" class="btn btn-lg btn-primary" aria-label="Learn More">Learn
                        More</button>
                </div>
            </div>
        </section>
        <section ref="section-2" class="section section-2">
            <div class="separation-anxiety-info-container">
                <h1 class="separation-anxiety-info-header hidden-xs" id="what-is-separation-anxiety">What Is Separation
                    Anxiety?</h1>
                <h2 class="separation-anxiety-info-header visible-xs" id="what-is-separation-anxiety">What Is Separation
                    Anxiety?</h2>
                <p class="separation-anxiety-info-text">
                    Separation Anxiety is very similar to phobias in humans such as a fear of heights, spiders, or
                    germs. It is exactly what it sounds like, a phobia of being left alone. Dogs with separation anxiety
                    typically display panic induced behavior such as: pacing, panting, trembling, drooling, vocalizing,
                    accidents, and destroying items.
                    <br /><br />
                    If left untreated, these symptoms can increase in intensity, and become dangerous for the dog. Rest
                    assured your dog is not trying to spite you, they are truly panicking, and they need your help! That
                    is where we come in.
                </p>
            </div>
        </section>
        <section ref="section-3" class="section section-3">
            <div class="how-does-training-work-container">
                <div class="how-does-training-work-info-container">
                    <div class="how-does-training-work-header-container">
                        <h1 class="how-does-training-work-header hidden-xs">What Is Our Training Method?</h1>
                        <h2 class="how-does-training-work-header visible-xs">What Is Our Training Method?</h2>
                    </div>
                    <div class="how-does-training-work-text-container">
                        <p class="how-does-training-work-text">
                            Our method relies on systematic desensitization. Gradually your dog is exposed to small
                            periods of stress-free home alone time while increasing the duration at the dogs pace.
                            Slowly, your dog becomes more comfortable with longer stretches of time until they are able
                            to be home alone as needed.
                            <br /><br />
                            Studies support that this is not only the most humane treatment option but the only one that
                            offers lasting results. Although fairly straightforward, implementing a desensitization
                            training plan can be challenging for owners on their own without the guidance of a
                            separation anxiety specialist.
                            <br /><br />
                        </p>
                        <br />
                        <h2 class="virtual-training-header">Training is done 100% virtual</h2>
                        <p class="how-does-training-work-text">
                            This way we can see your dog's true behavior in their
                            normal environment. During training, it is absolutely essential that you do not leave your
                            dog alone unless it's part of that day's training homework. If a dog continues to experience
                            alone time filled with anxiety and stress, it is unlikely they will recover.
                            <br /><br />
                            We can achieve
                            this by temporarily utilizing daycares, pet sitters, family, friends, and neighbors.
                            Treating separation anxiety requires some short term pain for long term gain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section ref="section-4" class="section section-4">
            <div class="what-do-i-need-container">
                <h1 class="what-do-i-need-header secondary-text hidden-xs">What You Will Need For Training</h1>
                <h2 class="what-do-i-need-header secondary-text visible-xs">What You Will Need For Training</h2>
                <div class="what-do-i-need-info col-sm-8 col-xs-12">
                    <div class="what-do-i-need-list">
                        <ul>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-wifi" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    High speed internet connection.
                                </div>
                            </li>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-laptop" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    A laptop or tablet for video chat.
                                </div>
                            </li>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-video" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    A Home Monitoring Camera <br />
                                    <span class="wzye-text">
                                        (we recommend the <a
                                            href="https://www.wyze.com/products/wyze-cam?related_selling_plan=41618559008930"
                                            target="_blank">
                                            Wyze
                                        </a> camera)
                                    </span>
                                </div>
                            </li>
                            <li class="col-xs-12">
                                <div class="col-xs-3 what-do-i-need-li-icon">
                                    <font-awesome-icon class="what-do-i-need-icon" icon="fa-solid fa-mobile" />
                                </div>
                                <div class="col-xs-9 what-do-i-need-li-text">
                                    A smart phone to access our training app and your home cameras.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="what-do-i-need-image-container col-sm-4 col-xs-12 hidden-xs"></div>
                <div class="go-to-buttons">
                    <button @click="goToFaq()" class="btn btn-secondary btn-lg hidden-xs">Go To FAQ</button>
                    <button @click="goToFaq()" class="btn btn-primary visible-xs">Go To FAQ</button>
                    <button @click="goToPricing()" class="btn btn-primary btn-lg hidden-xs">Go To Pricing</button>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
    <div class="scroll-down-container" @click="scrollToNextSection">
        <div class="col-xs-12" :class="{ 'bounce-top': bounceScrollDown }">
            <p>scroll down for more</p>
        </div>
        <div class="col-xs-12">
            <font-awesome-icon class="scroll-down-icon" icon="fa-solid fa-chevron-down" />
        </div>
    </div>
</template>
<script>
import Footer from "../components/Footer";
import { useMeta } from 'vue-meta'

export default {
    name: 'services',
    components: {
        Footer
    },
    data() {
        return {
            bounceScrollDown: false
        }
    },
    methods: {
        scrollTo: function (refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            document.querySelector('.route').scrollTo(0, top);
        },
        runScrollDownAttentionAnimation: function () {
            this.bounceScrollDown = true;

            setTimeout(() => {
                this.bounceScrollDown = false;
            }, 2000);
        },
        scrollToNextSection: function () {
            var route = document.querySelector('.route');
            var scrollTop = route.scrollTop;
            var routeHeight = route.clientHeight;
            route.scrollTo(0, (scrollTop + routeHeight));
        },
        goToFaq: function () {
            this.$router.push('/faq');
        },
        goToPricing: function () {
            this.$router.push('/pricing');
        }
    },
    mounted() {
        if (location.hash.includes('what-is-separation-anxiety')) {
            this.scrollTo('section-2');
        }

        setTimeout(() => {
            this.runScrollDownAttentionAnimation();
        }, 2000);
    },
    setup() {
        useMeta({
            title: 'About Separation Anxiety | Healthy Mind Canine | Virtual Dog Training',
            description: 'Virtual separation anxiety dog training that actually works. No more noise complaints or household destruction. We take the guesswork out of training your dog. Learn more about our methods & how we can help you regain your freedom!'
        })
    }
};
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
@import "../scss/animations";

.route {
    scroll-snap-type: y proximity;
}

.scroll-down-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    padding-bottom: 23px;
    cursor: pointer;
    user-select: none;

    div {
        display: flex;
        justify-content: center;

        svg,
        p {
            color: $primary-color;
            text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
        }
    }
}

.services.route {
    .section {
        width: 100vw;
        height: calc(100vh - $nav-height);
        scroll-snap-align: start;
    }

    .section-1 {
        .separation-anxiety-header-container {
            width: 100%;
            height: calc(100% - 80px);
            background-image: url('assets/DogOwnerStock-1.png');
            background-size: cover;
            background-position: center;
            color: #fff;
            text-align: center;
            box-shadow: inset 0 0 0 2000px rgb(34 34 34 / 30%);

            .separation-anxiety-header {
                font-size: 5em;
                padding-top: 7%;
                color: #fff;
                @include text-shadow;
            }
        }

        .separation-anxiety-learn-more-button-container {
            width: 100%;
            margin-top: 130px;
        }
    }

    .section-2 {
        display: flex;
        justify-content: center;
        @include bgimage;
        background-image: url('assets/purple-blob.png');

        .separation-anxiety-info-container {
            padding: 30px;
            width: 100%;
            height: 100%;
            max-width: 750px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .separation-anxiety-info-header {
                margin-bottom: 30px;
                text-align: center;
            }

            .separation-anxiety-info-text {
                color: $secondary-text;
                scroll-padding-bottom: 40px;
            }
        }
    }

    .section-3 {
        overflow: hidden;

        .how-does-training-work-container {
            @include bgimage;
            background-size: cover;
            background-image: url('assets/goldencutiepie.jpg');
            width: 100%;
            height: 115%;
            padding-top: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            .how-does-training-work-info-container {
                width: 96%;
                height: auto;
                max-height: 72%;
                max-width: 800px;
                background-color: #765050;
                border-radius: 10px;
                padding: 30px 40px;
                overflow-y: auto;

                .how-does-training-work-header-container {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 25px;

                    .how-does-training-work-header {
                        color: $primary-color;
                    }
                }

                .how-does-training-work-text-container {
                    .virtual-training-header {
                        margin-bottom: 5px;
                    }

                    .how-does-training-work-text {
                        color: #fff;
                        scroll-padding-bottom: 20px;
                    }
                }
            }
        }

    }

    .section-4 {
        text-align: center;
        display: flex;
        justify-content: center;

        .what-do-i-need-container {
            height: 100%;
            padding: 5px;
            max-width: 900px;
            background-color: $primary-bg;
            position: absolute;
            width: 100%;
            z-index: 10000;

            .what-do-i-need-image-container {
                @include bgimage;
                background-image: url('assets/dog-on-computer.png');
                height: 100%;
            }
        }

        .what-do-i-need-list {
            display: inline-block;
            max-width: 700px;
            text-align: left;

            .what-do-i-need-icon {
                font-size: 3em;
            }

            span.wzye-text {
                font-size: 0.9em;
            }

            ul {
                padding: 0;
                list-style-type: none;

                li {
                    margin-bottom: 50px;
                    font-size: 1.2em;

                    .what-do-i-need-li-icon {
                        text-align: center;
                        color: $secondary-color;
                    }
                }
            }
        }

        .go-to-buttons {
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);

            button:nth-child(1) {
                margin-right: 35px;
            }
        }
    }

    @media(max-height: 770px) {
        .section-4 {
            .go-to-buttons {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                top: 20px;
            }
        }
    }

    @media(max-height: 650px) {
        .section-1 {
            .separation-anxiety-learn-more-button-container {
                display: none;
            }
        }
    }

    @media (min-width: $screen-md) {
        .separation-anxiety-info-header {
            margin-top: -75px;
        }

        .section-3 {
            .how-does-training-work-info-container {
                margin-top: 50px;
            }
        }

        .section-4 {
            min-height: 730px;

            .what-do-i-need-header {
                margin-top: 40px;
            }

            .what-do-i-need-info {
                padding-top: 65px;
            }

            .what-do-i-need-list {

                .what-do-i-need-li-text {
                    margin-top: 5px;
                }
            }

            .what-do-i-need-image-container {
                margin-top: -90px;
            }
        }
    }

    @media (max-width: $screen-md) {
        .section {
            width: 100%;
            height: 100%;
            padding-bottom: 50px;
        }

        .section-1 {
            .separation-anxiety-header-container {
                height: calc(100% - 40px);

                .separation-anxiety-header {
                    font-size: 2.5em;
                }
            }
        }

        .section-2 {
            background-size: 380%;

            .separation-anxiety-info-container {

                .separation-anxiety-info-text {
                    max-height: 100%;
                    overflow: auto;
                }
            }
        }

        .section-3 {
            .how-does-training-work-container {
                .how-does-training-work-info-container {
                    max-height: 82%;
                }
            }
        }

        .section-4 {
            .what-do-i-need-container {
                padding-top: 20px;

                .what-do-i-need-list {
                    ul {

                        li {
                            margin-bottom: 35px;
                            font-size: 1.2em;
                            padding: 0;

                            .what-do-i-need-li-icon {
                                text-align: center;
                                color: $secondary-color;
                            }
                        }
                    }

                    .what-do-i-need-li-text {
                        margin-top: -10px;
                    }
                }


                .what-do-i-need-icon {
                    font-size: 1.2em;
                }

                .what-do-i-need-header {
                    margin-bottom: 25px;
                }

                .go-to-buttons {
                    bottom: 20px;
                }
            }
        }
    }
}
</style>
