<template>
  <div class="quantity-input">
    <input
      class="quantity-input__field"
      type="number"
      v-model.number="quantity"
    />
    <div class="quantity-input__controls">
      <button class="quantity-input__btn" @click.stop="increment">
        <img
          class="quantity-input__arrow"
          :src="upIcon"
        />
      </button>
      <button class="quantity-input__btn" @click.stop="decrement">
        <img
          class="quantity-input__arrow"
          :src="downIcon"
        />
      </button>
    </div>
  </div>
</template>

<script>
import upIcon from "@/assets/images/components/shared/icon-up.png";
import downIcon from "@/assets/images/components/shared/icon-down.png";

export default {
  name: "QuantityInput",
  props: {
    initialQuantity: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      quantity: this.initialQuantity,

      // images
      upIcon,
      downIcon,
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.quantity-input {
  width: 72px;
  height: 44px;
  padding: 10px 12px;
  border: 1.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hide default browser spinner */
.quantity-input__field::-webkit-inner-spin-button,
.quantity-input__field::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.quantity-input__field[type="number"] {
  appearance: textfield; /* TODO: check if needs to be changed */
}

.quantity-input__field {
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  min-width: 0;
  border: none;
  outline: none;
}

.quantity-input__controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quantity-input__btn {
  background-color: transparent;
  line-height: 0;
  padding: 5.33px 4px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-input__arrow {
  width: 8.49px; /* TODO: this is the reverse of the figma design */
  height: 5.19px; /* TODO: width is 8.49 height is 5.19 */
}
</style>
