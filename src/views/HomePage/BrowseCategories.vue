<template>
  <section class="browse-categories">
    <AppHeading>Categories</AppHeading>
    <h2 class="browse-categories__heading heading-36px-semibold">
      Browse By Category
    </h2>

    <div class="browse-categories__main">
      <p v-if="categoriesLoading">Loading...</p>
      <p v-else-if="categoriesError">{{ categoriesError }}</p>
      <BrowseCategory
        v-else
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppHeading from "@/components/UI/AppHeading.vue";
import BrowseCategory from "./BrowseCategory.vue";

export default {
  name: "BrowseCategories",
  components: {
    AppHeading,
    BrowseCategory,
  },
  computed: {
    ...mapGetters("products", [
      "allBrowseCategoris",
      "categoriesLoading",
      "categoriesError",
    ]),
    categories() {
      return this.allBrowseCategoris.slice(0, 6);
    },
  },
  methods: {
    ...mapActions("products", ["fetchCategories"]),
  },
  created() {
    if (this.allBrowseCategoris.length === 0) {
      this.fetchCategories();
    }
  },
};
</script>
