<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-checkbox v-model="isCreditOrDebit">
                    Credit/Debit
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-checkbox v-model="isBankTransfer">
                    Bank transfer
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-checkbox v-model="isPaypal">
                    Paypal
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-checkbox v-model="isStripe">
                    Stripe
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-checkbox v-model="isBizum">
                    Bizum
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-checkbox v-model="isOnDelivery">
                    on_delivery
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>
                      Name
                    </label>
                    <md-input
                      v-model="paymentname"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>
                      Description
                    </label>
                    <md-input
                      v-model="paymentdescription"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-60 text-right">
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="add_payment_info"
                  >
                    ADD
                  </md-button>
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="reset_payment_info"
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
                  v-for="(item, index) in paymentInfo"
                  :key="index"
                >
                  <p>Name: {{ item.name }}</p>
                  <p>Description: {{ item.description }}</p>
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
  name: "payments",
  data() {
    return {
      isCreditOrDebit: false,
      isBankTransfer: false,
      isPaypal: false,
      isStripe: false,
      isBizum: false,
      isOnDelivery: false,
      paymentname: null,
      paymentdescription: null,
      paymentInfo: []
    };
  },
  methods: {
    update_info: function(items) {
      // console.log(items);
    },
    add_payment_info: function() {
      if (!this.paymentname || !this.paymentdescription) {
        Swal.fire({
          title: "Please fill out all information",
          buttonsStyling: false,
          confirmButtonClass: "md-button md-info"
        });
      } else {
        this.paymentInfo.push({
          name: this.paymentname,
          description: this.paymentdescription
        });
        // console.log(this.paymentInfo);
      }
    },
    reset_payment_info: function() {
      this.paymentInfo = [];
    }
  }
};
</script>
