<template lang="html">
    <div class="route contact">
        <div class="col-xs-12 loading-container" v-if="!isIframeLoaded">
            <font-awesome-icon class="loading-icon fa-4x" icon="fa-solid fa-circle-notch" spin/>
            <p>Loading Contact Form...</p>
        </div>

        <div class="contact-form-container col-xs-12" v-show="isIframeLoaded">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdqVyYRfMboPfCJesWLbhUYjXsTwnTxLFZE6hvUoKx9OEN82g/viewform?embedded=true"
                width="640" height="4346" frameborder="0" marginheight="0" marginwidth="0" ref="frame" @load="onIframeLoad">Loading…</iframe>
        </div>

        <!-- <div class="contact-form-header-container col-xs-12">
            <h1></h1>
        </div> -->

        <!-- <div class="contact-form-container col-xs-12">
            <form name="contactForm" ref="contact_form" novalidate :class="{ 'dirty': isFormDirty }">
                <h2>Human Info</h2>

                <div class="form-group">
                    <label for="contactFormName">First and Last Name</label>
                    <input required type="text" class="form-control" name="contactFormName" id="contactFormName"
                        aria-label="First and Last Name" placeholder="First and Last Name">
                </div>
                <div class="form-group">
                    <label for="contactFormPhoneNumber">Phone Number</label>
                    <input required type="tel" class="form-control" name="contactFormPhoneNumber"
                        id="contactFormPhoneNumber" aria-label="Phone Number" placeholder="Phone Number">
                </div>
                <div class="form-group">
                    <label for="contactFormEmail">Email</label>
                    <input required type="email" class="form-control" name="contactFormEmail" id="contactFormEmail"
                        aria-label="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="contactFormAddress">Home Address</label>
                    <input required type="email" class="form-control" name="contactFormAddress" id="contactFormAddress"
                        aria-label="Home Address" placeholder="Address">
                </div>

                <br /><br />

                <h2>Dog Info</h2>

                <div class="form-group">
                    <label for="contactFormDogName">Dog's Name</label>
                    <input required type="text" class="form-control" name="contactFormDogName" id="contactFormDogName"
                        aria-label="Dog's Name" placeholder="Dog's Name">
                </div>
                <div class="form-group">
                    <label for="contactFormDogAge">Dog's Age</label>
                    <input required type="number" class="form-control" name="contactFormDogAge" id="contactFormDogAge"
                        aria-label="Dog's Age" placeholder="Dog's Age">
                </div>
                <div class="form-group">
                    <label for="contactFormDogOrigin">Where did you acquire your dog?</label>
                    <input required type="text" class="form-control" name="contactFormDogOrigin"
                        id="contactFormDogOrigin" aria-label="Where did you acquire your dog?">
                </div>
                <div class="form-group">
                    <label for="contactFormDogGender">Dog's Gender</label>
                    <select class="form-control" name="contactFormDogGender" id="contactFormDogGender"
                        aria-label="Select Dog's Gender">
                        <option>Intact Male</option>
                        <option>Neutered Male</option>
                        <option>Intact Female</option>
                        <option>Spayed Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="contactFormDogTimeInHome">How Long has your dog been in your home?</label>
                    <input required type="text" class="form-control" name="contactFormDogTimeInHome"
                        id="contactFormDogTimeInHome" aria-label="How Long has your dog been in your home?">
                </div>
                <div class="form-group">
                    <label for="contactFormTimeWithSA">About how long has your dog had a difficult time being
                        alone?</label>
                    <input required type="text" class="form-control" name="contactFormTimeWithSA"
                        id="contactFormTimeWithSA"
                        aria-label="About how long has your dog had a difficult time being alone?">
                </div>
                <div class="form-group">
                    <label for="contactFormTimeLeftAlone">How often and how long is your dog currently being left
                        alone?</label>
                    <input required type="text" class="form-control" name="contactFormTimeLeftAlone"
                        id="contactFormTimeLeftAlone"
                        aria-label="How often and how long is your dog currently being left alone?">
                </div>
                <div class="form-group">
                    <label for="contactFormCanYouAdjustSchedule">Can you adjust your schedule (or make arrangements with
                        daycare/pet sitter/friend) so that during training your dog will not have to be left
                        alone?</label>

                    <label class="radio-inline">
                        <input required type="radio" name="contactFormCanYouAdjustSchedule"
                            id="contactFormCanYouAdjustScheduleYes" value="yes" checked>
                        Yes
                    </label>

                    <label class="radio-inline">
                        <input required type="radio" name="contactFormCanYouAdjustSchedule"
                            id="contactFormCanYouAdjustScheduleNo" value="no">
                        No
                    </label>

                    <label class="radio-inline">
                        <input required type="radio" name="contactFormCanYouAdjustSchedule"
                            id="contactFormCanYouAdjustScheduleMaybe" value="maybe">
                        Maybe
                    </label>
                </div>
                <br><br>
                <h2>Separation Anxiety Questions</h2>

                <div class="form-group">
                    <label>Do any of the following things seem to tip your dog off to your departure?</label>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Putting your shoes on">
                            Putting your shoes on
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Putting your coat on">
                            Putting your coat on
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Grabbing your keys">
                            Grabbing your keys
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Grabbing your bag">
                            Grabbing your bag
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox"
                                value="Wearing a specific type of clothing">
                            Wearing a specific type of clothing
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Locking the door">
                            Locking the door
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Opening the garage door">
                            Opening the garage door
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="Starting your car">
                            Starting your car
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="leavingTriggers" type="checkbox" value="None of the above">
                            None of the above
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label>Check all of the behaviors your dog performs when s/he is alone.</label>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Barking">
                            Barking
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Howling">
                            Howling
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Whining">
                            Whining
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Destroying furniture">
                            Destroying furniture
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox"
                                value="Breaking out of confinement">
                            Breaking out of confinement
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox"
                                value="Digging/scratching at a door or window">
                            Digging/scratching at a door or window
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Tearing up the carpet">
                            Opening the garage door
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Panting">
                            Panting
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Pacing">
                            Pacing
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Trembling">
                            Trembling
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Refusing to eat food">
                            Refusing to eat food
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="Looking out the window">
                            Looking out the window
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="None of the above">
                            None of the above
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input required v-model="behaviorsWhenAlone" type="checkbox" value="I don't know">
                            I don't know
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label for="contactFormPreviousTraining">Have you done any previous training to address your dogs
                        separation anxiety? If yes, please explain.</label>
                    <textarea required type="text" class="form-control" name="contactFormPreviousTraining"
                        id="contactFormPreviousTraining"
                        aria-label="Have you done any previous training to address your dogs separation anxiety? If yes, please explain."></textarea>
                </div>

                <div class="form-group">
                    <label for="contactFormVetDiscussion">Have you discussed your dog's separation anxiety with your
                        veterinarian? If yes, please explain.</label>
                    <textarea required type="text" class="form-control" name="contactFormVetDiscussion"
                        id="contactFormVetDiscussion"
                        aria-label="Have you discussed your dog's separation anxiety with your veterinarian? If yes, please explain."></textarea>
                </div>

                <div class="form-group">
                    <label for="contactFormGoalHomeAloneTime">How long would you like to be able to leave your dog alone
                        in the future (specify a range such as 2-4 hours)</label>
                    <input required type="text" class="form-control" name="contactFormGoalHomeAloneTime"
                        id="contactFormGoalHomeAloneTime"
                        aria-label="How long would you like to be able to leave your dog alone in the future (specify a range such as 2-4 hours)">
                </div>

                <div class="form-group">
                    <label for="contactFormMoreDogInfo">Is there anything else you think we should know about your
                        dog?</label>
                    <textarea type="text" class="form-control" name="contactFormMoreDogInfo" id="contactFormMoreDogInfo"
                        aria-label="Is there anything else you think we should know about your dog?"></textarea>
                </div>

                <div class="form-group">
                    <label for="questions">Do you have any questions for us?</label>
                    <input type="text" class="form-control" name="questions" id="questions"
                        aria-label="Please let us know how you heard of us so we know who to thank!">
                </div>
                <p class="form-invalid-message" v-if="!isFormValid">Please fill out all required fields</p>
                <div class="submit-form-button-container">
                    <button type="button" class="submit-form-button btn btn-primary btn-lg"
                        @click="sendEmail">Submit</button>
                </div>
            </form>
        </div> -->
    </div>
