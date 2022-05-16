"use strict";
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './core/App.vue'

const app = createApp(App)

app.mount('#app')