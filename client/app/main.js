"use strict";
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './core/App.vue'
import router from './core/router';

const app = createApp(App)

app.use(router);
app.mount('#app')