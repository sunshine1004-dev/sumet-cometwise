<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#/contact">
              {{ this.$S_i18n.t("BF_FOOTER_CONTACT_US") }}
            </a>
          </li>
          <li>
            <a href="https://suments.com/es/terminos-y-condiciones/">
              {{ this.$S_i18n.t("BF_FOOTER_TERMS_AND_CONDITIONS") }}
            </a>
          </li>
          <li>
            <a href="https://suments.com/es/privacidad-y-proteccion-de-datos/">
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
        <bf-cookie-card />
      </div>
    </div>
  </footer>
</template>
<script>
import { BfCookieCard } from "@/components";
export default {
  components: {
    BfCookieCard
  },
  mounted() {}
};
</script>
