import categoryIcons from "./categoryIcons.js";
import fallbackIcon from "@/assets/images/store/modules/products/default.png";

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

  // Product Details
  async fetchProductById({ commit }, id) {
    commit("SET_SELECTED_PRODUCT_LOADING", true);
    commit("SET_SELECTED_PRODUCT_ERROR", null);
    commit("SET_SELECTED_PRODUCT", null);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) throw new Error("Product not found");
      const data = await response.json();
      commit("SET_SELECTED_PRODUCT", data);
    } catch (error) {
      commit("SET_SELECTED_PRODUCT_ERROR", error.message);
    } finally {
      commit("SET_SELECTED_PRODUCT_LOADING", false);
    }
  },

  // Home
  async fetchCategories({ commit }) {
    commit("SET_CATEGORIES_LOADING", true);
    commit("SET_CATEGORIES_ERROR", null);
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();

      const categories = data.map((name) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        icon: categoryIcons[name] || fallbackIcon,
      }));

      commit("SET_BROWSE_CATEGORIES", categories);
    } catch (error) {
      commit("SET_CATEGORIES_ERROR", error.message);
    } finally {
      commit("SET_CATEGORIES_LOADING", false);
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
