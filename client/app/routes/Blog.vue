<template lang="html">
    <div class="route blog">
        <div class="col-xs-12 loading-container" v-if="!isIframeLoaded">
            <font-awesome-icon class="loading-icon fa-4x" icon="fa-solid fa-circle-notch" spin />
            <p>Loading Contact Form...</p>
        </div>

        <div class="blog-iframe-container col-xs-12" v-show="isIframeLoaded">
            <iframe src="https://blog.healthymindcanine.com/" width="100%" height="100%" frameborder="0" marginheight="0"
                marginwidth="0" ref="frame" @load="onIframeLoad">Loading…</iframe>
        </div>
    </div>
</template>
<script>
import { useMeta } from 'vue-meta';
import Footer from "../components/Footer";

export default {
    name: 'Blog',
    methods: {
        onIframeLoad: function () {
            this.isIframeLoaded = true;
        }
    },
    components: {
        Footer
    },
    data() {
        return {
            isIframeLoaded: false
        }
    },
    setup() {
        useMeta({
            title: 'Blog | Healthy Mind Canine | Dog Separation Anxiety Training',
            description: 'Our certified dog separation anxiety experts provide custom coaching & training for pets and their guardians no matter where they live. We use the most effective methods available to give you the best chance of success!'
        })
    }
}
</script>
<style lang="scss">
@import '@/scss/_variables';

.blog.route {
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

    .blog-iframe-container {
        h2 {
            margin-bottom: 15px;
        }

        text-align: left;
        padding: 0;
        // max-width: 500px;
        width: 100%;

        display: flex;
        justify-content: center;
        height: 100%;

        iframe {
            height: 100%;
            width: 100%;
        }
    }
}
</style>