</template>
<script>
import { useMeta } from 'vue-meta';

export default {
    name: 'Contact',
    methods: {
        sendEmail: function () {
            this.isFormDirty = true;
            var formData = Object.fromEntries(new FormData(this.$refs.contact_form));
            console.log(formData, null, 2);
            console.log('behaviorsWhenAlone');
            console.log(this.behaviorsWhenAlone, null, 2);
            console.log('leavingTriggers')
            console.log(this.leavingTriggers, null, 2);

            this.isFormValid = this.$refs.contact_form.checkValidity();

            if (!this.isFormValid) return;
        },
        onIframeLoad: function () {
            this.isIframeLoaded = true;
        }
    },
    data() {
        return {
            behaviorsWhenAlone: [],
            leavingTriggers: [],
            isFormValid: true,
            isFormDirty: false,
            isIframeLoaded: false
        }
    },
    setup() {
        useMeta({
            title: 'Contact Us | Healthy Mind Canine | Dog Separation Anxiety Training',
            description: 'Contact us about our customized separation anxiety dog training. It all starts with a virtual initial consultation so we can assess your dog and walk you through our training program. Don\'t wait! Get started today and regain your freedom.'
        })
    }
}
</script>
<style lang="scss">
@import '@/scss/_variables';

.contact.route {
    display: flex;
    justify-content: center;

    .loading-container {
        width: 100%;
        text-align: center;
        margin-top: 200px;

        .loading-icon {
            margin-bottom: 20px;
            color: $primary-color;
        }
    }

    .contact-form-container {
        h2 {
            margin-bottom: 15px;
        }

        text-align: left;
        padding: 20px 20px 100px 20px;
        // max-width: 500px;
        width: 100%;
        position: absolute;

        display: flex;
        justify-content: center;
        height: 100%;
        padding-bottom: 200px;

        iframe {
            height: calc(100vh - 120px);
        }


        form {
            &.dirty {

                input,
                textarea {
                    &:invalid {
                        border-color: red;
                    }
                }
            }
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-invalid-message {
            color: red;
            font-size: 1em;
        }

        .submit-form-button-container {
            display: flex;
            justify-content: center;
            margin-top: 50px;
        }
    }
}
</style>
