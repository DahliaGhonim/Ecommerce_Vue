<template>
  <div
    class="cart-item title-16px-regular"
    :class="{ 'cart-item--selected': selectedItem === item.id }"
    @click.stop="selectItem"
  >
    <button
      class="cart-item__remove-btn"
      v-if="selectedItem === item.id"
      @click.stop="handleRemove"
    >
      <img class="cart-item__remove-icon" :src="cancelIcon" />
    </button>
    <img class="cart-item__img" :src="item.thumbnail" />
    <p>{{ item.title }}</p>
    <QuantityInput
      :value="item.quantity"
      @click.stop
      @change="handleQuantityChange(item.id, $event)"
    />
    <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import QuantityInput from "@/components/UI/QuantityInput.vue";
import cancelIcon from "@/assets/images/icons/icon-cancel.png";

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      requied: true,
    },
    selectedItem: {
      required: true,
    },
  },
  components: {
    QuantityInput,
  },
  data() {
    return {
      cancelIcon,
    };
  },
  methods: {
    ...mapActions("products", ["updateSideCartQuantity"]),
    selectItem() {
      this.$emit("selectItem");
    },
    handleQuantityChange(productId, quantity) {
      this.updateSideCartQuantity({ productId, quantity });
    },
    handleRemove() {
      this.$emit("handleRemove", this.item.id);
    },
  },
};
</script>

<style
  scoped
  src="@/assets/styles/components/business/CartSlider/cart-item.css"
></style>
