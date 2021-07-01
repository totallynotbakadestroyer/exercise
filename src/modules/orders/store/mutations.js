export default {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage;
  },
  setSearch(state, search) {
    state.search = search;
  },
  setTotalCount(state, totalCount) {
    state.totalCount = totalCount;
  },
  setLoading(state, loadingStatus) {
    state.loading = loadingStatus;
  },
  setError(state, error) {
    state.error = error;
  },
  setShowedHeaders(state, header) {
    state.showedHeaders[header] = !state.showedHeaders[header];
  },
};
