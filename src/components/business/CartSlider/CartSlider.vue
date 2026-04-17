<template>
  <aside>
    <div class="cart__overlay" v-if="isOpen" @click="closeCart"></div>
    <div
      class="cart__panel"
      :class="{ 'cart__panel--open': isOpen }"
      @click="selectedItem = null"
    >
      <!-- Cart header -->
      <header class="cart__header">
        <h2 class="cart__title heading-36px-medium">Shopping Cart</h2>
        <img class="cart__close" :src="closeIcon" @click="closeCart" />
      </header>

      <!-- Cart items -->
      <CartItem
        v-for="item in sideCartItems"
        :key="item.id"
        :item="item"
        :selectedItem="selectedItem"
        @handleRemove="handleRemove($event)"
      />

      <!-- Cart order -->
      <CartOrder />
      <CartPayment />
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import CartItem from "./CartItem.vue";
import CartOrder from "./CartOrder.vue";
import CartPayment from "./CartPayment.vue";

// images
import closeIcon from "@/assets/images/components/shared/icon-close.png";

export default {
  name: "CartSlider",
  components: {
    CartItem,
    CartOrder,
    CartPayment,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedItem: null,
      closeIcon,
    };
  },
  computed: {
    ...mapGetters("products", ["sideCartItems"]),
  },
  methods: {
    ...mapActions("products", ["updateSideCartQuantity", "removeFromSideCart"]),
    closeCart() {
      this.$emit("closeCart");
    },
    handleRemove(productId) {
      this.removeFromSideCart(productId);
      this.selectedItem = null;
    },
  },
};
</script>

<style
  scoped
  src="@/assets/styles/components/business/CartSlider/cart-slider.css"
></style>
