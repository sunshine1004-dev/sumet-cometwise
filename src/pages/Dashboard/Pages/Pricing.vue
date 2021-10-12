<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-50 mx-auto text-center">
        <h2 class="title">
          {{ this.$S_i18n.t("BF_PRICING_TITLE") }}
        </h2>
        <h5 class="description">
          {{ this.$S_i18n.t("BF_PRICING_SUBTITLE") }}
        </h5>
      </div>
    </div>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100 md-size-25"
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
            @click="$router.push('login')"
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
            @click="$router.push('login')"
          >
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
          <md-button
            slot="footer"
            class="md-success md-round"
            @click="$router.push('login')"
          >
            {{ this.$S_i18n.t("BF_PRICING_CARD_4_BUTTON") }}
          </md-button>
        </pricing-card>
      </div>
    </div>
  </div>
</template>
<script>
import { PricingCard } from "@/components";
export default {
  components: {
    PricingCard
  }
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
</style>
