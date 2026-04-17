<template>
  <section class="more-products">
    <AppHeading class="more-products__heading">
      More of this category
    </AppHeading>

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else class="more-products__products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppHeading from "@/components/UI/AppHeading.vue";
import ProductCard from "@/components/business/ProductCard.vue";

export default {
  name: "MoreProducts",
  components: {
    AppHeading,
    ProductCard,
  },
  computed: {
    ...mapGetters("products", [
      "allProducts",
      "isLoading",
      "error",
    ]),
    products() {
      return this.allProducts.slice(0, 4);
    },
  },
  methods: {
    ...mapActions("products", [
      "fetchProducts",
    ]),
  },
  created() {
    if (this.allProducts.length === 0) {
      this.fetchProducts();
    }
  },
};
</script>

<style scoped>
.more-products__heading {
  margin-bottom: 40px; /* TODO: figma design deviation (60px) */
}

.more-products__products {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
</style>
