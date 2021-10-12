<template>
  <li
    :class="[
      { 'timeline-inverted': inverted },
      { 'timeline-simple': !inverted }
    ]"
  >
    <slot name="badge">
      <div
        @click="toggleShow"
        class="timeline-badge"
        :class="badgeType"
        style="cursor:pointer"
      >
        <md-icon>{{ badgeIcon }}</md-icon>
      </div>
    </slot>
    <div class="timeline-panel" v-if="toggleStatus">
      <div class="timeline-heading">
        <slot name="header"></slot>
      </div>
      <div class="timeline-body" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
      <h6 v-if="$slots.footer">
        <slot name="footer"></slot>
      </h6>
    </div>
  </li>
</template>
<script>
export default {
  name: "time-line-item",
  data() {
    return {
      toggleStatus: true
    };
  },
  props: {
    inverted: Boolean,
    badgeType: {
      type: String,
      default: "success"
    },
    badgeIcon: {
      type: String,
      default: ""
    }
  },
  methods: {
    toggleShow: function() {
      this.toggleStatus = !this.toggleStatus;
    }
  }
};
</script>
<style></style>
