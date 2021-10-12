<template>
  <md-card
    @mouseleave.native="onMouseLeave"
    :data-count="hoverCount"
    :class="getClass(backgroundColor)"
  >
    <md-card-content id="dashcard">
      <slot name="content"></slot>
    </md-card-content>
    <md-card-actions md-alignment="left" v-if="!noFooter">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: "dashboard-card",
  props: {
    HeaderText: Boolean,
    HeaderIcon: Boolean,
    noFooter: Boolean,
    headerAnimation: {
      type: String,
      default: "true"
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    demo: Function
  },
  data() {
    return {
      hoverCount: 0,
      imgHovered: false,
      fixedHeader: false
    };
  },
  computed: {
    headerDown() {
      return this.hoverCount > 15;
    }
  },
  methods: {
    headerBack: function() {
      this.fixedHeader = false;
    },
    fixHeader: function() {
      this.hoverCount = 0;
      this.fixedHeader = true;

      setTimeout(this.headerBack, 480);
    },
    onMouseOver: function() {
      if (this.headerAnimation === "true") {
        this.imgHovered = true;
        this.hoverCount++;
      }
    },
    onMouseLeave: function() {
      if (this.headerAnimation === "true") {
        this.imgHovered = false;
      }
    },

    getClass: function(backgroundColor) {
      return "md-card-header-" + backgroundColor + "";
    },

    /***
     * Initializes the chart by merging the chart options sent via props and the default chart options
    //  */
    // initChart(Chartist) {
    //   var chartIdQuery = `#${this.chartId}`;
    //   Chartist[this.chartType](
    //     chartIdQuery,
    //     this.chartData,
    //     this.chartOptions,
    //     this.chartAnimation
    //   );
    // },
    /***
     * Assigns a random id to the chart
    //  */
    // updateChartId() {
    //   var currentTime = new Date().getTime().toString();
    //   var randomInt = this.getRandomInt(0, currentTime);
    //   this.chartId = `div_${randomInt}`;
    // },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  mounted() {
    // this.updateChartId();
    // import("chartist").then(Chartist => {
    //   let ChartistLib = Chartist.default || Chartist;
    //   this.$nextTick(() => {
    //     this.initChart(ChartistLib);
    //   });
    // });
  }
};
</script>
<style>
.md-card-content {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
