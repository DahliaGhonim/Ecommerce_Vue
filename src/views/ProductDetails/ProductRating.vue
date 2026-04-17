<template>
  <div class="product-details__rating-row">
    <div class="product-details__stars">
      <span
        v-for="star in 5"
        :key="star"
        class="product-details__star"
        :class="
          star <= Math.round(selectedProduct.rating)
            ? 'product-details__star--filled'
            : 'product-details__star--empty'
        "
      >
        ★
      </span>
    </div>
    <span class="title-14px-regular product-details__review-count">
      ({{ selectedProduct.reviews ? selectedProduct.reviews.length : 0 }}
      Reviews)
    </span>
    <span class="product-details__divider">|</span>
    <span
      class="title-14px-regular product-details__stock"
      :class="
        selectedProduct.stock > 0
          ? 'product-details__stock--in'
          : 'product-details__stock--out'
      "
    >
      {{ selectedProduct.stock > 0 ? "In Stock" : "Out of Stock" }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ProductRating",
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-details__rating-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}

.product-details__stars {
  display: flex;
  gap: 2px;
}

/* TODO: replace with stars images */
.product-details__star {
  font-size: 18px;
}

.product-details__star--filled {
  color: var(--color-yellow);
}

.product-details__star--empty {
  color: var(--color-medium-gray);
}

.product-details__review-count {
  color: rgba(0, 0, 0, 0.5);
}

.product-details__divider {
  color: rgba(0, 0, 0, 0.5);
}

.product-details__stock--in {
  color: var(--color-green);
}

.product-details__stock--out {
  color: var(--color-primary);
}
</style>
