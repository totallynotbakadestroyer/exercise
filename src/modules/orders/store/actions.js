import orderService from '@/services/ordersService';

export default {
  async getOrders({ commit, state }) {
    commit('setError', null);
    commit('setLoading', true);
    const { data } = await orderService.getOrders(state.currentPage, state.search).catch(() => {
      commit('setLoading', false);
      commit('setError', true);
    });
    commit('setLoading', false);
    commit('setOrders', data.items);
    commit('setTotalCount', data.total_count);
  },
  setCurrentPage({ commit }, currentPage) {
    commit('setCurrentPage', currentPage);
  },
  setSearch({ commit }, search) {
    commit('setSearch', search);
  },
  setShowedHeaders({ commit }, showedHeader) {
    commit('setShowedHeaders', showedHeader);
  },
  setLoading({ commit }, value) {
    commit('setLoading', value);
  },
  async deleteOrder({ commit, dispatch }, id) {
    commit('setError', null);
    commit('setLoading', true);
    await orderService.deleteOrder(id);
    commit('setLoading', false);
    await dispatch('getOrders');
  },
};
