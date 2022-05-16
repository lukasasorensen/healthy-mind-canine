"use strict";

require("es6-promise/auto");

import Vue from "vue";

import store from "./core/store";

import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)

app.use(store);