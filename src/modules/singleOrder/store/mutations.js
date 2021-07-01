export default {
  setItem(state, item) {
    state.item = item;
  },
  setLoading(state, loadingStatus) {
    state.loading = loadingStatus;
  },
  setError(state, error) {
    state.error = error;
  },
};
