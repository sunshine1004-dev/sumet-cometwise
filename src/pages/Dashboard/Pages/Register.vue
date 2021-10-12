<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <register-card>
        <h2 class="title text-center" slot="title">
          {{ this.$S_i18n.t("BF_REGISTER_TITLE") }}
        </h2>
        <div
          class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 ml-auto"
          slot="content-left"
        >
          <div
            class="info info-horizontal"
            v-for="item in contentLeft"
            :key="item.title"
          >
            <div :class="`icon ${item.colorIcon}`">
              <md-icon>{{ item.icon }}</md-icon>
            </div>
            <div class="description">
              <h4 class="info-title">{{ item.title }}</h4>
              <p class="description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 mr-auto"
          slot="content-right"
        >
          <!-- S_START
          <div class="social-line text-center">
            <md-button class="md-just-icon md-round md-twitter">
              <i class="fab fa-twitter"></i>
            </md-button>
            <md-button class="md-just-icon md-round md-dribbble">
              <i class="fab fa-dribbble"></i>
            </md-button>
            <md-button class="md-just-icon md-round md-facebook">
              <i class="fab fa-facebook-f"></i>
            </md-button>
            <h4 class="mt-3">
              or be classical
            </h4>
          </div>
        
          <md-field
            class="md-form-group"
            v-for="item in inputs"
            :key="item.name"
          >
            <md-icon>{{ item.icon }}</md-icon>
            <label>{{ item.name }}</label>
            <md-input :v-model="item.value" :type="item.type"></md-input>
          </md-field>
S_END -->

          <md-field class="md-form-group">
            <md-icon>face</md-icon>
            <label>{{ this.$S_i18n.t("BF_REGISTER_FORM_FIRST_NAME") }}</label>
            <md-input v-model="name" type="text"></md-input>
          </md-field>

          <md-field class="md-form-group">
            <md-icon>email</md-icon>
            <label>{{ this.$S_i18n.t("BF_REGISTER_FORM_EMAIL") }}</label>
            <md-input v-model="email" type="email"></md-input>
          </md-field>

          <md-field class="md-form-group">
            <md-icon>lock_outline</md-icon>
            <label>{{ this.$S_i18n.t("BF_REGISTER_FORM_PASSWORD") }}</label>
            <md-input v-model="password1" type="password"></md-input>
          </md-field>

          <md-field class="md-form-group">
            <md-icon>lock_outline</md-icon>
            <label>{{
              this.$S_i18n.t("BF_REGISTER_FORM_PASSWORD_CONFIRMATION")
            }}</label>
            <md-input v-model="password2" type="password"></md-input>
          </md-field>

          <md-checkbox id="chk_terms_conditions" v-model="chk_terms">
            {{ this.$S_i18n.t("BF_REGISTER_FORM_ACCEPT") }}
            <a>
              {{ this.$S_i18n.t("BF_REGISTER_FORM_TERMS_AND_CONDITIONS") }}
            </a>
          </md-checkbox>

          <div class="md-layout-item md-size-100" v-if="error_seen_register">
            <p class="description text-left text-danger">
              {{ this.$S_i18n.t("BF_REGISTER_ERROR") }}
            </p>
          </div>

          <div
            class="md-layout-item md-size-100 "
            v-if="chk_term_mandatory_visible"
          >
            <p class="description text-center text-danger">
              {{
                this.$S_i18n.t("BF_REGISTER_FORM_TERMS_AND_CONDITIONS_ACCEPT")
              }}
            </p>
          </div>
          <div
            class="md-layout-item md-size-100"
            v-if="chk_pass_not_match_visible"
          >
            <p class="description text-center text-danger">
              {{ this.$S_i18n.t("BF_REGISTER_ERROR_MATCH_PASSW") }}
            </p>
          </div>

          <div class="button-container">
            <md-button
              class="md-success md-round mt-4"
              slot="footer"
              @click="signin()"
            >
              {{ this.$S_i18n.t("BF_REGISTER_FORM_SUBMIT") }}
            </md-button>
            <p
              id="subfooter"
              slot="subfooter"
              class="description text-center mt-4"
              style="margin-left:5px;"
            >
              ---
              <a href="#/login">{{ this.$S_i18n.t("BF_LOGIN_FORM_TITLE") }}</a>
            </p>
          </div>
        </div>
      </register-card>
    </div>
  </div>
</template>
<script>
import { RegisterCard } from "@/components";
export default {
  components: {
    RegisterCard
  },
  methods: {
    signin() {
      this.chk_term_mandatory_visible = false;
      this.chk_pass_not_match_visible = false;
      this.error_seen_register = false;

      if (!this.chk_terms) {
        this.chk_term_mandatory_visible = true;
        return;
      }

      if (this.password1 != this.password2) {
        this.chk_pass_not_match_visible = true;
        return;
      }

      this.$BF_Services.data = {
        name: this.name,
        email: this.email,
        password: this.password1,
        language: this.$S_i18n.locale,
        company: "",
        phone: ""
      };

      this.$BF_Services.register().then(
        response => {
          $router.push("/login");
        },
        error => {
          this.error_seen_register = true;
        }
      );
    }
  },
  data() {
    return {
      chk_terms: false,
      chk_term_mandatory_visible: false,
      chk_pass_not_match_visible: false,
      error_seen_register: false,
      name: "",
      email: "",
      password1: "",
      password2: "",
      contentLeft: [
        {
          colorIcon: "icon-success",
          icon: "timeline",
          title: this.$S_i18n.t("BF_REGISTER_LEFT_1_TITLE"),
          description: this.$S_i18n.t("BF_REGISTER_LEFT_1_BODY")
        },

        {
          colorIcon: "icon-danger",
          icon: "code",
          title: this.$S_i18n.t("BF_REGISTER_LEFT_2_TITLE"),
          description: this.$S_i18n.t("BF_REGISTER_LEFT_2_BODY")
        },

        {
          colorIcon: "icon-info",
          icon: "group",
          title: this.$S_i18n.t("BF_REGISTER_LEFT_3_TITLE"),
          description: this.$S_i18n.t("BF_REGISTER_LEFT_3_BODY")
        }
      ]
    };
  }
};
</script>
<style>
.subfooter {
  font-size: 3px;
}
</style>
