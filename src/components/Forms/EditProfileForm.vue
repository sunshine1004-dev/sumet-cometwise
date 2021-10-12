<template>
  <form>
    <md-card>
      <md-card-header
        class="md-card-header-icon"
        :class="getClass(headerColor)"
      >
        <div class="card-icon">
          <md-icon>perm_identity</md-icon>
        </div>
        <h4 class="title">
          {{ this.$S_i18n.t("BF_USER_PROFILE_TITLE") }}
          <small>
            {{ this.$S_i18n.t("BF_USER_PROFILE_SUBTITLE") }}
          </small>
        </h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_COMPANY") }}
              </label>
              <md-input
                v-model="company"
                @focus.native="update_info"
              ></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_NAME_USER") }}
              </label>
              <md-input
                v-model="username"
                type="text"
                @focus.native="update_info"
              ></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_EMAIL") }}
              </label>
              <md-input v-model="emailadress" type="email" disabled></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_PHONE") }}
              </label>
              <md-input
                v-model="phone"
                type="text"
                @focus.native="update_info"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_MEMBER_SINCE") }}
              </label>
              <md-input v-model="member_since" type="text" disabled></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_LANGUAGE") }}
              </label>
              <md-input v-model="language" type="text" disabled></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-66">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_ADDRESS") }}
              </label>
              <md-input
                v-model="address"
                type="text"
                @focus.native="update_info"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_CITY") }}
              </label>
              <md-input
                v-model="city"
                type="text"
                @focus.native="update_info"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-40 " v-if="error_general">
            <p class="description text-center text-danger">
              {{ this.$S_i18n.t("BF_USER_PROFILE_SUBMIT_ERROR") }}
            </p>
          </div>
          <div class="md-layout-item md-size-60 text-right">
            <md-button class="md-raised md-success mt-4" @click="update_info">
              {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_SUBMIT") }}
            </md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: "",
      company: "",
      phone: "",
      emailadress: "",
      member_since: "",
      language: "",
      address: "",
      city: "",
      error_general: false
    };
  },

  mounted: function() {
    this.update_fields();
    var a = this.$BF_Services.getUserPlans();
  },

  methods: {
    update_info() {
      this.$BF_Services.data = {
        company: this.company,
        name: this.username,
        email: this.emailadress,
        address: this.address,
        city: this.city,
        language: this.lang,
        phone: this.phone
      };
      this.$BF_Services.updateUserProfile().then(
        response => {
          this.update_fields();
        },
        error => {}
      );
      return;
    },
    update_fields() {
      this.username = localStorage.getItem("BF_name");
      this.emailadress = localStorage.getItem("BF_email");
      this.company = localStorage.getItem("BF_company");
      this.address = localStorage.getItem("BF_address");
      this.city = localStorage.getItem("BF_city");
      this.phone = localStorage.getItem("BF_phone");
      this.member_since = localStorage.getItem("BF_date_created");
      this.language = localStorage.getItem("BF_language");
    },
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>
<style></style>
