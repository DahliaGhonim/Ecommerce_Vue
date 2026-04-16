export default {
  allProducts: (state) => state.productsList,
  isLoading: (state) => state.isLoading,
  error: (state) => state.error,

  // Product Details
  selectedProduct: (state) => state.selectedProduct,
  selectedProductLoading: (state) => state.selectedProductLoading,
  selectedProductError: (state) => state.selectedProductError,

  // Home
  allBrowseCategoris: (state) => state.browseCategoryList,
  categoriesLoading: (state) => state.categoriesLoading,
  categoriesError: (state) => state.categoriesError,

  // Cart
  sideCartItems: (state) => state.sideCartItems,
  sideCartCount: (state) =>
    state.sideCartItems.reduce((sum, item) => sum + item.quantity, 0),
  totalUSD: (state) => state.totalUSD,
};
