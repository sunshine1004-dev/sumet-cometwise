<template>
  <div class="md-layout text-center">
    <div
      class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
    >
      <login-card header-color="green">
        <h4 slot="title" class="title">
          {{ this.$S_i18n.t("BF_LOGIN_FORM_TITLE") }}
        </h4>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>{{ this.$S_i18n.t("BF_LOGIN_FORM_EMAIL") }}</label>
          <md-input v-model="email" type="email"></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>
            lock_outline
          </md-icon>
          <label>
            {{ this.$S_i18n.t("BF_LOGIN_FORM_PASSWORD") }}
          </label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>

        <md-button
          slot="footer"
          class="md-round md-success md-lg align-center"
          @click="login()"
        >
          {{ this.$S_i18n.t("BF_LOGIN_FORM_SUBMIT") }}
        </md-button>

        <div class="md-layout" slot="subfooter">
          <div class="md-layout-item md-size-100" v-if="error_seen_login">
            <p class="description text-center text-danger">
              {{ this.$S_i18n.t("BF_LOGIN_ERROR") }}
            </p>
          </div>
          <div class="md-layout-item md-size-100">
            <a
              href="#/reset"
              class="text-gray"
              style="text-decoration:underline;"
            >
              {{ this.$S_i18n.t("BF_LOGIN_RESET_LINK") }}
            </a>
          </div>
          <div class="md-layout-item md-size-100">
            <p class="description text-center underline">
              {{ this.$S_i18n.t("BF_LOGIN_REGISTER_LABEL") }}
              <a
                href="#/register"
                style="margin-top:-15px; text-decoration:underline;"
              >
                {{ this.$S_i18n.t("BF_LOGIN_REGISTER_LINK") }}
              </a>
            </p>
          </div>
        </div>
      </login-card>
      <!-- <bf-cookie-card /> -->
    </div>
  </div>
</template>
<script>
import { LoginCard } from "@/components";
import { BfCookieCard } from "@/components";

export default {
  components: {
    LoginCard
    // BfCookieCard
  },
  data() {
    return {
      error_seen_login: false,
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      this.error_seen_login = false; // Set error to false during communication

      this.$BF_Services.data = {
        user: this.email,
        pass: this.password
      };

      this.$BF_Services.login().then(
        response => {
          //console.log(response.data);
          this.$router.push("/dashboard");
        },
        error => {
          this.error_seen_login = true;
          this.$router.push("/dashboard");
        }
      );
    }
  }
};
</script>

<style></style>
