<template>
  <el-card>
    <template v-slot:header><h3 style="margin: 0">Payment details</h3></template>
    <div class="card__item">Currency: {{ item.currency }}</div>
    <div class="card__item">Price: {{ item.transactions[0].price }}</div>
    <div class="card__item">Transaction ID: {{ item.external_transaction_id }}</div>
    <div class="card__item">Shipping Price: {{ item.transactions[0].shipping_price || "0" }}</div>
  </el-card>
</template>

<script>
export default {
  name: 'PaymentCard',
  computed: {
    item() {
      return this.$store.state.singleOrder.item;
    },
  },
};
</script>

<style scoped></style>
