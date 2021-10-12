<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div
              class="md-layout-item md-small-size-100 md-medium-size-100 md-size-50"
            >
              <div class="md-layout">
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <h5>Locations</h5>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <md-field>
                    <label>
                      Country
                    </label>
                    <md-input
                      v-model="deliverlocationcountry"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <md-field>
                    <label>
                      Cost
                    </label>
                    <md-input
                      v-model="deliverlocationcost"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <md-field>
                    <label>
                      Delay
                    </label>
                    <md-input
                      v-model="deliverlocationdelay"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-60 text-right">
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="add_delivery_location_info"
                  >
                    ADD
                  </md-button>
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="reset_delivery_location_info"
                  >
                    RESET
                  </md-button>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-size-100"
                  v-for="(item, index) in locaions"
                  :key="index"
                >
                  <p>Country: {{ item.name }}</p>
                  <p>Cost: {{ item.cost }}</p>
                  <p>Delay: {{ item.delay }}</p>
                </div>
              </div>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-medium-size-100 md-size-50"
            >
              <div class="md-layout-item md-small-size-100 md-size-100">
                <h5>Transport companies</h5>
              </div>
              <div class="md-layout">
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <md-field>
                    <label>
                      Name
                    </label>
                    <md-input
                      v-model="delivertransportcompanyname"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <md-field>
                    <label>
                      Web
                    </label>
                    <md-input
                      v-model="delivertransportweb"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-medium-size-100 md-size-100"
                >
                  <md-field>
                    <label>
                      DELAY
                    </label>
                    <md-input
                      v-model="delivertransportdelay"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-60 text-right">
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="add_transport_company_info"
                  >
                    ADD
                  </md-button>
                  <md-button
                    class="md-raised md-warning mt-4"
                    @click="reset_transport_company_info"
                  >
                    RESET
                  </md-button>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-size-100"
                  v-for="(item, index) in transport"
                  :key="index"
                >
                  <p>Name: {{ item.name }}</p>
                  <p>Web: {{ item.web }}</p>
                  <p>Delay: {{ item.delay }}</p>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>
                      Max weight
                    </label>
                    <md-input
                      v-model="maxweight"
                      @focus.native="update_info"
                    ></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-checkbox v-model="isClickAndCollect">
                    Click and collect
                  </md-checkbox>
                </div>
                <div
                  class="md-layout-item md-small-size-100 md-size-100"
                  v-if="isClickAndCollect"
                >
                  <md-table v-model="openingHours" class="table-shopping">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Mon">
                        {{ item.Mon }}
                      </md-table-cell>
                      <md-table-cell
                        md-label="Tue"
                        @click.native="onchange(item)"
                      >
                        {{ item.Tue }}
                      </md-table-cell>
                      <md-table-cell md-label="Wed">
                        {{ item.Wed }}
                      </md-table-cell>
                      <md-table-cell md-label="Thu">{{
                        item.Thu
                      }}</md-table-cell>
                      <md-table-cell md-label="Fri">{{
                        item.Fri
                      }}</md-table-cell>
                    </md-table-row>
                  </md-table>
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
  name: "deliveries",
  data() {
    return {
      openingHours: [
        {
          id: 1,
          Mon: "9 a.m",
          Tue: "9 a.m",
          Wed: "9 a.m",
          Thu: "9 a.m",
          Fri: "9 a.m"
        },
        {
          id: 2,
          Mon: "6 p.m",
          Tue: "6 p.m",
          Wed: "6 p.m",
          Thu: "6 p.m",
          Fri: "6 p.m"
        }
      ],
      isClickAndCollect: false,
      deliverlocationcountry: null,
      deliverlocationcost: null,
      deliverlocationdelay: null,
      delivertransportcompanyname: null,
      delivertransportweb: null,
      delivertransportdelay: null,
      maxweight: null,
      locaions: [],
      transport: []
    };
  },
  methods: {
    update_info: function(items) {
      // console.log(items);
    },
    onchange(item) {
      // console.log(item);
    },
    add_delivery_location_info() {
      if (
        !this.deliverlocationcountry ||
        !this.deliverlocationcost ||
        !this.deliverlocationdelay
      ) {
        Swal.fire({
          title: "Please fill out all information",
          buttonsStyling: false,
          confirmButtonClass: "md-button md-info"
        });
      } else {
        this.locaions.push({
          name: this.deliverlocationcountry,
          cost: this.deliverlocationcost,
          delay: this.deliverlocationdelay
        });
        // console.log(this.paymentInfo);
      }
    },
    reset_delivery_location_info() {
      this.locaions = [];
    },
    add_transport_company_info() {
      if (
        !this.delivertransportcompanyname ||
        !this.delivertransportweb ||
        !this.delivertransportdelay
      ) {
        Swal.fire({
          title: "Please fill out all information",
          buttonsStyling: false,
          confirmButtonClass: "md-button md-info"
        });
      } else {
        this.transport.push({
          name: this.delivertransportcompanyname,
          web: this.delivertransportweb,
          delay: this.delivertransportdelay
        });
        // console.log(this.paymentInfo);
      }
    },
    reset_transport_company_info() {
      this.transport = [];
    }
  }
};
</script>
