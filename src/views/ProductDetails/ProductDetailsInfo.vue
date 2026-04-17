<template>
  <section class="product-details__main">
    <p v-if="selectedProductLoading" class="product-details__state-msg title-14px-regular">
      Loading product...
    </p>
    <p
      v-else-if="selectedProductError"
      class="product-details__state-msg product-details__state-msg--error title-14px-regular"
    >
      {{ selectedProductError }}
    </p>

    <div v-else-if="selectedProduct" class="product-details__layout">
      <!-- Left: Thumbnail Gallery -->
      <div class="product-details__gallery">
        <div class="product-details__thumbnails">
          <div
            v-for="(img, index) in selectedProduct.images.slice(0, 4)"
            :key="index"
            class="product-details__thumbnail"
            :class="{
              'product-details__thumbnail--active':
                activeImageIndex === index,
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

      <!-- Right: Product Info -->
      <div class="product-details__info">
        <h1 class="heading-24px-semibold">
          {{ selectedProduct.title }}
        </h1>

        <!-- Rating Row -->
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
              ">
              ★
            </span>
          </div>
          <span class="title-14px-regular product-details__review-count">
            ({{
              selectedProduct.reviews ? selectedProduct.reviews.length : 0
            }}
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

        <!-- Price Row -->
        <div class="product-details__price-row">
          <span class="heading-24px-regular">
            ${{ discountedPrice }}
          </span>
          <span
            v-if="selectedProduct.discountPercentage"
            class="product-details__discount-badge title-12px-regular"
          >
            -{{ Math.round(selectedProduct.discountPercentage) }}%
          </span>
        </div>

        <!-- Description -->
        <p class="title-14px-regular product-details__description">
          {{ selectedProduct.description }}
        </p>

        <hr class="product-details__divider-line" />

        <!-- Category -->
        <div class="product-details__category-row heading-20px-regular">
          <span>Category:</span>
          <router-link
            :to="'/products?category=' + selectedProduct.category"
            class="product-details__category-link"
          >
            {{ capitalize(selectedProduct.category) }}
          </router-link>
        </div>

        <!-- Quantity + Buy Now + Wishlist -->
        <div class="product-details__actions title-20px-medium">
          <div class="product-details__qty-control">
            <button
              class="product-details__qty-btn"
              @click="decreaseQty"
              :disabled="quantity <= 1"
            >
              −
            </button>
            <span class="product-details__qty-value">
              {{ quantity }}
            </span>
            <AppButton
              class="product-details__qty-btn-add"
              @click.native="increaseQty"
            >
              +
            </AppButton>
          </div>

          <AppButton
            class="product-details__buy-btn"
            @click.native="handleBuyNow"
          >
            Buy Now
          </AppButton>

          <button class="product-details__wishlist-btn">
            <img :src="heartIcon" />
          </button>
        </div>

        <!-- Delivery Info Cards -->
        <div class="product-details__delivery">
          <div class="product-details__delivery-card">
            <div class="product-details__delivery-icon">
              <img class="product-details__delivery-icon-img" :src="returnIcon" />
            </div>
            <div class="product-details__delivery-text">
              <p class="title-16px-medium">Free Delivery</p>
              <p class="title-12px-medium">
                <a href="#" class="product-details__details-link">
                  Enter your postal code for Delivery Availability
                </a>
              </p>
            </div>
          </div>

          <div class="product-details__delivery-card">
            <div class="product-details__delivery-icon">
              <img class="product-details__delivery-icon-img" :src="deliveryIcon" />
            </div>
            <div class="product-details__delivery-text">
              <p class="title-16px-medium">Return Delivery</p>
              <p class="title-12px-medium">
                Free 30 Days Delivery Returns.
                <a href="#" class="product-details__details-link">Details</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppButton from "@/components/UI/AppButton.vue";

// images
import heartIcon from "@/assets/images/components/shared/icon-heart.png";
import returnIcon from "@/assets/images/components/shared/icon-return.png";
import deliveryIcon from "@/assets/images/components/shared/icon-delivery.png";

export default {
  name: "ProductDetailsInfo",
  components: {
    AppButton,
  },
  data() {
    return {
      quantity: 1,
      activeImageIndex: 0,

      // images
      heartIcon,
      returnIcon,
      deliveryIcon,
    };
  },
    computed: {
    ...mapGetters("products", [
      "selectedProduct",
      "selectedProductLoading",
      "selectedProductError",
    ]),
    discountedPrice() {
      if (!this.selectedProduct) return 0;
      const { price, discountPercentage } = this.selectedProduct;
      if (!discountPercentage) return price.toFixed(2);
      return (price * (1 - discountPercentage / 100)).toFixed(2);
    },
  },
  methods: {
    ...mapActions("products", [
      "fetchProductById",
      "addToSideCart",
    ]),
    increaseQty() {
      this.quantity++;
    },
    decreaseQty() {
      if (this.quantity > 1) this.quantity--;
    },
    handleBuyNow() {
      if (this.selectedProduct) {
        for (let i = 0; i < this.quantity; i++) {
          this.addToSideCart(this.selectedProduct);
        }
      }
    },
    capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  created() {
    const id = this.$route.params.id;
    this.fetchProductById(id);
  },
  watch: {
    "$route.params.id"(newId) {
      this.quantity = 1;
      this.activeImageIndex = 0;
      this.fetchProductById(newId);
    },
  },
}
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

/* ================================================== */
/* Info Panel                                         */
/* ================================================== */
.product-details__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Rating Row */
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

/* Price Row */
.product-details__price-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.product-details__discount-badge {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 4px 12px;
  border-radius: 4px;
}

/* Divider */
.product-details__divider-line {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  margin: 24px 0;
}

/* Category Row */
.product-details__category-row {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 57px;
}

/* TODO: re-visit the styles in figma */
.product-details__category-link {
  color: var(--color-black);
  font-weight: 600;
  text-decoration: underline;
}

.product-details__category-link:visited {
  color: var(--color-black);
}

/* Actions Row */
.product-details__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

/* Quantity Control */
.product-details__qty-control {
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.product-details__qty-btn {
  background: transparent;
  width: 40px;
  height: 100%;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.product-details__qty-btn:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, 0.05);
}

.product-details__qty-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.product-details__qty-value {
  min-width: 40px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* "+" AppButton inside the qty control — override default btn padding */
.product-details__qty-btn-add {
  width: 40px !important;
  height: 100% !important;
  padding: 0 !important;
  border-radius: 0 !important;
}

/* Buy Now AppButton */
.product-details__buy-btn {
  height: 44px;
  padding: 0 48px !important;
}

/* Wishlist Button */
.product-details__wishlist-btn {
  background: transparent;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.product-details__wishlist-btn img {
  width: 20px;
  height: 17.83px;
  transition: filter 0.3s ease;
}

.product-details__wishlist-btn:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.product-details__wishlist-btn:hover img {
  filter: brightness(0) invert(1);
}

/* ================================================== */
/* Delivery Cards                                     */
/* ================================================== */
.product-details__delivery {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
}

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

