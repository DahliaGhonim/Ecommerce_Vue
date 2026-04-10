<template>
  <div class="products">
    <header class="products__header">
      <AppBreadcrumb current="Products" />
      <div class="products__header-main">
        <h2 class="heading">Explore Our Products</h2>
        <SortSelect />
      </div>
    </header>
    <div class="products__grid">
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
      <ProductCard :isNew="false" :hasDiscount="false" />
    </div>
    <AppButton class="products__load-btn">Load more ...</AppButton>
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/layout/AppBreadcrumb.vue";
import SortSelect from "@/components/UI/SortSelect.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import AppButton from "@/components/shared/AppButton.vue";

export default {
  name: "ProductsPage",
  components: {
    AppBreadcrumb,
    SortSelect,
    ProductCard,
    AppButton,
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
