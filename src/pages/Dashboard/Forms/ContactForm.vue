<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_COMPANY") }}
              </label>
              <md-input v-model="disabled"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_EMAIL") }}
              </label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_NAME_FIRST") }}
              </label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_NAME_LAST") }}
              </label>
              <md-input v-model="web" type="text"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <p class="description">
              {{ this.$S_i18n.t("BF_LANDING_FORM_CONSENT_LEGAL") }}
              <a>{{
                this.$S_i18n.t("BF_LANDING_FORM_CONSENT_LEGAL_WEB_LINK")
              }}</a>
            </p>
          </div>
          <div class="md-layout-item md-size-100">
            <md-checkbox v-model="terms_and_conditions">
              {{ this.$S_i18n.t("BF_LANDING_FORM_CONSENT_LEGAL") }}
            </md-checkbox>
          </div>
          <div class="md-layout-item md-size-100">
            <md-checkbox v-model="consent">
              {{ this.$S_i18n.t("BF_LANDING_FORM_CONSENT_COMMERCIAL") }}
            </md-checkbox>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success mt-4">
              {{ this.$S_i18n.t("BF_LANDING_FORM_SUBMIT") }}
            </md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "contact-form",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      terms_and_conditions: false,
      consent: false,
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme: ""
    };
  },
  methods: {
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>
<style></style>
