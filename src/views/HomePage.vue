<template>
  <div class="home">
    <!-- Section: heading carousel -->
    <!-- Section: flash sales -->
    <section>
      <AppHeading>Today's</AppHeading>
      <h2 class="home__heading heading-36px-semibold">Flash Sales</h2>

      <AppCarousel>
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
        <AppButton class="home__btn">View All Products</AppButton>
      </router-link>
    </section>
    <!-- Section: browse by category -->
    <!-- Section: explore our products -->
    <!-- Section: why choose us -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppHeading from "@/components/UI/AppHeading.vue";
import AppButton from "@/components/UI/AppButton.vue";
import AppCarousel from "@/components/UI/AppCarousel.vue";
import ProductCard from "@/components/business/ProductCard.vue";

export default {
  name: "HomePage",
  components: {
    AppHeading,
    AppButton,
    AppCarousel,
    ProductCard,
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

<style scoped>
.home {
  margin: 66px var(--home-horizontal-margin) 150px;
}

.home a {
  text-decoration: none;
}

.home__heading {
  margin: 24px 0 31px;
}

.home__btn {
  display: block;
  margin: 60px auto;
}
</style>
