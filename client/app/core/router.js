'use strict';
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../routes/Home.vue';
import About from '../routes/About.vue';
import Contact from '../routes/Contact.vue';
import Services from '../routes/Services.vue';

export default createRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '/services', component: Services },
        { path: '/separation-anxiety', component: Services }
    ],
    history: createWebHashHistory()
});
