export default {
  allProducts: (state) => state.productsList,
  isLoading: (state) => state.isLoading,
  error: (state) => state.error,

  // Cart
  sideCartItems: (state) => state.sideCartItems,
  sideCartCount: (state) =>
    state.sideCartItems.reduce((sum, item) => sum + item.quantity, 0),
  totalUSD: (state) => state.totalUSD,
};
