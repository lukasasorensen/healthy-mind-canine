"use strict";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../routes/Home.vue";
import About from "../routes/About.vue";
import FAQ from "../routes/FAQ.vue";
import Contact from "../routes/Contact.vue";

export default createRouter({
	mode: "hash",
	routes: [
		{ path: "/", component: Home },
		{ path: "/home", component: Home },
		{ path: "/about", component: About },
		{ path: "/faq", component: FAQ },	
		{ path: "/contact", component: Contact }
	],
	history: createWebHashHistory()
});