<template>
  <div class="product-details__info">
    <h1 class="heading-24px-semibold">
      {{ selectedProduct.title }}
    </h1>

    <ProductRating :selectedProduct="selectedProduct" />

    <!-- Price Row -->
    <div class="product-details__price-row">
      <span class="heading-24px-regular"> ${{ discountedPrice }} </span>
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

      <AppButton class="product-details__buy-btn" @click.native="handleBuyNow">
        Buy Now
      </AppButton>

      <button class="product-details__wishlist-btn">
        <img :src="heartIcon" />
      </button>
    </div>

    <!-- Delivery Info Cards -->
    <div class="product-details__delivery">
      <DeliveryCard
        :icon="returnIcon"
        title="Free Delivery"
        link="Enter your postal code for Delivery Availability"
      />

      <DeliveryCard
        :icon="deliveryIcon"
        title="Return Delivery"
        text="Free 30 Days Delivery Returns."
        link="Details"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ProductRating from "./ProductRating.vue";
import AppButton from "@/components/UI/AppButton.vue";
import DeliveryCard from "./DeliveryCard.vue";

// images
import heartIcon from "@/assets/images/components/shared/icon-heart.png";
import returnIcon from "@/assets/images/components/shared/icon-return.png";
import deliveryIcon from "@/assets/images/components/shared/icon-delivery.png";

export default {
  name: "ProductInfo",
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },
  components: {
    ProductRating,
    AppButton,
    DeliveryCard,
  },
  data() {
    return {
      quantity: 1,

      // images
      heartIcon,
      returnIcon,
      deliveryIcon,
    };
  },
  computed: {
    discountedPrice() {
      if (!this.selectedProduct) return 0;
      const { price, discountPercentage } = this.selectedProduct;
      if (!discountPercentage) return price.toFixed(2);
      return (price * (1 - discountPercentage / 100)).toFixed(2);
    },
  },
  methods: {
    ...mapActions("products", ["addToSideCart"]),
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
  watch: {
    "$route.params.id"() {
      this.quantity = 1;
    },
  },
};
</script>

<style scoped>
.product-details__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
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

.product-details__delivery {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
}
</style>
