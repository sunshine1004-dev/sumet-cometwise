<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isDPO">
                DPO?
              </md-checkbox>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isDPO"
            >
              <md-field>
                <label>
                  DPO email
                </label>
                <md-input
                  v-model="DPO_email"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isContact">
                Contact?
              </md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isNewslettet">
                Newslettet?
              </md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isComment">
                Comment?
              </md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isLiveChat">
                Live chat?
              </md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isRegsiter">
                Regsiter?
              </md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-checkbox v-model="isLogin">
                Login?
              </md-checkbox>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="category_status == 'ecommerce'"
            >
              <md-checkbox v-model="isBuyAsGuest">
                Buy as guest?
              </md-checkbox>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  props: ["category_status"],
  data() {
    return {
      isDPO: false,
      isContact: false,
      isNewslettet: false,
      isComment: false,
      isLiveChat: false,
      isRegsiter: false,
      isLogin: false,
      isBuyAsGuest: false,
      entity: false,
      DPO_email: null
    };
  },
  methods: {
    update_info: function(items) {
      // console.log(items);
    }
  }
};
</script>
