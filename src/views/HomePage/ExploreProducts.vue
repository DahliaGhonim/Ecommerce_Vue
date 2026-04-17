<template>
  <section class="explore-products">
    <AppHeading>Our Products</AppHeading>
    <h2 class="explore-products__heading heading-36px-semibold">
      Explore Our Products
    </h2>

    <AppCarousel :rows="2">
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <ProductCard
        v-else
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </AppCarousel>

    <router-link to="/products">
      <AppButton class="explore-products__btn">View All Products</AppButton>
    </router-link>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import AppHeading from "@/components/UI/AppHeading.vue";
import AppCarousel from "@/components/UI/AppCarousel.vue";
import ProductCard from "@/components/business/ProductCard.vue";
import AppButton from "@/components/UI/AppButton.vue";

export default {
  name: "ExploreProducts",
  components: {
    AppHeading,
    AppCarousel,
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
    if (this.allProducts.length === 0) {
      this.fetchProducts();
    }
  },
};
</script>
