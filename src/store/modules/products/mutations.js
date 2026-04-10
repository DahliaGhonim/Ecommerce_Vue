const calculateTotal = (sideCartItems) =>
  sideCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

  // Cart
  ADD_TO_SIDE_CART(state, product) {
    const existing = state.sideCartItems.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      state.sideCartItems.push({ ...product, quantity: 1 });
    }
    state.totalUSD = calculateTotal(state.sideCartItems);
  },
  UPDATE_SIDE_CART_QUANTITY(state, { productId, quantity }) {
    const item = state.sideCartItems.find((item) => item.id === productId);
    if (item) item.quantity = quantity;
    state.totalUSD = calculateTotal(state.sideCartItems);
  },
  REMOVE_FROM_SIDE_CART(state, productId) {
    state.sideCartItems = state.sideCartItems.filter(
      (item) => item.id !== productId
    );
    state.totalUSD = calculateTotal(state.sideCartItems);
  },
};
