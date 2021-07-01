<template>
  <el-card class="box-card">
    <div style="text-align: center">
      <img height="250" width="250" :src="item.transactions[0].item.image_url" alt="Order image" />
    </div>
    <div class="title">
      {{ item.transactions[0].item.title }}
    </div>
    <div class="card__item">Channel: {{ item.channel }}</div>
    <div class="card__item">Order ID: {{ item.external_id }}</div>
    <div class="card__item">SKU: {{ item.sku || "Empty" }}</div>
    <div class="card__item">Is canceled: {{ item.cancel_status ? "Yes" : "No" }}</div>
    <div class="card__item">Is archived: {{ item.is_archived ? "Yes" : "No" }}</div>

    <div class="card__item">Order date: {{ item.order_date }}</div>
    <div class="card__item">Current status: {{ item.status }}</div>
    <div class="card__item purple--text">
      Item URL: <a href="#">{{ item.transactions[0].item.url }}</a>
    </div>
    <div class="card__item purple--text">
      Order URL: <a href="#">{{ item.url }}</a>
    </div>
    <div style="display: flex; justify-content: space-around; text-align: center; margin-top: 32px" class="card__actions">
      <el-button type="primary" @click="print">Contact buyer</el-button>
      <el-button type="info" @click="print">Print page</el-button>
      <el-popconfirm
        style="margin-left: 10px"
        @confirm="() => deleteOrder(item.id)"
        title="Are you sure to delete this order?"
      >
        <el-button slot="reference" type="warning">Delete order</el-button>
      </el-popconfirm>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'OrderCard',
  computed: {
    item() {
      return this.$store.state.singleOrder.item;
    },
  },
  methods: {
    async deleteOrder(id) {
      await this.$store.dispatch('deleteOrder', id);
      this.$notify({
        title: 'Success!',
        message: 'Order has been deleted successfully',
      });
      await this.$router.push('/');
    },
    print() {
      this.$notify({ title: 'Not implemented', message: 'Not yet impelemented' });
    },
  },
};
</script>

<style scoped lang="scss">
.card__actions {
  .el-button {
    margin-top: 10px;
  }
}
@media (max-width: 450px) {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
