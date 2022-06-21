<template lang="html">
    <div class="route services">
        <section class="section section-1">
            <div class="separation-anxiety-header-container">
                <h2 class="separation-anxiety-header">What is Separation Anxiety?</h2>
                <div class="separation-anxiety-learn-more-button-container">
                    <button class="btn btn-lg btn-primary">Learn More</button>
                </div>
            </div>
        </section>
        <section class="section section-2">
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
            <div class="dog-pic"></div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'services'
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
            .separation-anxiety-header {
                font-size: 5em;
                padding-top: 7%;
                color: #fff;
                text-shadow: 0px 7px 7px rgb(0 0 0 / 56%);
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
        .dog-pic {
            @include bgimage;
            background-size: cover;
            background-image: url('assets/goldencutiepie.jpg');
            width: 100%;
            height: 100%;
            margin-top: -100px;
        }
    }
}
</style>
