<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_NAME_FIRST") }}
              </label>
              <md-input v-model="firstname" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_EMAIL") }}
              </label>
              <md-input v-model="email" type="email" required></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_COMPANY") }}
              </label>
              <md-input v-model="company" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_WEB") }}
              </label>
              <md-input v-model="web" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_CONTACT_US_FORM_ISSUE") }}
              </label>
              <md-input v-model="issue" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_CONTACT_US_FORM_MESSAGE") }}Escribe aquí
                tu consulta</label
              >
              <md-textarea v-model="message" type="text" required></md-textarea>
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

          <div
            class="md-layout-item md-size-100"
            v-if="chk_term_mandatory_visible"
          >
            <p class="description text-left text-danger">
              {{
                this.$S_i18n.t("BF_REGISTER_FORM_TERMS_AND_CONDITIONS_ACCEPT")
              }}
            </p>
          </div>

          <div class="md-layout-item md-size-100" v-if="error_missing_values">
            <p class="description text-left text-danger">
              {{ this.$S_i18n.t("BF_LANDING_FORM_MISSING_VALUES") }}
            </p>
          </div>

          <div class="md-layout-item md-size-100 " v-if="error_seen_contact">
            <p class="description text-center text-danger">
              {{ this.$S_i18n.t("BF_LANDING_FORM_SUBMIT_ERROR") }}
            </p>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success mt-4" @click="send()">
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
  name: "contact-us-form",
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
      company: "",
      email: "",
      firstname: "",
      web: "",
      issue: "",
      message: "",
      chk_consent: false,
      chk_term_mandatory_visible: false,
      error_seen_contact: false,
      error_missing_values: false
    };
  },
  methods: {
    send() {
      this.chk_term_mandatory_visible = false;
      this.error_seen_contact = false;
      this.error_missing_values = false;

      if (!this.terms_and_conditions) {
        this.chk_term_mandatory_visible = true;
        return;
      }
      this.$BF_Services.data = {
        firstname: this.firstname,
        email: this.email,
        company: this.company,
        web: this.web,
        consent_marketing: this.consent
      };

      for (var [key, value] of Object.entries(data)) {
        if (value == "") {
          this.error_missing_values = true;
          return;
        }
      }

      this.$BF_Services.landingContact().then(
        response => {
          //console.log(response.data);
        },
        error => {
          this.error_seen_contact = true;
        }
      );
    },

    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>
<style></style>
