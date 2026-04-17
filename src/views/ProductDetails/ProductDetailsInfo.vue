<template>
  <section class="product-details__main">
    <p
      v-if="selectedProductLoading"
      class="product-details__state-msg title-14px-regular"
    >
      Loading product...
    </p>
    <p
      v-else-if="selectedProductError"
      class="product-details__state-msg product-details__state-msg--error title-14px-regular"
    >
      {{ selectedProductError }}
    </p>

    <div v-else-if="selectedProduct" class="product-details__layout">
      <ProductGallery :selectedProduct="selectedProduct" />
      <ProductInfo :selectedProduct="selectedProduct" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import ProductGallery from "./ProductGallery.vue";
import ProductInfo from "./ProductInfo.vue";

export default {
  name: "ProductDetailsInfo",
  components: {
    ProductGallery,
    ProductInfo,
  },
  computed: {
    ...mapGetters("products", [
      "selectedProduct",
      "selectedProductLoading",
      "selectedProductError",
    ]),
  },
  methods: {
    ...mapActions("products", ["fetchProductById"]),
  },
  created() {
    const id = this.$route.params.id;
    this.fetchProductById(id);
  },
  watch: {
    "$route.params.id"(newId) {
      this.fetchProductById(newId);
    },
  },
};
</script>

<style scoped>
.product-details__main {
  margin-bottom: 140px;
}

/* TODO: not specified by Figma */
.product-details__state-msg {
  padding: 40px 0;
  color: var(--color-black);
  opacity: 0.6;
}

/* TODO: not specified by Figma */
.product-details__state-msg--error {
  color: var(--color-primary);
  opacity: 1;
}

/* Layout: gallery left, info right */
.product-details__layout {
  display: flex;
  gap: 70px;
  align-items: flex-start;
}
</style>
