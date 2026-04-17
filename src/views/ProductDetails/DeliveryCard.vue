<template>
  <div class="product-details__delivery-card">
    <div class="product-details__delivery-icon">
      <img class="product-details__delivery-icon-img" :src="icon" />
    </div>
    <div class="product-details__delivery-text">
      <p class="title-16px-medium">{{ title }}</p>
      <p class="title-12px-medium">
        {{ text }}
        <a href="#" class="product-details__details-link">
          {{ link }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-details__delivery-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
}

.product-details__delivery-card + .product-details__delivery-card {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
}

.product-details__delivery-icon {
  flex-shrink: 0;
}

.product-details__delivery-icon-img {
  width: 40px;
  height: 40px;
}

.product-details__delivery-text {
  display: flex;
  flex-direction: column;
  gap: 4px; /* TODO: figma design deviation (8px) */
}

.product-details__details-link {
  color: var(--color-black);
  text-decoration: underline;
}
</style>
