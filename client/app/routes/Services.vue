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
                <h1 class="separation-anxiety-info-header">What is Separation Anxiety?</h1>
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
                            Our training relies on systematic desensitization. Gradually your dog is exposed to small
                            periods of stress-free home alone time while increasing the duration at the dogs pace.
                            Slowly, your dog becomes more comfortable with longer stretches of time until they are able
                            to be home alone as needed.
                            <br /><br />
                            Studies support that this is not only the most humane treatment option but the only one that
                            offers lasting results. Although fairly straightforward, implementing a desensitization
                            training plan can be challenging for owners on their own without the guidance of an
                            experienced separation anxiety trainer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'services',
    methods: {
        scrollTo: function(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            document.querySelector('.route').scrollTo(0, top);
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
        width: 100%;
        height: 100%;
        scroll-snap-align: start;
    }

    .section-1 {
        .separation-anxiety-header-container {
            width: 100%;
            height: 82%;
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

        .separation-anxiety-info-container {
            padding: 30px;
            width: 100%;
            height: 87%;
            max-width: 750px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .separation-anxiety-info-header {
                margin-bottom: 30px;
                margin-top: -75px;
            }

            .separation-anxiety-info-text {
                color: $secondary-text;
            }
        }
    }

    .section-3 {
        .how-does-training-work-container {
            @include bgimage;
            background-size: cover;
            background-image: url('assets/goldencutiepie.jpg');
            width: 100%;
            height: 115%;
            margin-top: -10%;
            padding-top: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            .how-does-training-work-info-container {
                width: 100%;
                height: auto;
                max-width: 800px;
                margin-top: 50px;
                background-color: #765050;
                padding: 30px;
                border-radius: 10px;
                padding: 30px 50px 49px;

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

    @media (max-width: $screen-md) {
        .section {
        }

        .section-1 {
            .separation-anxiety-header-container {
                .separation-anxiety-header {
                    font-size: 3.5em;
                }
            }

            .separation-anxiety-learn-more-button-container {
            }
        }

        .section-2 {
            .separation-anxiety-info-container {
                .separation-anxiety-info-header {
                }

                .separation-anxiety-info-text {
                }
            }
        }

        .section-3 {
            .how-does-training-work-container {
                .how-does-training-work-info-container {
                    .how-does-training-work-header-container {
                        .how-does-training-work-header {
                        }
                    }

                    .how-does-training-work-text-container {
                        .how-does-training-work-text {
                        }
                    }
                }
            }
        }
    }
}
</style>
