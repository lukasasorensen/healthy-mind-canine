<template lang="html">
    <footer>
        <div class="social-media-icons">
            <div class="social-media-icons-inner-container">
                <a href="https://www.facebook.com/HealthyMindCanine" class="facebook-link social-media-icon"
                    target="_blank">
                    <font-awesome-icon class="fa-lg" icon="fa-brands fa-facebook" />
                </a>
                <a href="https://www.instagram.com/healthymindcanine/" class="instagram-link social-media-icon"
                    target="_blank">
                    <font-awesome-icon class="fa-lg" icon="fa-brands fa-instagram" />
                </a>
                <a href="mailto:lauren@healthymindcanine.com" class="email-link social-media-icon" target="_blank">
                    <font-awesome-icon class="fa-lg" icon="fa-solid fa-envelope" />
                </a>
                <a href="tel:+16125679390" class="phone-link social-media-icon" target="_blank">
                    <font-awesome-icon class="fa-lg" icon="fa-solid fa-phone" />
                </a>
            </div>
        </div>
        <div class="contact-info">
            <div class="hidden-xs">
                <a href="mailto:lauren@healthymindcanine.com">lauren@healthymindcanine.com</a> | <a
                    href="tel:+16125679390">(612) 567-9390</a>
            </div>
            <div class="visible-xs">
                <a href="mailto:lauren@healthymindcanine.com">lauren@healthymindcanine.com</a><br><br><a
                    href="tel:+16125679390">(612) 567-9390</a>
            </div>
        </div>
        <div class="certs">
            <div class="certs-inner-container">
                <div class="cert cpdt">
                </div>
                <div class="cert fear-free">
                </div>
                <div class="cert sapdt"></div>
                <div class="cert pt"></div>
            </div>
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
    height: 270px;
    background: white;
    padding: 40px;
    box-sizing: border-box;
    z-index: 999996;
    position: absolute;
    scroll-snap-align: end;

    .certs {
        width: 100%;
        height: 55px;
        display: flex;
        justify-content: center;
        margin-top: 40px;

        .certs-inner-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 850px;
            height: 100%;

            .cert {
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                height: 100%;
                width: 29%;
                display: inline-block;
            }
        }

    }

    .social-media-icons {
        width: 100%;
        display: flex;
        justify-content: center;

        .social-media-icons-inner-container {
            width: 100%;
            max-width: 500px;
            display: flex;
            justify-content: space-evenly;

            .social-media-icon {
                color: $primary-color;
                cursor: pointer;

                &:hover {
                    transform: scale(150%);
                    transition: transform 0.1s ease-in-out;
                }
            }
        }
    }

    .contact-info {
        color: $primary-color;
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }
}

.cert {
    &.cpdt {
        background-image: url("assets/CPDT.png");
    }
    
    &.fear-free {
        background-image: url("assets/FEAR_FREE_CERT.png");
    }
    
    &.sapdt {
        background-image: url("assets/sapdt.png");
        
    }
    
    &.pt {
        background-image: url("assets/PTbadge.png");
    }
}

@media (max-width: $screen-md) {
    footer {
        padding: 20px 40px;
    }
}
</style>