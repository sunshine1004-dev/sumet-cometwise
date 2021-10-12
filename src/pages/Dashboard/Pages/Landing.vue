<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-60 md-small-size-100 md-xsmall-size-100 md-size-60"
    >
      <br />
      <br />
      <img v-bind:src="'./img/' + landing_img" width="1000px" />
    </div>
    <div
      class="md-layout-item md-medium-size-40 md-small-size-100 md-xsmall-size-100 md-size-40"
    >
      <h2 class="title">{{ this.$S_i18n.t("BF_LANDING_BRIEF_TITLE") }}</h2>
      <h4 class="brand-primary">
        {{ this.$S_i18n.t("BF_LANDING_BRIEF_BODY") }}
      </h4>
      <br />
      <md-button class="md-success md-round">
        {{ this.$S_i18n.t("BF_LANDING_BRIEF_BUTTON_LABEL") }}
      </md-button>
    </div>

    <div
      class="md-layout-item md-smaill-size-100 md-size-100 mx-auto text-center"
    >
      <h3 class="title">
        {{ this.$S_i18n.t("BF_PRICING_TITLE") }}
      </h3>
      <h5 class="description">
        {{ this.$S_i18n.t("BF_PRICING_SUBTITLE") }}
      </h5>
    </div>

    <div
      class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100 md-size-25"
    >
      <pricing-card icon-color="icon-success">
        <h6 slot="category" class="category">
          {{ this.$S_i18n.t("BF_PRICING_SUBTITLE") }}
        </h6>
        <md-icon slot="icon">
          weekend
        </md-icon>
        <h3 slot="title" class="title">
          {{ this.$S_i18n.t("BF_PRICING_CARD_1_PRICE") }}
        </h3>
        <p slot="description" class="card-description">
          {{ this.$S_i18n.t("BF_PRICING_CARD_1_BODY") }}
        </p>
        <md-button
          slot="footer"
          class="md-success md-round"
          @click="$router.push('login')"
        >
          {{ this.$S_i18n.t("BF_PRICING_CARD_1_BUTTON") }}
        </md-button>
      </pricing-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100 md-size-25"
    >
      <pricing-card icon-color="icon-success">
        <h6 slot="category" class="category">
          {{ this.$S_i18n.t("BF_PRICING_CARD_2_TITLE") }}
        </h6>
        <md-icon slot="icon">
          home
        </md-icon>
        <h3 slot="title" class="title">
          {{ this.$S_i18n.t("BF_PRICING_CARD_2_PRICE") }}
        </h3>
        <p slot="description" class="card-description">
          {{ this.$S_i18n.t("BF_PRICING_CARD_2_BODY") }}
        </p>
        <md-button
          slot="footer"
          class="md-success md-round"
          @click="$router.push('login')"
        >
          {{ this.$S_i18n.t("BF_PRICING_CARD_2_BUTTON") }}
        </md-button>
      </pricing-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100 md-size-25"
    >
      <pricing-card icon-color="icon-success">
        <h6 slot="category" class="category">
          {{ this.$S_i18n.t("BF_PRICING_CARD_3_TITLE") }}
        </h6>
        <md-icon slot="icon">
          business
        </md-icon>
        <h3 slot="title" class="title">
          {{ this.$S_i18n.t("BF_PRICING_CARD_3_PRICE") }}
        </h3>
        <p slot="description" class="card-description">
          {{ this.$S_i18n.t("BF_PRICING_CARD_3_BODY") }}
        </p>
        <md-button
          slot="footer"
          class="md-success md-round"
          @click="$router.push('login')"
        >
          {{ this.$S_i18n.t("BF_PRICING_CARD_3_BUTTON") }}
        </md-button>
      </pricing-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100 md-size-25"
    >
      <pricing-card icon-color="icon-success">
        <h6 slot="category" class="category">
          {{ this.$S_i18n.t("BF_PRICING_CARD_4_TITLE") }}
        </h6>
        <md-icon slot="icon">
          account_balance
        </md-icon>
        <h3 slot="title" class="title">
          {{ this.$S_i18n.t("BF_PRICING_CARD_4_PRICE") }}
        </h3>
        <p slot="description" class="card-description">
          {{ this.$S_i18n.t("BF_PRICING_CARD_4_BODY") }}
        </p>
        <md-button
          slot="footer"
          class="md-success md-round"
          @click="$router.push('login')"
        >
          {{ this.$S_i18n.t("BF_PRICING_CARD_4_BUTTON") }}
        </md-button>
      </pricing-card>
    </div>

    <div class="md-layout-item md-size-100 mx-auto text-center">
      <h3 class="title">
        {{ this.$S_i18n.t("BF_LANDING_FORM_TITLE") }}
      </h3>
      <h5 class="description">
        {{ this.$S_i18n.t("BF_LANDING_FORM_SUBTITLE") }}
      </h5>
    </div>

    <div class="md-layout" id="form">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <contact-form header-color="green"> </contact-form>
      </div>
    </div>
  </div>
</template>
<script>
import { PricingCard } from "@/components";
import { ContactForm } from "@/components";

export default {
  components: {
    PricingCard,
    ContactForm
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
