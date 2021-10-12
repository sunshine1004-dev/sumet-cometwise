<template>
  <div class="user">
    <div class="photo">
      <img :src="avatar" alt="avatar" />
    </div>

    <div class="user-info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" href="#/pages/user">
        <span>
          {{ title }}
        </span>
      </a>
      <!-- S_START
      <div class="user-info">
      <a
        data-toggle="collapse"
        :aria-expanded="!isClosed"
        @click.stop="toggleMenu"
        @click.capture="clicked"
        href="www.suments.com">
      
        <span v-if="$route.meta.rtlActive">
          {{ rtlTitle }}
          <b class="caret"></b>
        </span>
        <span v-else>
          {{ title }}
          <b class="caret"></b>
        </span>
      <collapse-transition>
        <div v-show="!isClosed">
          <ul class="nav">
            <slot>
              <li>
                <a href="#/pages/user">
                  <span class="sidebar-mini">MP</span>
                  <span class="sidebar-normal">My Profile</span>
                </a>
              </li>
              
              <li>
                <a href="#vue">
                  <span class="sidebar-mini">EP</span>
                  <span class="sidebar-normal">Edit Profile</span>
                </a>
              </li>
           
              <li>
                <a href="#vue">
                  <span class="sidebar-mini">S</span>
                  <span class="sidebar-normal">Settings</span>
                </a>
              </li>
                
            </slot>
          </ul>
        </div>
      </collapse-transition>
    S_END  -->
    </div>
  </div>
</template>
<script>
//import { CollapseTransition } from "vue2-transitions";

export default {
  components: {
    // CollapseTransition,
  },
  props: {
    title: {
      type: String,
      default: localStorage.getItem("BF_name")
    },
    rtlTitle: {
      type: String,
      default: "تانيا أندرو"
    },
    avatar: {
      type: String,
      default: process.env.VUE_APP_BF_USER_AVATAR_DEFAULT
    }
  },
  data() {
    return {
      isClosed: true
    };
  },
  methods: {
    clicked: function(e) {
      e.preventDefault();
    },
    toggleMenu: function() {
      this.isClosed = !this.isClosed;
    }
  }
};
</script>
<style>
.collapsed {
  transition: opacity 1s;
}
</style>
