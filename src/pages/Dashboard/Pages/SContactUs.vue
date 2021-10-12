<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100 mx-auto text-center">
      <h3 class="title">
        {{ this.$S_i18n.t("BF_LANDING_FORM_TITLE") }}
      </h3>
      <h5 class="description">
        {{ this.$S_i18n.t("BF_LANDING_FORM_SUBTITLE") }}
      </h5>
    </div>

    <div class="md-layout-item md-medium-size-100 md-size-100" id="form">
      <contact-us-form header-color="green"> </contact-us-form>
    </div>
  </div>
</template>
<script>
import { ContactUsForm } from "@/components";

export default {
  components: {
    ContactUsForm
  },
  methods: {
    submitForm() {
      //this.chk_term_mandatory_visible = false
      //this.chk_pass_not_match_visible = false
      //this.error_seen_register = false

      if (!this.chk_terms) {
        this.chk_term_mandatory_visible = true;
        return;
      }

      this.$BF_Services.data = {
        firstname: this.firstname,
        email: this.email,
        company: this.company
      };

      this.$BF_Services.register().then(
        response => {
          //console.log(response.data);
        },
        error => {
          this.error_seen_register = true;
        }
      );
    }
  },
  data() {
    return {
      landing_img: process.env.VUE_APP_BF_LANDING_IMG_INFO
    };
  }
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
#info {
  margin-top: 70px;
}
.title {
  margin-top: 80px;
}
</style>
