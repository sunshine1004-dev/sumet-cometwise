<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-button
        class="md-warning md-round float-right"
        @click="requestAddNewSitePage"
      >
        Add new site
      </md-button>
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>
          </div>
          <h4 class="title">My sites information</h4>
        </md-card-header>
        <md-card-content>
          <md-table
            :value="queriedData"
            :md-sort.sync="currentSort"
            :md-sort-order.sync="currentSortOrder"
            :md-sort-fn="customSort"
            class="paginated-table table-striped table-hover"
          >
            <md-table-toolbar>
              <md-field>
                <label for="pages">Per page</label>
                <md-select v-model="pagination.perPage" name="pages">
                  <md-option
                    v-for="item in pagination.perPageOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                    {{ item }}
                  </md-option>
                </md-select>
              </md-field>

              <md-field>
                <md-input
                  type="search"
                  class="mb-3"
                  clearable
                  style="width: 200px"
                  placeholder="Search records"
                  v-model="searchQuery"
                >
                </md-input>
              </md-field>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="SITE" md-sort-by="site">
                {{ item.site }}
              </md-table-cell>
              <md-table-cell md-label="UPGRADE_PLAN" md-sort-by="upgrade_plan">
                {{ item.upgrade_plan }}
              </md-table-cell>
              <md-table-cell md-label="URL">{{ item.url }}</md-table-cell>
              <md-table-cell md-label="DATES">{{ item.dates }}</md-table-cell>
              <md-table-cell md-label="LEGAL">{{ item.legal }}</md-table-cell>
              <md-table-cell md-label="COOKIES">
                {{ item.cookies }}
              </md-table-cell>
              <md-table-cell md-label="PRIVACY">
                {{ item.privacy }}
              </md-table-cell>
              <md-table-cell md-label="Actions">
                <md-button
                  class="md-just-icon md-warning md-simple"
                  @click.native="handleEdit(item)"
                >
                  <md-icon>edit</md-icon>
                </md-button>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <div class="">
            <p class="card-category">
              Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
            </p>
          </div>
          <pagination
            class="pagination-no-border pagination-warning"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          >
          </pagination>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@/components";
import users from "./users";
import Fuse from "fuse.js";
import Swal from "sweetalert2";

export default {
  components: {
    Pagination
  },
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    }
  },
  data() {
    return {
      currentSort: "site",
      currentSortOrder: "desc",
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      footerTable: [
        "SITE",
        "UPGRADE_PLAN",
        "URL",
        "DATES",
        "LEGAL",
        "COOKIES",
        "PRIVACY"
      ],
      searchQuery: "",
      propsToSearch: ["site", "upgrade_plan", "url"],
      tableData: users,
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    handleEdit(item) {
      this.$APP_Services.data = {
        EditCurrentData: item
      };
      const reqdata = { title: "RequestAddOrEditSitePage", isEdit: true };
      this.$APP_Services.HANDLE_PAGE_APP_SERVICE(reqdata);
    },
    requestAddNewSitePage() {
      const reqdata = { title: "RequestAddOrEditSitePage", isEdit: false };
      this.$APP_Services.HANDLE_PAGE_APP_SERVICE(reqdata);
    }
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  }
};
</script>

<style lang="css" scoped>
.md-card .md-card-actions {
  border: 0;
  margin-left: 20px;
  margin-right: 20px;
}
.float-right {
  float: right;
}
</style>
