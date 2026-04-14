<template>
  <div class="home">
    <!-- Section: heading carousel -->
    <!-- Section: flash sales -->
    <section>
      <AppHeading>Today's</AppHeading>
      <h2 class="home__heading heading-36px-semibold">Flash Sales</h2>

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
        <AppButton class="home__btn">View All Products</AppButton>
      </router-link>
    </section>
    <div class="home__separator"></div>

    <!-- Section: browse by category -->
    <section>
      <AppHeading>Categories</AppHeading>
      <h2 class="home__heading heading-36px-semibold">Browse By Category</h2>

      <div class="home__categories">
        <p v-if="categoriesLoading">Loading...</p>
        <p v-else-if="error">{{ categoriesError }}</p>
        <!-- TODO: check an alternative for the key -->
        <BrowseCategory
          v-else
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
      </div>
    </section>
    <div class="home__separator"></div>

    <!-- Section: explore our products -->
    <section>
      <AppHeading>Our Products</AppHeading>
      <h2 class="home__heading heading-36px-semibold">Explore Our Products</h2>

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
        <AppButton class="home__btn">View All Products</AppButton>
      </router-link>
    </section>

    <!-- Section: why choose us -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppHeading from "@/components/UI/AppHeading.vue";
import AppButton from "@/components/UI/AppButton.vue";
import AppCarousel from "@/components/UI/AppCarousel.vue";
import ProductCard from "@/components/business/ProductCard.vue";
import BrowseCategory from "@/components/UI/BrowseCategory.vue";

export default {
  name: "HomePage",
  components: {
    AppHeading,
    AppButton,
    AppCarousel,
    ProductCard,
    BrowseCategory,
  },
  computed: {
    ...mapGetters("products", [
      "allProducts",
      "isLoading",
      "error",
      "allBrowseCategoris",
      "categoriesLoading",
      "categoriesError",
    ]),
    products() {
      return this.allProducts.slice(0, 8); // show first 8 for flash sales
    },
    categories() {
      return this.allBrowseCategoris.slice(0, 6);
    },
  },
  methods: {
    ...mapActions("products", ["fetchProducts", "fetchCategories"]),
  },
  created() {
    if (this.allProducts.length === 0) {
      this.fetchProducts();
      this.fetchCategories();
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

.home__separator {
  width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  margin: 69px 0;
}

.home__categories {
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
