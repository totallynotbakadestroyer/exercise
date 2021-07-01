<template>
  <el-dropdown @command="handleCommand" :hide-on-click="false">
    <el-button class="el-button">
      <img src="../../../assets/Icon.svg" alt="icon" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="header in headers" :key="header.key" :command="header.key"
        >{{ header.name }}
        <span style="margin-left: 16px"
          ><font-awesome-icon
            :icon="showedHeaders[header.key] ? ['fa', 'eye'] : ['fa', 'eye-slash']"/></span
      ></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'ShowHeadersDropdown',
  data() {
    return {
      headers: [
        { name: 'Date', key: 'date' },
        { name: 'Order Details', key: 'orderDetails' },
        { name: 'Profit', key: 'profit' },
        { name: 'Buyer Details', key: 'buyerDetails' },
        { name: 'Shipping Date', key: 'shippingDate' },
      ],
    };
  },
  methods: {
    handleCommand(key) {
      this.$store.dispatch('setShowedHeaders', key);
    },
  },
  computed: {
    showedHeaders() {
      return this.$store.state.orders.showedHeaders;
    },
  },
};
</script>

<style scoped>
.el-button {
  padding: 0;
  width: 40px;
  height: 40px;
}
</style>
