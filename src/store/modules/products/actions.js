export default {
  async fetchProducts({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      commit("SET_PRODUCTS", data.products);
    } catch (error) {
      commit("SET_ERROR", error.message);
    } finally {
      commit("SET_LOADING", false);
    }
  },

  // Cart
  addToSideCart({ commit }, product) {
    commit("ADD_TO_SIDE_CART", product);
  },
  updateSideCartQuantity({ commit }, payload) {
    commit("UPDATE_SIDE_CART_QUANTITY", payload);
  },
  removeFromSideCart({ commit }, productId) {
    commit("REMOVE_FROM_SIDE_CART", productId);
  },
};
