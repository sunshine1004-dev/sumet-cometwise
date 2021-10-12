// =========================================================
// * Vue Material Dashboard PRO - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";

// Plugins
import App from "./App.vue";
import Chartist from "chartist";

// router setup
import routes from "./routes/routes";

//#####################
//  S_START
//import GSignInButton from 'vue-google-signin-button'
import { BF_CookieCard } from "./components";
import BFS from "@/services/BFS";
import APPS from "@/services/APPS";
import S_axios from "./plugins/S_axios";
import S_i18n from "./plugins/S_i18n";
import VueGtag from "vue-gtag";
//  S_END
//#####################

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  linkExactActiveClass: "nav-item active"
});

// global library setup
Vue.prototype.$Chartist = Chartist;

//#####################
//  S_START
Vue.prototype.$BF_Services = new BFS(router);
Vue.prototype.$APP_Services = new APPS(router);
Vue.prototype.$S_axios = new S_axios();
Vue.prototype.$S_i18n = S_i18n;

router.beforeEach((to, from, next) => {
  // JAVI TODO:
  // La manera buena de hacer esto es que las páginas que requieran autenticación lleven un prefijo, o estén dentro de un path:
  //      [...]/app/user
  //      [...]/app/dasboard
  //      [...]/app/blablabla
  // Mientras tanto, vamos a comprobar las páginas que NO necesitan autenticación a capón:

  if (from.path != "/login") {
    var to_check = ["/login", "/pricing", "/register", "/reset", "/landing"];
    for (var i = 0; i < to_check.length; i++) {
      if (to.path === to_check[i]) {
        next();
        return;
      }
    }
    if (localStorage.getItem("token")) {
      // console.log(localStorage.getItem("BF_token"));
      next();
      return;
    } else {
      router.push("/login");
    }
  } else {
    // console.log("origin_login");
    next();
    return;
  }
});

// GOOGLE ANALYTICS
Vue.use(
  VueGtag,
  {
    config: {
      id: process.env.VUE_APP_GOOGLE_ANALYTICS_TAG
    }
  },
  router
);

//#####################

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  beforeDestroy() {
    localStorage.clear();
  }
});
