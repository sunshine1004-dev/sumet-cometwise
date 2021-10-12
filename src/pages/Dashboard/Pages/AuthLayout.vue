<template>
  <div class="full-page" :class="{ 'nav-open': $sidebar.showSidebar }">
    <md-toolbar md-elevation="0" class="md-transparent md-toolbar-absolute">
      <div class="md-toolbar-row md-offset">
        <!-- S_START
        <div class="md-toolbar-section-start">
          <h3 class="md-title">{{ $route.name }}</h3>
        </div>
       S_END -->
        <!-- S_START -->
        <div class="md-toolbar-section-start">
          <img v-bind:src="'./img/' + s_applogo" width="200px" />
        </div>
        <!-- S_END -->
        <div class="md-toolbar-section-end">
          <md-button
            class="md-just-icon md-simple md-round md-toolbar-toggle"
            :class="{ toggled: $sidebar.showSidebar }"
            @click="toggleSidebar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </md-button>

          <div
            class="md-collapse"
            :class="{ 'off-canvas-sidebar': responsive }"
          >
            <md-list>
              <!-- S_START
              <md-list-item href="/">
                <md-icon>dashboard</md-icon>
                Dashboard
              </md-list-item>
             S_END -->
              <md-list-item href="#/pricing" @click="linkClick">
                <md-icon>attach_money</md-icon>
                {{ this.$S_i18n.t("BF_PRICING_NAME") }}
              </md-list-item>
              <md-list-item href="#/register" @click="linkClick">
                <md-icon>person_add</md-icon>
                {{ this.$S_i18n.t("BF_REGISTER_TITLE") }}
              </md-list-item>
              <md-list-item href="#/login" @click="linkClick">
                <md-icon>fingerprint</md-icon>
                {{ this.$S_i18n.t("BF_LOGIN_NAME") }}
              </md-list-item>
              <!-- S_START
              <md-list-item href="#/lock" @click="linkClick">
                <md-icon>lock_open</md-icon>
                lock
              </md-list-item>
             S_END -->
            </md-list>
          </div>
        </div>
      </div>
    </md-toolbar>
    <div class="wrapper wrapper-full-page" @click="toggleSidebarPage">
      <div
        class="page-header header-filter"
        :class="setPageClass"
        filter-color="black"
        :style="setBgImage"
      >
        <div class="container md-offset">
          <zoom-center-transition
            :duration="pageTransitionDuration"
            mode="out-in"
          >
            <router-view></router-view>
          </zoom-center-transition>
        </div>
        <footer class="footer">
          <div class="container md-offset">
            <nav>
              <ul>
                <li>
                  <router-link :to="{ path: '/contact' }">
                    {{ this.$S_i18n.t("BF_FOOTER_CONTACT_US") }}
                  </router-link>
                </li>
                <li>
                  <a href="https://suments.com/es/terminos-y-condiciones/">
                    {{ this.$S_i18n.t("BF_FOOTER_TERMS_AND_CONDITIONS") }}
                  </a>
                </li>
                <li>
                  <a
                    href="https://suments.com/es/privacidad-y-proteccion-de-datos/"
                  >
                    {{ this.$S_i18n.t("BF_FOOTER_NOTICE_PRIVACY") }}
                  </a>
                </li>
                <li>
                  <a href="https://suments.com/es/terminos-y-condiciones/">
                    {{ this.$S_i18n.t("BF_FOOTER_NOTICE_LEGAL") }}
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright text-center">
              &copy; {{ new Date().getFullYear() }}
              <a href="https://www.suments.com" target="_blank">
                {{ this.$S_i18n.t("BF_FOOTER_COPYRIGHT") }} </a
              >,
              <span class="material-icons">
                lock
              </span>
              {{ this.$S_i18n.t("BF_FOOTER_COPYRIGHT_SLOGAN") }}
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    ZoomCenterTransition
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black"
    }
  },
  inject: {
    autoClose: {
      default: true
    }
  },
  data() {
    return {
      s_applogo: process.env.VUE_APP_BF_MAIN_LOGO,
      VUE_APP_BF_EXT_SUMENTS: process.env.VUE_APP_BF_EXT_SUMENTS,
      responsive: false,
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 300,
      year: new Date().getFullYear()
    };
  },
  computed: {
    setBgImage() {
      var images = {
        Pricing: process.env.VUE_APP_BF_PRICING_BACKGROUND_IMAGE,
        Login: process.env.VUE_APP_BF_LOGIN_BACKGROUND_IMAGE,
        Register: process.env.VUE_APP_BF_REGISTER_BACKGROUND_IMAGE,
        Landing: process.env.VUE_APP_BF_LANDING_BACKGROUND_IMAGE,
        Reset: process.env.VUE_APP_BF_RESET_BACKGROUND_IMAGE
      };
      return {
        backgroundImage: `url(${images[this.$route.name]})`
      };
    },
    setPageClass() {
      return `${this.$route.name}-page`.toLowerCase();
    }
  },
  methods: {
    toggleSidebarPage() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    linkClick() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      this.showMenu = false;
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    this.closeMenu();
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  }
};
</script>
<style lang="scss" scoped>
$scaleSize: 0.1;
$zoomOutStart: 0.7;
$zoomOutEnd: 0.46;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}
.wrapper-full-page .zoomIn {
  animation-name: zoomIn8;
}
@keyframes zoomOut8 {
  from {
    opacity: 1;
    transform: scale3d($zoomOutStart, $zoomOutStart, $zoomOutStart);
  }
  to {
    opacity: 0;
    transform: scale3d($zoomOutEnd, $zoomOutEnd, $zoomOutEnd);
  }
}
.wrapper-full-page .zoomOut {
  animation-name: zoomOut8;
}
</style>
