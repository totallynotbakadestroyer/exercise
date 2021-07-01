import orderService from '@/services/ordersService';

export default {
  async getOrder({ commit }, id) {
    commit('setError', null);
    commit('setLoading', true);
    const { data } = await orderService.getSingleOrder(id).catch(() => {
      commit('setError', true);
      commit('setLoading', false);
    });
    commit('setLoading', false);
    commit('setItem', data);
  },
};
