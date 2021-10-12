<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-checkbox class="md-warning" v-model="isLegal">
                Is it a legal entity?
              </md-checkbox>
              <md-checkbox
                class="md-warning"
                v-if="isLegal"
                v-model="isRegulatedActivity"
              >
                Is it a regulated activity?
              </md-checkbox>
            </div>
          </div>

          <div class="md-layout">
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isLegal"
            >
              <md-field>
                <label>
                  City
                </label>
                <md-input v-model="city" @focus.native="update_info"></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isLegal"
            >
              <md-field>
                <label>
                  Book
                </label>
                <md-input v-model="book" @focus.native="update_info"></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isLegal"
            >
              <md-field>
                <label>
                  Page
                </label>
                <md-input v-model="page" @focus.native="update_info"></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isLegal"
            >
              <md-field>
                <label>
                  Section
                </label>
                <md-input
                  v-model="section"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isLegal"
            >
              <md-field>
                <label>
                  Paragraph
                </label>
                <md-input
                  v-model="paragraph"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isLegal"
            >
              <md-field>
                <label>
                  Inscription
                </label>
                <md-input
                  v-model="inscription"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Entity
                </label>
                <md-input
                  v-model="entity"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Registered_id
                </label>
                <md-input
                  v-model="registered_id"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Title
                </label>
                <md-input
                  v-model="title"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-25"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Country
                </label>
                <md-input
                  v-model="country"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-25"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Equivalent
                </label>
                <md-input
                  v-model="equivalent"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-25"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Applicable
                </label>
                <md-input
                  v-model="applicable"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-25"
              v-if="isRegulatedActivity"
            >
              <md-field>
                <label>
                  Sources
                </label>
                <md-input
                  v-model="sources"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>
                  Domain
                </label>
                <md-input
                  v-model="domain"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>
                  Name
                </label>
                <md-input
                  v-model="username"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>
                  ID
                </label>
                <md-input v-model="ID"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>
                  Address
                </label>
                <md-input
                  v-model="address"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>
                  Hosting provider
                </label>
                <md-input
                  v-model="hosting"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <md-chips v-model="phones" :md-auto-insert="true">
                  <label>Phones</label>
                </md-chips>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <md-chips v-model="emails" :md-auto-insert="true">
                  <label>Emails</label>
                </md-chips>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>
                  About
                </label>
                <md-textarea v-model="about" @focus.native="update_info">
                </md-textarea>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>
                  Facebook profile
                </label>
                <md-input
                  v-model="facebook"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>
                  Instagram
                </label>
                <md-input
                  v-model="instagram"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>
                  Youtube
                </label>
                <md-input
                  v-model="youtube"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-small-size-100 md-size-33"
              v-if="category_status == 'ecommerce'"
            >
              <md-field>
                <label>
                  Email Bills
                </label>
                <md-input
                  v-model="emaillBills"
                  type="text"
                  @focus.native="update_info"
                ></md-input>
              </md-field>
            </div>
            <!-- <div class="md-layout-item md-size-60 text-right">
              <md-button class="md-raised md-success mt-4" @click="update_info">
                {{ this.$S_i18n.t("BF_USER_PROFILE_FORM_SUBMIT") }}
              </md-button>
            </div> -->
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "general",
  props: ["category_status"],
  data() {
    return {
      isLegal: false,
      isRegulatedActivity: false,
      city: "",
      book: "",
      page: "",
      section: "",
      paragraph: "",
      inscription: "",
      entity: "",
      registered_id: "",
      title: "",
      country: "",
      equivalent: "",
      applicable: "",
      sources: "",
      domain: "",
      username: "",
      ID: "",
      address: "",
      phones: [],
      emails: [],
      hosting: "",
      about: "",
      facebook: "",
      instagram: "",
      youtube: "",
      emaillBills: ""
    };
  },
  methods: {
    update_info: function(items) {
      console.log(items);
    }
  }
};
</script>
