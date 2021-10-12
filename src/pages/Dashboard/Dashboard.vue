<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <div @click="RequestToAddSitePage()" class="cursor-type">
        <dashboard-card
          chart-type="Line"
          chart-inside-header
          background-color="blue"
        >
          <template slot="content">
            <h4 class="title">
              {{ this.$S_i18n.t("BF_DASHBOARD_SUMMARY_ADD_SITE_TITTLE") }}
            </h4>
            <p class="category">
              {{ this.$S_i18n.t("BF_DASHBOARD_SUMMARY_ADD_SITE_BODY") }}
            </p>
          </template>
          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              {{ this.$S_i18n.t("BF_DASHBOARD_SUMMARY_ADD_SITE_FOOTER") }}
            </div>
          </template>
        </dashboard-card>
      </div>
    </div>

    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <div @click="RequestToMySitePage()" class="cursor-type">
        <dashboard-card
          chart-type="Line"
          chart-inside-header
          background-color="blue"
        >
          <template slot="content">
            <h4 class="title">
              {{ this.$S_i18n.t("BF_DASHBOARD_SUMMARY_MY_SITE_TITTLE") }}
            </h4>
            <p class="category">
              {{ this.$S_i18n.t("BF_DASHBOARD_SUMMARY_MY_SITE_BODY") }}
            </p>
          </template>
          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              {{ this.$S_i18n.t("BF_DASHBOARD_SUMMARY_MY_SITE_FOOTER") }}
            </div>
          </template>
        </dashboard-card>
      </div>
    </div>
  </div>
</template>

<script>
import { DashboardCard } from "@/components";

export default {
  components: {
    DashboardCard
  },
  //#####################
  //  SUMENTS_START
  mounted() {},

  //  S_END
  //#####################
  data() {
    return {
      landing_img: process.env.VUE_APP_BF_LANDING_IMG_INFO,
      product1: "./img/card-2.jpg",
      product2: "./img/card-3.jpg",
      product3: "./img/card-1.jpg"
    };
  },
  methods: {
    RequestToAddSitePage() {
      const reqdata = { title: "RequestAddOrEditSitePage", isEdit: false };
      this.$APP_Services.HANDLE_PAGE_APP_SERVICE(reqdata);
    },
    RequestToMySitePage() {
      const reqdata = { title: "RequestMySitePage" };
      this.$APP_Services.HANDLE_PAGE_APP_SERVICE(reqdata);
    }
  }
};
</script>
<style lang="scss">
.cursor-type {
  cursor: pointer;
}
</style>
