<template>
  <aside>
    <div class="cart__overlay"></div>
    <div class="cart__panel" @click="selectedItem = null">
      <!-- Cart header -->
      <header class="cart__header">
        <h2 class="cart__title">Shopping Cart</h2>
        <img
          class="cart__close"
          src="/src/assets/images/icons/icon-close.png"
        />
      </header>

      <!-- Cart items -->
      <section class="cart__items">
        <div
          class="cart__item"
          :class="{ 'cart__item--selected': selectedItem === index }"
          v-for="(item, index) in items"
          :key="index"
          @click.stop="selectedItem = index"
        >
          <button class="cart__item-remove-btn" v-if="selectedItem === index">
            <img class="cart__item-remove-icon" :src="cancelIcon" />
          </button>
          <img
            class="cart__item-img"
            src="/src/assets/images/products/Gamepad-Cart-Small.png"
          />
          <p>H1 Gamepad</p>
          <QuantityInput />
          <p>$650</p>
        </div>
      </section>

      <!-- Cart order -->
      <section class="cart__order">
        <div class="cart__order-details">
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>
        <div class="cart__order-details">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div class="cart__order-total">
          <p>Total:</p>
          <p>$1750</p>
        </div>
        <form @submit.prevent>
          <div class="cart__order-payments-wrapper">
            <RadioInput
              :id="'visa'"
              :name="'payment'"
              :value="'visa'"
              :label="'Bank'"
            />
            <div class="cart__order-payments">
              <img class="cart__order-payment-bkash" :src="Bkash" />
              <img class="cart__order-payment-visa" :src="Visa" />
              <img class="cart__order-payment-mastercard" :src="Mastercard" />
              <img class="cart__order-payment-nagad" :src="Nagad" />
            </div>
          </div>
          <RadioInput
            :id="'cash'"
            :name="'payment'"
            :value="'cash'"
            :label="'Cash on delivery'"
          />
          <div class="cart__order-coupon">
            <input
              class="cart__order-coupon-input"
              id="coupon-code"
              type="text"
              placeholder="Coupon Code"
            />
            <AppButton>Apply</AppButton>
          </div>
          <AppButton type="submit">Place Order</AppButton>
        </form>
      </section>
    </div>
  </aside>
</template>

<script>
import QuantityInput from "./QuantityInput.vue";
import RadioInput from "./RadioInput.vue";
import AppButton from "@/components/shared/AppButton.vue";

// images
import cancelIcon from "@/assets/images/icons/icon-cancel.png";
import Bkash from "@/assets/images/icons/payment_methods/Bkash.png";
import Visa from "@/assets/images/icons/payment_methods/Visa.png";
import Mastercard from "@/assets/images/icons/payment_methods/Mastercard.png";
import Nagad from "@/assets/images/icons/payment_methods/Nagad.png";

export default {
  name: "CartSlider",
  components: {
    QuantityInput,
    RadioInput,
    AppButton,
  },
  data() {
    return {
      selectedItem: null,
      items: [1, 2, 3],

      // images
      cancelIcon,
      Bkash,
      Visa,
      Mastercard,
      Nagad,
    };
  },
};
</script>

<style scoped>
.cart__overlay {
  position: fixed;
  inset: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
}

.cart__panel {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;

  font-family: "Poppins", Arial, Helvetica, sans-serif;
  background-color: #ffffff;
  letter-spacing: 0;
  width: 540px;
  padding: 41px 0 80px; /* TODO: 80px is by myeself */

  overflow-y: auto;
  /* transform: translateX(0); */
}

/* *************************************************** */
/* Cart slider header */
/* *************************************************** */
.cart__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
}

.cart__title {
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 30px;
  margin-left: 31px;
}

.cart__close {
  width: 24px;
  height: 24px;
  margin-right: 42px;
  cursor: pointer;
}

/* *************************************************** */
/* Cart slider items section */
/* *************************************************** */
.cart__item {
  position: relative;
  width: 450px;
  height: 128px;
  padding: 38px;
  border-radius: 4px;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
  margin-left: 40px;
  margin-bottom: 44px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.cart__item--selected {
  background-color: #a0bce0;
}

.cart__item-remove-btn {
  position: absolute;
  top: 23px;
  left: 12px;

  background-color: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart__item-remove-icon {
  width: 24px;
  height: 24px;
}

.cart__item-img {
  width: 48.88px;
  height: 42.22px;
}

/* *************************************************** */
/* Cart slider order section */
/* *************************************************** */

.cart__order {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 50px 40px; /* TODO: figma design deviation */
}

.cart__order-details {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.cart__order-total {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 32px;
}

.cart__order-payments-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.cart__order-payments {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cart__order-payment-bkash {
  width: 37.8px;
  height: 16.8px;
}

.cart__order-payment-visa {
  width: 37.8px;
  height: 11.2px;
}

.cart__order-payment-mastercard {
  width: 39.2px;
  height: 25.2px;
}

.cart__order-payment-nagad {
  width: 39.2px;
  height: 18.2px;
}

.cart__order-coupon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 32px 0;
}

.cart__order-coupon-input {
  width: 300px;
  height: 56px;
  padding: 16px 24px;
  border: 1px solid #000000;
  border-radius: 4px;
}
</style>
