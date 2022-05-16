"use strict";

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../routes/Home.vue";
import About from "../routes/About.vue";
import FAQ from "../routes/FAQ.vue";
import Contact from "../routes/Contact.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "hash",
	routes: [
		{ path: "/", component: Home },
		{ path: "/home", component: Home },
		{ path: "/about", component: About },
		{ path: "/faq", component: FAQ },	
		{ path: "/contact", component: Contact }
	]
});