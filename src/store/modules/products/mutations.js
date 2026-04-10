export default {
  SET_PRODUCTS(state, products) {
    state.productsList = products;
  },
  SET_LOADING(state, value) {
    state.isLoading = value;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};
