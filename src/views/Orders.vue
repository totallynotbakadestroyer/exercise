<template>
  <el-main>
    <div class="header">
      <div class="header__title">
        <h1 class="purple--text">Manage your Orders</h1>
        <p>
          Manage your orders from the past 90 days - send messages, add tracking numbers, and more.
        </p>
      </div>
      <div class="header__interactive">
        <div class="interactive__search" style="margin-right: 7px">
          <el-input v-model="input" placeholder="Search ItemId..." @input="handleSearchInput" />
        </div>
        <show-headers-dropdown />
      </div>
    </div>
    <retry-call v-if="error" :handle-retry="getOrders" />
    <orders-table v-else />
    <div style="margin-top: 20px">
      <el-pagination
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        :pager-count="5"
        :page-size="10"
        :disabled="loading"
        hide-on-single-page
        class="pagination"
        background
        layout="prev, pager, next"
        :total="totalItems"
      />
    </div>
  </el-main>
</template>

<script>
import OrdersTable from '@/modules/orders/components/OrdersTable.vue';
import debounce from 'debounce';
import ShowHeadersDropdown from '@/modules/orders/components/ShowHeadersDropdown.vue';
import RetryCall from '@/common/components/RetryCall.vue';

export default {
  name: 'Orders',
  components: { RetryCall, ShowHeadersDropdown, OrdersTable },
  data() {
    return {
      input: '',
    };
  },
  created() {
    this.handleSearchInput = debounce(this.handleSearchInput, 200);
    this.getOrders();
  },
  methods: {
    getOrders() {
      this.$store.dispatch('getOrders');
    },
    handleCurrentChange(param) {
      this.$store.dispatch('setCurrentPage', param);
    },
    handleSearchInput(param) {
      this.$store.dispatch('setSearch', param);
    },
  },
  watch: {
    currentPage() {
      this.getOrders();
    },
    search() {
      this.getOrders();
    },
  },
  computed: {
    currentPage() {
      return this.$store.state.orders.currentPage;
    },
    search() {
      return this.$store.state.orders.search;
    },
    loading() {
      return this.$store.state.orders.loading;
    },
    error() {
      return this.$store.state.orders.error;
    },
    totalItems() {
      return this.$store.state.orders.totalCount;
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  border: 1px solid rgba(167, 183, 210, 0.19);
  width: fit-content;
  padding: 8px 4px;
  border-radius: 8px;
  &::v-deep button {
    background-color: white !important;
    border-radius: 50% !important;
  }
  &::v-deep .el-pager li {
    border-radius: 50% !important;
    &:not(.active) {
      background-color: white !important;
    }
  }
}
.purple--text {
  color: #8854dd;
}
.el-main {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  align-items: center;
  margin-bottom: 38px;
  .header__interactive {
    display: flex;
  }
  h1 {
    margin-top: 10px;
    margin-bottom: 8px;
  }
  p {
    margin: 0;
  }
}
@media (max-width: 860px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    .header__title {
      margin-bottom: 16px;
    }
    .header__interactive {
      width: 100% !important;
      .interactive__search {
        width: 100%;
      }
    }
  }
}
</style>
