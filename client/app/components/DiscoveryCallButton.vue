<template lang="html">
    <div class="big-discovery-call-button-container">
        <a href="https://calendly.com/healthymindcanine/discovery-call" target="_blank" role="button"
            class="btn btn-md discovery-call-button">
            Book a FREE Discovery Call! &nbsp;
            <font-awesome-icon class="fa-lg" icon="fa-solid fa-phone" />
        </a>
    </div>
</template>
<script>
export default {
    name: 'BigDiscoveryCallButton'
}
</script>
<style lang="scss">
@import "@/scss/_variables";

.big-discovery-call-button-container {
    padding: 8px;
    // background-color: rgba(91, 87, 87, 0.666);
    // background-color: #08aeea;
    // background-image: linear-gradient(336deg, #08aeea 0%, #2af598 100%);

    background-color: #d891ea;
    background-image: linear-gradient(336deg, #d891ea 0%, #2AF598 100%);


    border-radius: 8px;
    box-shadow: 2px 5px 11px 5px rgba(0, 0, 0, 0.3);

    .discovery-call-button {
        // background-color: #08aeea;
        // background-image: linear-gradient(336deg, #08aeea 0%, #2af598 100%);
        color: #152532;
        text-decoration: none;
    }
}
</style>