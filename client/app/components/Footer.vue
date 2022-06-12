<template lang="html">
    <footer>
        <div class="cert cpdt">
        </div>
        <div class="cert fear-free">
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss">
    @import "@/scss/_variables";
    footer {
        width: 100%;
        height: 200px;
        background: white;
        padding: 65px;
        box-sizing: border-box;
    }

    .cert {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        width: 30%;
        display: inline-block;
        margin-right: 30px;
    }

    .cpdt {
        background-image: url("assets/CPDT.png");
    }

    .fear-free {
        background-image: url("assets/FEAR_FREE_CERT.png");
    }
</style>