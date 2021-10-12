<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>
                      Name
                    </label>
                    <md-input
                      v-model="cookiename"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>
                      Purpose
                    </label>
                    <md-input
                      v-model="cookiepurpose"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="add_cookie_info"
                  >
                    ADD
                  </md-button>
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="reset_cookie_info"
                  >
                    RESET
                  </md-button>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <div class="md-layout">
                <div
                  class="md-layout-item md-small-size-100 md-size-100"
                  v-for="(item, index) in cookieInfo"
                  :key="index"
                >
                  <p>Name: {{ item.name }}</p>
                  <p>Purpose: {{ item.purpose }}</p>
                </div>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "cookies",
  data() {
    return {
      cookiename: null,
      cookiepurpose: null,
      cookieInfo: []
    };
  },
  methods: {
    update_info: function(items) {
      // console.log(items);
    },
    add_cookie_info: function() {
      if (!this.cookiename || !this.cookiepurpose) {
        Swal.fire({
          title: "Please fill out all information",
          buttonsStyling: false,
          confirmButtonClass: "md-button md-info"
        });
      } else {
        this.cookieInfo.push({
          name: this.cookiename,
          purpose: this.cookiepurpose
        });
      }
    },
    reset_cookie_info: function() {
      this.cookieInfo = [];
    }
  }
};
</script>
