<template>
  <div class="products">
    <header class="products__header">
      <AppBreadcrumb current="Products" />
      <div class="products__header-main">
        <h2 class="heading">Explore Our Products</h2>
        <SortSelect />
      </div>
    </header>
    <div class="products__grid">
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <ProductCard
        v-else
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <AppButton class="products__load-btn" v-if="!isLoading && !error">Load more ...</AppButton>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import AppBreadcrumb from "@/components/layout/AppBreadcrumb.vue";
import SortSelect from "@/components/UI/SortSelect.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import AppButton from "@/components/shared/AppButton.vue";

export default {
  name: "ProductsPage",
  components: {
    AppBreadcrumb,
    SortSelect,
    ProductCard,
    AppButton,
  },
  computed: {
    ...mapGetters("products", ["allProducts", "isLoading", "error"]),
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.products {
  padding: 20px 40px; /* TODO: figma design deviation (53px 125px) */
}

.products__header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products__grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 30px;
  row-gap: 68px;
  margin-top: 60px;
}

.products__load-btn {
  margin: 69px auto;
  display: block;
}
</style>
