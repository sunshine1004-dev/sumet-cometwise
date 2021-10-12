<template>
  <div class="md-layout text-center">
    <div
      class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
    >
      <reset-card header-color="green">
        <h4 slot="title" class="title">
          {{ this.$S_i18n.t("BF_RESET_FORM_TITLE") }}
        </h4>

        <p slot="description" class="description text-center">
          {{ this.$S_i18n.t("BF_RESET_FORM_SUBTITLE") }}
        </p>

        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>{{ this.$S_i18n.t("BF_LOGIN_FORM_EMAIL") }}</label>
          <md-input v-model="email" type="email"></md-input>
        </md-field>

        <md-button
          slot="footer"
          class="md-round md-success align-center"
          @click="reset()"
        >
          {{ this.$S_i18n.t("BF_RESET_FORM_SUBMIT") }}
        </md-button>

        <div class="md-layout" slot="subfooter" style="margin-bottom:20px;">
          <div
            class="md-layout-item md-size-100 text-success"
            v-if="email_sent"
          >
            <p>
              {{ this.$S_i18n.t("BF_RESET_FORM_CONFIRMATION_SUBTITLE") }}
            </p>
          </div>
          <div class="md-layout-item md-size-100 " v-if="error_empty_email">
            <p class="description text-center text-danger">
              {{ this.$S_i18n.t("BF_RESET_EMAIL_ERROR") }}
            </p>
          </div>
          <div class="md-layout-item md-size-100 " v-if="error_submit">
            <p class="description text-center text-danger">
              {{ this.$S_i18n.t("BF_RESET_SUBMIT_ERROR") }}
            </p>
          </div>

          <div class="md-layout-item md-size-100">
            <a href="#/login" style="text-decoration:underline;">
              {{ this.$S_i18n.t("BF_RESET_LOGIN_LABEL") }}
            </a>
          </div>
        </div>
      </reset-card>
    </div>
  </div>
</template>

<script>
import { ResetCard } from "@/components";

export default {
  components: {
    ResetCard
  },
  data() {
    return {
      email: "",
      email_sent: false,
      error_submit: false,
      error_empty_email: false
    };
  },
  methods: {
    reset() {
      this.error_submit = false;
      this.error_empty_email = false;

      if (this.email == "") {
        this.error_empty_email = true;
        return;
      }

      this.$BF_Services.data = { email: this.email };

      this.$BF_Services.resetPassword().then(
        response => {
          this.email_sent = true;
        },
        error => {
          this.error_submit = true;
          this.email_sent = false;
          this.email = "";
          this.error_seen_login = true;
        }
      );
    }
  }
};
</script>

<style></style>
