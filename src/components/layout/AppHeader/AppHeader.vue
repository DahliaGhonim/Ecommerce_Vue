<template>
  <header class="header">
    <router-link to="/"><AppLogo /></router-link>
    <HeaderNav />

    <div class="header__spacer"></div>
    <div class="header__search">
      <input
        class="header__search-input title-12px-regular"
        id="search"
        placeholder="What are you looking for?"
      />
      <img class="header__search-icon" :src="searchIcon" alt="search" />
    </div>

    <div class="header__cart" @click="isCartOpen = true">
      <img class="header__cart-icon" :src="cartIcon" alt="cart" />
      <span
        class="header__cart-badge title-12px-regular"
        v-if="sideCartCount > 0"
      >
        {{ sideCartCount }}
      </span>
    </div>

    <CartSlider :isOpen="isCartOpen" @closeCart="isCartOpen = false" />
  </header>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import AppLogo from "@/components/UI/AppLogo.vue";
import HeaderNav from "./HeaderNav.vue";
import CartSlider from "@/components/business/CartSlider.vue";

// images
import searchIcon from "@/assets/images/components/shared/icon-search.png";
import cartIcon from "@/assets/images/components/shared/icon-cart.png";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    HeaderNav,
    CartSlider,
  },
  data() {
    return {
      isCartOpen: false,

      // images
      searchIcon,
      cartIcon,
    };
  },
  computed: {
    ...mapGetters("products", ["sideCartCount"]),
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 28px 80px; /* TODO: figma design deviation */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  /* margin-bottom: 66px; TODO: check whether this is correct */

  display: flex;
  align-items: center;
}

.header a {
  text-decoration: none;
  color: var(--color-black);
}

.header a:visited {
  color: var(--color-black);
}

.header__spacer {
  flex: 1;
}

/* Search */
.header__search {
  background-color: var(--color-gray);
  padding: 7px 12px 7px 20px;
  border-radius: 4px;
  margin-right: 20px; /* TODO: figma design deviation (not really) -> 1270 - (998 + 243) */
  flex-shrink: 0;

  display: flex;
  gap: 12px; /* TODO: figma design deviation (34px) */
  align-items: center;
}

.header__search-input {
  background-color: transparent;
  width: 180px; /* TODO: figma design deviation (153px) */
  outline: none;
  border: none;
}

.header__search-input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.header__search-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Cart */
.header__cart {
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
}

.header__cart-icon {
  width: 24px;
  height: 24px;
  display: block;
}

.header__cart-badge {
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
