<template>
  <header class="header">
    <AppLogo />

    <nav>
      <ul class="header__links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>

    <div class="header__spacer"></div>
    <div class="header__search">
      <input
        class="header__search-input"
        id="search"
        placeholder="What are you looking for?"
      />
      <img
        class="header__search-icon"
        src="/src/assets/images/icons/icon-search.png"
        alt="search"
      />
    </div>

    <div class="header__cart">
      <img
        class="header__cart-icon"
        src="/src/assets/images/icons/icon-cart.png"
        alt="cart"
      />
      <span class="header__cart-badge">2</span>
    </div>
  </header>
</template>

<script>
import AppLogo from "@/components/shared/AppLogo.vue";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 28px 80px; /* TODO: figma design deviation */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 66px; /* TODO: check whether this is correct */

  display: flex;
  align-items: center;
}

/* Nav */
.header__links {
  display: flex;
  align-items: center;
  gap: 40px; /* Relatively: 540 - (444 + 48) */
  list-style: none;

  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  margin-left: 60px; /* TODO: figma design deviation (191px) */
  margin-right: 60px; /* TODO: check whether this is correct */
}

.header__links a {
  text-decoration: none;
  color: #000000;
}

.header__links a:visited {
  color: #000000;
}

.header__links a.router-link-exact-active {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 2px;
}

.header__spacer {
  flex: 1;
}

/* Search */
.header__search {
  background-color: #f5f5f5;
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
  color: rgba(0, 0, 0, 0.5);
  width: 180px; /* TODO: figma design deviation (153px) */
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18px;
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

  background-color: #db4444;
  color: #fafafa;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18px;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
