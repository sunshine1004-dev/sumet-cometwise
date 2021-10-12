<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <div>
        <md-radio class="md-primary" v-model="category_status" value="web"
          >Web
        </md-radio>
        <md-radio
          v-model="category_status"
          value="ecommerce"
          class="md-warning"
        >
          Ecommerce
        </md-radio>
        <md-button
          class="md-warning md-round float-right"
          @click="RetrunToPreviousPage()"
          >Return</md-button
        >
      </div>
      <tabs
        :tab-active="1"
        :tab-name="['General', 'Contact', 'Cookies', 'Payments', 'Deliveries']"
        plain
        color-button="warning"
      >
        <template slot="General">
          <general :category_status="category_status" />
        </template>
        <template slot="Contact">
          <contact :category_status="category_status" />
        </template>
        <template slot="Cookies">
          <cookies />
        </template>
        <template slot="Payments" v-if="category_status == 'ecommerce'">
          <payments />
        </template>
        <template slot="Deliveries" v-if="category_status == 'ecommerce'">
          <deliveries />
        </template>
      </tabs>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import Contact from "./cw_SubSitePage/contact.vue";
import Deliveries from "./cw_SubSitePage/deliveries.vue";
import General from "./cw_SubSitePage/general.vue";
import Payments from "./cw_SubSitePage/payments.vue";
import Cookies from "./cw_SubSitePage/cookies.vue";

export default {
  components: {
    Tabs,
    Contact,
    Deliveries,
    Payments,
    General,
    Cookies,
    General
  },
  props: {
    profileCard: {
      type: String,
      default: "./img/faces/card-profile1-square.jpg"
    }
  },
  data() {
    return {
      category_status: "web",
      tabsname: [],
      selected: [],
      responsive: false,
      editdata: {}
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    RetrunToPreviousPage() {
      //   this.$router.back();
      this.$APP_Services.GO_TO_PREVIOUS_PAGE();
    }
  },
  mounted() {
    this.editdata = this.$APP_Services.data.EditCurrentData;
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css">
.float-right {
  float: right;
}
</style>
