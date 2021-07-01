<template>
  <el-card style="margin-bottom: 16px"
    ><template v-slot:header><h3 style="margin: 0">Buyer and delivery info</h3></template>
    <div class="card__item">Buyer name: {{ item.buyer.name }}</div>
    <div class="card__item">Receiver name: {{ item.address.name }}</div>
    <div class="card__item">Phone: {{ item.address.phone }}</div>
    <div class="card__item">Country code: {{ item.address.country_code }}</div>
    <div class="card__item">Country: {{ item.address.country }}</div>
    <div class="card__item">Shipping address: {{ item.address.formatted_address }}</div>
    <div class="card__item">Tracking number: {{ item.transactions[0].tracking_number }}</div>
    <div class="card__item">Shipping date: {{ item.transactions[0].shipping_date }}</div>
    <div class="card__item">Shipping status: {{ item.transactions[0].shipping_status }}</div>
  </el-card>
</template>

<script>
export default {
  name: 'DeliveryInfoCard',
  computed: {
    item() {
      return this.$store.state.singleOrder.item;
    },
  },
};
</script>

<style scoped></style>
