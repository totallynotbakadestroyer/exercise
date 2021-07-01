import Vue from 'vue';
import Vuex from 'vuex';
import ordersModule from '@/modules/orders/store';
import singleOrderModule from '@/modules/singleOrder/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    orders: ordersModule,
    singleOrder: singleOrderModule,
  },
});
