<template>
  <div class="product-details__gallery">
    <div class="product-details__thumbnails">
      <div
        v-for="(img, index) in selectedProduct.images.slice(0, 4)"
        :key="index"
        class="product-details__thumbnail"
        :class="{
          'product-details__thumbnail--active': activeImageIndex === index,
        }"
        @click="activeImageIndex = index"
      >
        <img :src="img" />
      </div>
    </div>

    <!-- Main Image -->
    <div class="product-details__main-img-wrapper">
      <img
        class="product-details__main-img"
        :src="selectedProduct.images[activeImageIndex]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeImageIndex: 0,
    };
  },
  watch: {
    "$route.params.id"() {
      this.activeImageIndex = 0;
    },
  },
};
</script>

<style scoped>
/* Gallery */
.product-details__gallery {
  display: flex;
  align-items: flex-start;
  gap: 16px; /* TODO: figma design deviation (30px) */
}

.product-details__thumbnails {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product-details__thumbnail {
  background-color: var(--color-gray);
  width: 170px;
  height: 138px;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border-color 0.2s ease;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.product-details__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}

.product-details__thumbnail--active {
  border-color: var(--color-primary);
}

.product-details__main-img-wrapper {
  background-color: var(--color-gray);
  width: 500px;
  height: 600px;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

.product-details__main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 27px;
}
</style>
