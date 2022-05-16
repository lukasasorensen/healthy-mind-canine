import VueI18n from "../../../node_modules/vue-i18n/dist/vue-i18n.runtime.global";

// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const translations = {
  en: {
    message: {
      hello: "hello world",
    },
  },
};

// 2. Create i18n instance with options
const i18n = VueI18n.createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  translations, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

module.exports = i18n;
