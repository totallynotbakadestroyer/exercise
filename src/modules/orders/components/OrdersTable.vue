<template>
  <el-table
    v-loading="loading"
    class="table"
    ref="multipleTable"
    :data="items"
    height="250"
    max-height="1080"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      header-align="center"
      align="center"
      :fixed="false"
      type="selection"
      width="50"
    />
    <el-table-column
      property="transactions[0].item.external_id"
      sortable
      label="Item"
      min-width="260"
    >
      <template scope="scope">
        <div style="display: flex; min-width: 240px">
          <div style="display: flex; align-items: center">
            <img
              height="64"
              width="64"
              :src="scope.row.transactions[0].item.image_url"
              alt="Item image"
            />
          </div>
          <div style="margin-left: 20px">
            <div class="text">
              {{ scope.row.transactions[0].item.title }}
            </div>
            <div class="text purple--text">
              <strong>Item ID: {{ scope.row.transactions[0].item.external_id }}</strong>
            </div>
            <div class="text"><strong>SKU: </strong>{{ scope.row.transactions[0].item.sku }}</div>
            <div class="text">
              <strong>Qty: </strong>{{ scope.row.transactions[0].quantity | quantityFilter }}
            </div>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      v-if="showedHeaders['date']"
      property="order_date"
      sortable
      label="Date"
      width="110"
    >
      <template scope="scope">
        {{ scope.row.order_date | dateFilter }}
      </template>
    </el-table-column>
    <el-table-column
      v-if="showedHeaders['orderDetails']"
      property="external_id"
      min-width="300"
      sortable
      label="Order Details"
    >
      <template scope="scope">
        <div class="purple--text">Order ID: {{ scope.row.external_id }}</div>
        <div>Transaction ID: {{ scope.row.external_transaction_id }}</div>
        <div>
          Transaction price: {{ scope.row.transactions[0].currency }}
          {{ scope.row.transactions[0].price }}
        </div>
        <div>Transaction status: {{ scope.row.status }}</div>
        <div>Date paid: {{ scope.row.transactions[0].created_at | dateFilter }}</div>
      </template>
    </el-table-column>
    <el-table-column
      v-if="showedHeaders['profit']"
      sortable
      property="order_date"
      label="Profit"
      width="120"
    >
      <template>$663.48</template>
    </el-table-column>
    <el-table-column
      v-if="showedHeaders['buyerDetails']"
      property="buyer_name"
      sortable
      label="Buyer Details"
      width="200"
    >
      <template scope="scope">
        <div class="text">Name: {{ scope.row.buyer.name }}</div>
        <div class="text">
          Username:
          <span class="purple--text">{{ scope.row.buyer.username }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      v-if="showedHeaders['shippingDate']"
      property="transactions[0].shipping_date"
      sortable
      min-width="240"
      label="Shipping Date"
    >
      <template scope="scope">
        {{ scope.row.transactions[0].shipping_date | dateFilter }}
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Actions" width="120">
      <template slot-scope="scope">
        <div style="text-align: center">
          <el-button
            @click="() => $router.push(`/${scope.row.id}`)"
            style="margin-right: 8px"
            class="el-button"
          >
            <font-awesome-icon :icon="['fa', 'bolt']" />
          </el-button>
          <el-popconfirm
            @confirm="() => deleteOrder(scope.row.id)"
            title="Are you sure to delete this?"
          >
            <el-button slot="reference" class="el-button">
              <font-awesome-icon :icon="['fa', 'trash']" />
            </el-button>
          </el-popconfirm>
        </div> </template
    ></el-table-column>
  </el-table>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OrdersTable',
  data() {
    return {
      multipleSelection: [],
    };
  },

  computed: {
    showedHeaders() {
      return this.$store.state.orders.showedHeaders;
    },
    items() {
      return this.$store.state.orders.orders;
    },
    loading() {
      return this.$store.state.orders.loading;
    },
    error() {
      return this.$store.state.orders.error;
    },
  },
  watch: {
    showedHeaders: {
      handler() {
        this.$store.dispatch('getOrders');
      },
      deep: true,
    },
  },
  methods: {
    async deleteOrder(id) {
      await this.$store.dispatch('deleteOrder', id);
      this.$notify({
        title: 'Success!',
        message: 'Order has been deleted successfully',
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  filters: {
    quantityFilter(value) {
      if (String(value).length === 1) {
        return `0${value}`;
      }
      return value;
    },
    dateFilter(value) {
      return moment(value).format('MMMM D YYYY h:mm A');
    },
  },
};
</script>

<style scoped lang="scss">
.purple--text {
  color: #8854dd;
}
.table {
  border-radius: 8px;
  &::v-deep .el-checkbox {
    height: 18px;
    width: 18px;
  }
  &::v-deep th {
    background-color: #f3eefc;
  }
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-button {
  padding: 0;
  width: 30px;
  height: 30px;
  background: rgba(241, 240, 254, 0.7);
  color: #8854dd;
  &::v-deep span {
    font-size: 16px;
  }
  &:hover {
    background-color: #8854dd;
    color: white;
  }
}
</style>
