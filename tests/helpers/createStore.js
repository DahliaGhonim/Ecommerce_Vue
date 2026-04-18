import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export function createStore(overrides = {}) {
  return new Vuex.Store({
    modules: {
      products: {
        namespaced: true,
        state: {
          productsList: [],
          isLoading: false,
          error: null,
          browseCategoryList: [],
          categoriesLoading: false,
          categoriesError: null,
          ...overrides.state,
        },
        getters: {
          allProducts: (state) => state.productsList,
          isLoading: (state) => state.isLoading,
          error: (state) => state.error,
          allBrowseCategoris: (state) => state.browseCategoryList,
          categoriesLoading: (state) => state.categoriesLoading,
          categoriesError: (state) => state.categoriesError,
          ...overrides.getters,
        },
        actions: {
          fetchProducts: jest.fn(),
          fetchCategories: jest.fn(),
          ...overrides.actions,
        },
        mutations: {},
      },
    },
  });
}
