"use strict";
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './core/App.vue'
import router from './core/router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faVideo, faWifi, faLaptop, faMobile } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faVideo, faWifi, faLaptop, faMobile)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')