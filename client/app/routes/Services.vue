<template lang="html">
    <div class="route services">
        <section class="section section-1">
            <div class="separation-anxiety-header-container">
                <h2 class="separation-anxiety-header">What is Separation Anxiety?</h2>
                <div class="separation-anxiety-learn-more-button-container">
                    <button @click="scrollTo('section-2')" class="btn btn-lg btn-primary">Learn More</button>
                </div>
            </div>
        </section>
        <section ref="section-2" class="section section-2">
            <div class="separation-anxiety-info-container">
                <h1 class="separation-anxiety-info-header" id="what-is-separation-anxiety">What is Separation Anxiety?
                </h1>
                <p class="separation-anxiety-info-text">
                    Separation Anxiety is very similar to phobias in humans such as a fear of heights, spiders, or
                    germs. It is exactly what it sounds like, a phobia of being left alone. The dog may display panic
                    behavior such as pacing, panting, trembling, drooling, vocalizing, accidents, and destroying items.
                    <br /><br />
                    If left untreated, these symptoms can increase in intensity, and become dangerous for the dog. Rest
                    assured your dog is not trying to spite you, they are truly panicking, and they need your help! That
                    is where we come in.
                </p>
            </div>
        </section>
        <section class="section section-3">
            <div class="how-does-training-work-container">
                <div class="how-does-training-work-info-container">
                    <div class="how-does-training-work-header-container">
                        <h1 class="how-does-training-work-header">How Does Training Work?</h1>
                    </div>
                    <div class="how-does-training-work-text-container">
                        <p class="how-does-training-work-text">
                            Training is done 100% virtually. This way we can see your dog's true behavior in their
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
        <section class="section section-4">
            <div class="what-do-i-need-container">
                <h1 class="what-do-i-need-header">What You Will Need For Training</h1>
                <div class="what-do-i-need-info col-md-7 col-xs-12">
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
                                    1-2 home cameras depending on the set up of your home. We recommend the Wyze (link
                                    to
                                    cam)
                                    cam.
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
                <div class="what-do-i-need-image-container col-md-5 col-xs-12 hidden-xs"></div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../components/Footer";
export default {
    name: 'services',
    components: {
        Footer
    },
    methods: {
        scrollTo: function (refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            document.querySelector('.route').scrollTo(0, top);
        }
    },
    mounted() {
        if (location.hash.includes('what-is-separation-anxiety')) {
            this.scrollTo('section-2');
        }
    }
};
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';

.route {
    scroll-snap-type: y mandatory;
}

.services.route {
    .section {
        width: 100vw;
        height: 100vh;
        scroll-snap-align: start;
    }

    .section-1 {
        .separation-anxiety-header-container {
            width: 100%;
            height: calc(100% - $nav-height - 40px);
            background-image: url('assets/DogOwnerStock-1.jpg');
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
                max-height: calc(95% - $nav-height);
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
                    .how-does-training-work-text {
                        color: #fff;
                    }
                }
            }
        }

    }

    .section-4 {
        text-align: center;

        .what-do-i-need-container {
            height: calc(100% - $nav-height);
            padding: 5px;

            .what-do-i-need-image-container {
                @include bgimage;
                background-image: url('assets/dog-on-computer.jpg');
                height: 100%;
            }
        }

        .what-do-i-need-header {
            margin-top: 40px;
        }

        .what-do-i-need-list {
            display: inline-block;
            max-width: 700px;
            text-align: left;

            .what-do-i-need-icon {
                font-size: 3em;
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
            .what-do-i-need-info {
                padding-top: 65px;
            }

            .what-do-i-need-list {
                margin-left: 50px;

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
        }

        .section-1 {
            .separation-anxiety-header-container {
                height: calc(100% - 40px);

                .separation-anxiety-header {
                    font-size: 3.5em;
                }
            }
        }

        .section-2 {
            background-size: 380%;
        }

        .section-4 {
            .what-do-i-need-container {
                padding-top: 40px;

                .what-do-i-need-icon {
                    font-size: 2em;
                }

                .what-do-i-need-header {
                    margin-bottom: 40px;
                }
            }
        }
    }
}
</style>
