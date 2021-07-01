<template>
  <el-container v-loading="loading">
    <retry-call v-if="error" :handle-retry="getSingleOrder" />
    <el-header height="48px" style="align-items: center; display: flex">
      <el-page-header v-if="!loading" @back="$router.push('/')">
        <span v-if="!loading && item" slot="content">
          {{ item.transactions[0].item.title }}
        </span>
      </el-page-header>
    </el-header>
    <el-main v-if="!loading"
      ><el-row v-if="!error" :gutter="20">
        <el-col :md="8">
          <order-card />
        </el-col>
        <el-col :md="16">
          <el-row>
            <el-col :span="24">
              <delivery-info-card />
            </el-col>
            <el-col :span="24">
              <payment-card />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-else style="text-align: center">An error occured.</el-row></el-main
    >
  </el-container>
</template>

<script>
import PaymentCard from '@/modules/singleOrder/components/PaymentCard.vue';
import DeliveryInfoCard from '@/modules/singleOrder/components/DeliveryInfoCard.vue';
import OrderCard from '@/modules/singleOrder/components/OrderCard.vue';
import RetryCall from '@/common/components/RetryCall.vue';

export default {
  name: 'SingleOrder',
  components: {
    RetryCall,
    OrderCard,
    DeliveryInfoCard,
    PaymentCard,
  },
  created() {
    this.getSingleOrder();
  },
  methods: {
    getSingleOrder() {
      this.$store.dispatch('getOrder', this.$route.params.id);
    },
  },
  computed: {
    error() {
      return this.$store.state.singleOrder.error;
    },
    loading() {
      return this.$store.state.singleOrder.loading;
    },
    item() {
      return this.$store.state.singleOrder.item;
    },
  },
};
</script>

<style lang="scss">
.el-page-header,
.el-page-header__content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box-card {
  margin-bottom: 16px;
}
.title {
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: bold;
}
.card__item {
  margin-bottom: 16px;
  line-break: anywhere;
}
.purple--text {
  a {
    color: #8854dd;
    text-decoration: none;
  }
}
</style>
