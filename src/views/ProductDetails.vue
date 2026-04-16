<template>
  <div class="product-details">
    <section>
      <AppHeading class="products-details__app-heading">
        More of this category
      </AppHeading>

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <div v-else class="product-details__more-products">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import AppHeading from "@/components/UI/AppHeading.vue";
import ProductCard from "@/components/business/ProductCard.vue";

export default {
  name: "ProductDetails",
  components: {
    AppHeading,
    ProductCard,
  },
  computed: {
    ...mapGetters("products", ["allProducts", "isLoading", "error"]),
    products() {
      return this.allProducts.slice(0, 4);
    },
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
  created() {
    if (this.allProducts.length === 0) {
      this.fetchProducts();
    }
  },
};
</script>

<style scoped>
.product-details {
  padding: 80px 40px 140px; /* TODO: figma design deviation (135px not 40px) */
}

/* *************************************************** */
/* More products section */
/* *************************************************** */
.products-details__app-heading {
  margin-bottom: 40px; /* TODO: figma design deviation (60px) */
}

.product-details__more-products {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
</style>
