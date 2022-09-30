'use strict';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../routes/Home.vue';
import About from '../routes/About.vue';
import Contact from '../routes/Contact.vue';
import Services from '../routes/Services.vue';
import Pricing from '../routes/Pricing.vue';
import FAQ from "../routes/FAQ.vue";
import Resources from "../routes/Resources.vue";

export default createRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '/services', component: Services },
        { path: '/separation-anxiety', component: Services },
        { path: '/pricing', component: Pricing },
        { path: '/faq', component: FAQ },
        { path: '/resources', component: Resources }
    ],
    history: createWebHistory()
});
