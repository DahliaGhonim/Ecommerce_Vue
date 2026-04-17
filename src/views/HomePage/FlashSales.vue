<template>
  <section class="flash-sales">
    <AppHeading>Today's</AppHeading>
    <h2 class="flash-sales__heading heading-36px-semibold">Flash Sales</h2>

    <AppCarousel :fullWidth="true">
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <ProductCard
        v-else
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </AppCarousel>

    <router-link to="/products">
      <AppButton class="flash-sales__btn">View All Products</AppButton>
    </router-link>
  </section>
</template>

<script>
// TODO: add flash sales to store
import { mapGetters, mapActions } from "vuex";

// Components
import AppHeading from "@/components/UI/AppHeading.vue";
import AppCarousel from "@/components/UI/AppCarousel.vue";
import ProductCard from "@/components/business/ProductCard.vue";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "FlashSales",
  components: {
    AppHeading,
    AppCarousel,
    ProductCard,
    AppButton,
  },
  computed: {
    ...mapGetters("products", ["allProducts", "isLoading", "error"]),
    products() {
      return this.allProducts.slice(0, 8); // show first 8 for flash sales
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
