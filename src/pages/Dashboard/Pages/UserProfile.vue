<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form header-color="green"> </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card button-color="success"> </user-card>
      </div>
    </div>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100 md-size-25"
      >
        <pricing-card icon-color="icon-success">
          <h6 slot="category" class="category">
            {{ this.$S_i18n.t("BF_PRICING_CARD_1_TITLE") }}
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
            @click="checkout_card_1()"
          >
            {{ this.$S_i18n.t("BF_PRICING_CARD_1_BUTTON") }}
          </md-button>
        </pricing-card>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100 md-size-25"
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
            @click="checkout_card_2()"
          >
            {{ this.$S_i18n.t("BF_PRICING_CARD_2_BUTTON") }}
          </md-button>
        </pricing-card>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100 md-size-25"
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
            @click="checkout_card_3()"
            >>
            {{ this.$S_i18n.t("BF_PRICING_CARD_3_BUTTON") }}
          </md-button>
        </pricing-card>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100 md-size-25"
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
          <md-button slot="footer" class="md-success md-round">
            {{ this.$S_i18n.t("BF_PRICING_CARD_4_BUTTON") }}
          </md-button>
        </pricing-card>
      </div>
    </div>
  </div>
</template>

<!-- Load Stripe.js on your website. -->

<script>
import { EditProfileForm } from "@/components";
import { UserCard } from "@/components";
import { PricingCard } from "@/components";
export default {
  components: {
    EditProfileForm,
    UserCard,
    PricingCard
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "https://js.stripe.com/v3/");
    plugin.async = true;
    document.head.appendChild(plugin);
  },
  methods: {
    stripe_checkout(bf_price) {
      var stripe = Stripe(process.env.VUE_APP_BF_STRIPE_PUBLISHABLE_KEY);

      stripe
        .redirectToCheckout({
          lineItems: [{ price: bf_price, quantity: 1 }],
          mode: process.env.VUE_APP_BF_STRIPE_MODE,
          customerEmail: localStorage.getItem("BF_email"),
          successUrl: process.env.VUE_APP_BF_STRIPE_PRICE_PRODUCT_URL_SUCCESS,
          cancelUrl: process.env.VUE_APP_BF_STRIPE_PRICE_PRODUCT_URL_CANCEL
        })
        .then(function(result) {
          if (result.error) {
            var displayError = document.getElementById("error-message");
            displayError.textContent = result.error.message;
          } else {
            this.$BF_Services.data = {
              token: localStorage.getItem("token"),
              product_id: bf_price
            };
            this.$BF_Services.updateUserPayment().then();
          }
        });
    },
    checkout_card_1() {
      this.stripe_checkout(process.env.VUE_APP_BF_STRIPE_PRICE_PRODUCT_CARD1);
    },
    checkout_card_2() {
      this.stripe_checkout(process.env.VUE_APP_BF_STRIPE_PRICE_PRODUCT_CARD2);
    },
    checkout_card_3() {
      this.stripe_checkout(process.env.VUE_APP_BF_STRIPE_PRICE_PRODUCT_CARD3);
    }
  }
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>
