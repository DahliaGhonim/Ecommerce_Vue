<template>
  <form class="cart-payment title-16px-regular" @submit.prevent>
    <div class="cart-payment__wrapper">
      <RadioInput
        :id="'visa'"
        :name="'payment'"
        :value="'visa'"
        :label="'Bank'"
      />
      <div class="cart-payment__icons">
        <img
          v-for="(payment, index) in payments"
          :key="index"
          :class="payment.class"
          :src="payment.icon"
        />
      </div>
    </div>
    <RadioInput
      :id="'cash'"
      :name="'payment'"
      :value="'cash'"
      :label="'Cash on delivery'"
    />
    <div class="cart-payment__coupon">
      <input
        class="cart-payment__coupon-input"
        id="coupon-code"
        type="text"
        placeholder="Coupon Code"
      />
      <AppButton>Apply</AppButton>
    </div>
    <AppButton type="submit">Place Order</AppButton>
  </form>
</template>

<script>
// Components
import RadioInput from "@/components/UI/RadioInput.vue";
import AppButton from "@/components/UI/AppButton.vue";

// images
import Bkash from "@/assets/images/icons/payment_methods/Bkash.png";
import Visa from "@/assets/images/icons/payment_methods/Visa.png";
import Mastercard from "@/assets/images/icons/payment_methods/Mastercard.png";
import Nagad from "@/assets/images/icons/payment_methods/Nagad.png";

export default {
  name: "CartPayment",
  components: {
    RadioInput,
    AppButton,
  },
  data() {
    return {
      payments: [
        {
          icon: Bkash,
          class: "cart-payment__icon-bkash",
        },
        {
          icon: Visa,
          class: "cart-payment__icon-visa",
        },
        {
          icon: Mastercard,
          class: "cart-payment__icon-mastercard",
        },
        {
          icon: Nagad,
          class: "cart-payment__icon-nagad",
        },
      ],
    };
  },
};
</script>

<style
  scoped
  src="@/assets/styles/components/business/CartSlider/cart-payment.css"
></style>
