<template lang="html">
    <footer>
        <div class="cert cpdt">
        </div>
        <div class="cert fear-free">
        </div>
        <div class="cert sapdt"></div>
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
    z-index: 2147483647;
    position: absolute;
    scroll-snap-align: end;
    display: flex;
    justify-content: space-between;

    .cert {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        width: 29%;
        display: inline-block;
    }
}


.cpdt {
    background-image: url("assets/CPDT.png");
}

.fear-free {
    background-image: url("assets/FEAR_FREE_CERT.png");
}

.sapdt {
    background-image: url("assets/sapdt.png");
}

@media (max-width: $screen-md) {
    footer {
        display: flex;
        justify-content: space-between;
        height: 120px;
        padding: 20px 40px;
    }
}
</style>