import Vue from "vue/dist/vue.js";
import VueI18n from "vue-i18n";
import BF_ES from "./S_i18n_locales/bf_es";
import BF_EN from "./S_i18n_locales/bf_en";
import APP_EN from "./S_i18n_locales/app_en";
import APP_ES from "./S_i18n_locales/app_es";
import FORMATS from "./S_i18n_locales/formats";

Vue.use(VueI18n);

var lang_user_browser = navigator.language.split("-");
var lang_default = "";

if (lang_user_browser.length > 1) {
  lang_default = lang_user_browser[0];
} else {
  lang_default = lang_user_browser;
}

const messages = {
  es: Object.assign(BF_ES, APP_ES),
  en: Object.assign(BF_EN, APP_EN)
};

export default new VueI18n({
  locale: lang_default,
  fallbackLocale: process.env.VUE_APP_LANGUAGES_FALLBACK,
  messages,
  silentTranslationWarn: true,
  FORMATS
});
