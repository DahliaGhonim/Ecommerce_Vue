<template>
  <div class="header-cart" @click="openCart">
    <img class="header-cart__icon" :src="cartIcon" alt="cart" />
    <span
      class="header-cart__badge title-12px-regular"
      v-if="sideCartCount > 0"
    >
      {{ sideCartCount }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cartIcon from "@/assets/images/components/shared/icon-cart.png";

export default {
  name: "HeaderCart",
  data() {
    return {
      cartIcon,
    };
  },
  computed: {
    ...mapGetters("products", ["sideCartCount"]),
  },
  methods: {
    openCart() {
      this.$emit("openCart");
    },
  },
};
</script>

<style scoped>
/* Cart */
.header-cart {
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
}

.header-cart__icon {
  width: 24px;
  height: 24px;
  display: block;
}

.header-cart__badge {
  position: absolute;
  top: -6px; /* TODO: check measurements in Figma design */
  right: -6px; /* TODO: check measurements in Figma design */

  background-color: var(--color-primary);
  color: var(--color-white);
  width: 16px;
  height: 16px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
