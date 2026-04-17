<template>
  <header class="header">
    <router-link to="/"><AppLogo /></router-link>
    <HeaderNav />

    <div class="header__spacer"></div>

    <HeaderSearch />
    <HeaderCart @openCart="isCartOpen = true" />
    <CartSlider :isOpen="isCartOpen" @closeCart="isCartOpen = false" />
  </header>
</template>

<script>
// Components
import AppLogo from "@/components/UI/AppLogo.vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderCart from "./HeaderCart.vue";
import CartSlider from "@/components/business/CartSlider/CartSlider.vue";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    HeaderNav,
    HeaderSearch,
    HeaderCart,
    CartSlider,
  },
  data() {
    return {
      isCartOpen: false,
    };
  },
};
</script>
