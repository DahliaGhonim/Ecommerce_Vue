<template>
  <section class="cart-order title-16px-regular">
    <div class="cart-order__details">
      <p>Subtotal:</p>
      <p>${{ totalUSD.toFixed(2) }}</p>
    </div>
    <div class="cart-order__details">
      <p>Shipping:</p>
      <p>Free</p>
    </div>
    <div class="cart-order__total">
      <p>Total:</p>
      <p>${{ totalUSD.toFixed(2) }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartOrder",
  computed: {
    ...mapGetters("products", ["totalUSD"]),
  },
};
</script>

<style scoped>
.cart-order {
  margin: 50px 40px; /* TODO: figma design deviation */
}

.cart-order__details {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.cart-order__total {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 32px;
}
</style>
