<template>
  <div class="products">
    <header class="products__header">
      <AppBreadcrumb current="Products" />
      <div class="products__header-main">
        <h2 class="heading-36px-semibold">Explore Our Products</h2>
        <SortSelect @change="handleSortChange($event)" />
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
    <AppButton class="products__load-btn" v-if="!isLoading && !error">
      Load more ...
    </AppButton>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import AppBreadcrumb from "@/components/layout/AppBreadcrumb.vue";
import SortSelect from "@/components/UI/SortSelect.vue";
import ProductCard from "@/components/business/ProductCard.vue";
import AppButton from "@/components/UI/AppButton.vue";

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
    ...mapActions("products", ["fetchProducts", "fetchProductsByCategory"]),
    handleSortChange(value) {
      const sortMap = {
        "rating":              { sortBy: "rating",             order: "desc" },
        "price-asc":           { sortBy: "price",              order: "asc"  },
        "price-desc":          { sortBy: "price",              order: "desc" },
        "discountPercentage":  { sortBy: "discountPercentage", order: "desc" },
        "brand":               { sortBy: "brand",              order: "asc"  },
        "category":            { sortBy: "category",           order: "asc"  },
      };
      this.fetchProducts(sortMap[value]);
    },
  },
  created() {
    const category = this.$route.query.category;
    if (category) {
      this.fetchProductsByCategory(category);
    } else {
      this.fetchProducts({ sortBy: "rating", order: "desc" });
    }
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
