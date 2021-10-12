<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">
        {{ this.$S_i18n.t("BF_PRICING_CARD_2_TITLE") }}
      </h6>
      <h4 class="card-title">
        {{ this.$S_i18n.t("BF_PRICING_CARD_2_BODY") }}
      </h4>
      <p class="card-description">
        {{ this.$S_i18n.t("BF_PRICING_CARD_2_PRICE") }}
      </p>
      <!--S_START
      <md-button class="md-round" :class="getColorButton(buttonColor)">
        Follow
      </md-button>
      S_END-->
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: process.env.VUE_APP_BF_USER_AVATAR_DEFAULT
    },
    buttonColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    getColorButton: function(buttonColor) {
      return "md-" + buttonColor + "";
    }
  }
};
</script>
<style></style>
