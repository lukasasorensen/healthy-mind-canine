<template lang="html">
    <div class="route contact">
        <div class="contact-form-container">
            <form name="contactForm">
                <h2>Human Info</h2>

                <div class="form-group">
                    <label for="contactFormName">First and Last Name</label>
                    <input type="text" class="form-control" id="contactFormName" aria-label="First and Last Name"
                        placeholder="First and Last Name">
                </div>
                <div class="form-group">
                    <label for="contactFormPhoneNumber">Phone Number</label>
                    <input type="tel" class="form-control" id="contactFormPhoneNumber" aria-label="Phone Number"
                        placeholder="Phone Number">
                </div>
                <div class="form-group">
                    <label for="contactFormEmail">Email</label>
                    <input type="email" class="form-control" id="contactFormEmail" aria-label="email"
                        placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="contactFormAddress">Home Address</label>
                    <input type="email" class="form-control" id="contactFormAddress" aria-label="Home Address"
                        placeholder="Address">
                </div>

                <br /><br />

                <h2>Dog Info</h2>

                <div class="form-group">
                    <label for="contactFormDogName">Dog's Name</label>
                    <input type="text" class="form-control" id="contactFormDogName" aria-label="Dog's Name"
                        placeholder="Dog's Name">
                </div>
                <div class="form-group">
                    <label for="contactFormDogAge">Dog's Age</label>
                    <input type="number" class="form-control" id="contactFormDogAge" aria-label="Dog's Age"
                        placeholder="Dog's Age">
                </div>
                <div class="form-group">
                    <label for="contactFormDogOrigin">Where did you acquire your dog?</label>
                    <input type="text" class="form-control" id="contactFormDogOrigin"
                        aria-label="Where did you acquire your dog?">
                </div>
                <div class="form-group">
                    <label for="contactFormDogGender">Dog's Gender</label>
                    <select class="form-control" id="contactFormDogGender" aria-label="Select Dog's Gender">
                        <option>Intact Male</option>
                        <option>Neutered Male</option>
                        <option>Intact Female</option>
                        <option>Spayed Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="contactFormDogTimeInHome">How Long has your dog been in your home?</label>
                    <input type="text" class="form-control" id="contactFormDogTimeInHome"
                        aria-label="How Long has your dog been in your home?">
                </div>
                <div class="form-group">
                    <label for="contactFormTimeWithSA">About how long has your dog had a difficult time being
                        alone?</label>
                    <input type="text" class="form-control" id="contactFormTimeWithSA"
                        aria-label="About how long has your dog had a difficult time being alone?">
                </div>
                <div class="form-group">
                    <label for="contactFormTimeLeftAlone">How often and how long is your dog currently being left
                        alone?</label>
                    <input type="text" class="form-control" id="contactFormTimeLeftAlone"
                        aria-label="How often and how long is your dog currently being left alone?">
                </div>
                <div class="form-group">
                    <label for="contactFormCanYouAdjustSchedule">Can you adjust your schedule (or make arrangements with
                        daycare/pet sitter/friend) so that during training your dog will not have to be left
                        alone?</label>

                    <label class="radio-inline">
                        <input type="radio" name="contactFormCanYouAdjustSchedule"
                            id="contactFormCanYouAdjustScheduleYes" value="yes" checked>
                        Yes
                    </label>

                    <label class="radio-inline">
                        <input type="radio" name="contactFormCanYouAdjustSchedule"
                            id="contactFormCanYouAdjustScheduleNo" value="no">
                        No
                    </label>

                    <label class="radio-inline">
                        <input type="radio" name="contactFormCanYouAdjustSchedule"
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
                            <input type="checkbox" value="Putting your shoes on">
                            Putting your shoes on
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Putting your coat on">
                            Putting your coat on
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Grabbing your keys">
                            Grabbing your keys
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Grabbing your bag">
                            Grabbing your bag
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Wearing a specific type of clothing">
                            Wearing a specific type of clothing
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Locking the door">
                            Locking the door
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Opening the garage door">
                            Opening the garage door
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Starting your car">
                            Starting your car
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="None of the above">
                            None of the above
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label>Check all of the behaviors your dog performs when s/he is alone.</label>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Barking">
                            Barking
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Howling">
                            Howling
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Whining">
                            Whining
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Destroying furniture">
                            Destroying furniture
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Breaking out of confinement">
                            Breaking out of confinement
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Digging/scratching at a door or window">
                            Digging/scratching at a door or window
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Tearing up the carpet">
                            Opening the garage door
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Panting">
                            Panting
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Pacing">
                            Pacing
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Trembling">
                            Trembling
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Refusing to eat food">
                            Refusing to eat food
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="Looking out the window">
                            Looking out the window
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="None of the above">
                            None of the above
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="I don't know">
                            I don't know
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label for="contactFormPreviousTraining">Have you done any previous training to address your dogs separation anxiety? If yes, please explain.</label>
                    <textarea type="text" class="form-control" id="contactFormPreviousTraining" aria-label="Have you done any previous training to address your dogs separation anxiety? If yes, please explain."></textarea>
                </div>

                <div class="form-group">
                    <label for="contactFormVetDiscussion">Have you discussed your dog's separation anxiety with your veterinarian? If yes, please explain.</label>
                    <textarea type="text" class="form-control" id="contactFormVetDiscussion" aria-label="Have you discussed your dog's separation anxiety with your veterinarian? If yes, please explain."></textarea>
                </div>

                <div class="form-group">
                    <label for="contactFormGoalHomeAloneTime">How long would you like to be able to leave your dog alone in the future (specify a range such as 2-4 hours)</label>
                    <input type="text" class="form-control" id="contactFormGoalHomeAloneTime" aria-label="How long would you like to be able to leave your dog alone in the future (specify a range such as 2-4 hours)">
                </div>

                <div class="form-group">
                    <label for="contactFormMoreDogInfo">Is there anything else you think we should know about your dog?</label>
                    <textarea type="text" class="form-control" id="contactFormMoreDogInfo" aria-label="Is there anything else you think we should know about your dog?"></textarea>
                </div>

                <div class="form-group">
                    <label for="contactFormReferral">Please let us know how you heard of us so we know who to thank!</label>
                    <input type="text" class="form-control" id="contactFormReferral" aria-label="Please let us know how you heard of us so we know who to thank!">
                </div>

                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contact'
}
</script>
<style lang="scss">
.contact.route {
    display: flex;
    justify-content: center;
    ;

    .contact-form-container {
        h2 {
            margin-bottom: 15px;
        }

        text-align: left;
        padding: 20px 20px 100px 20px;
        max-width: 500px;
        width: 100%;
        position: absolute;
        top: 40px;

        .form-group {
            margin-bottom: 25px;
        }
    }
}
</style>