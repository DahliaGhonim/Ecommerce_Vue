<template>
  <div class="product-details">
    <AppBreadcrumb
      v-if="selectedProduct"
      :current="selectedProduct.title"
      :prev="'Products'"
      :prevLink="'/products'"
      class="product-details__breadcrumb"
    />

    <ProductDetailsInfo />
    <MoreProducts />

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import AppBreadcrumb from "@/components/layout/AppBreadcrumb.vue";
import ProductDetailsInfo from "./ProductDetailsInfo.vue";
import MoreProducts from "./MoreProducts.vue";

export default {
  name: "ProductDetails",
  components: {
    AppBreadcrumb,
    ProductDetailsInfo,
    MoreProducts,
  },
  computed: {
    ...mapGetters("products", ["selectedProduct"]),
  },
  methods: {
    ...mapActions("products", ["fetchProductById"]),
  },
  created() {
    const id = this.$route.params.id;
    this.fetchProductById(id);
  },
};
</script>

<style scoped>
.product-details {
  padding: 80px 40px 140px; /* TODO: figma design deviation (135px not 40px) */
}

.product-details__breadcrumb {
  margin-bottom: 40px; 
}

</style>
