<template>
  <header>
    <div class="logo">Exclusive</div>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>

    <div class="spacer"></div>
    <div class="search-wrapper">
      <input id="search" placeholder="What are you looking for?" />
      <img src="/src/assets/images/search-icon.png" alt="search" />
    </div>

    <div class="cart">
      <img src="/src/assets/images/cart1.png" alt="cart" />
      <span class="cart-badge">2</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  width: 100%;
  padding: 28px 80px; /* TODO: figma design deviation */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 66px; /* TODO: check whether this is correct */

  display: flex;
  align-items: center;
}

/* Logo */
.logo {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 24px;
  margin-right: 60px; /* TODO: figma design deviation (191px) */
  white-space: nowrap;
  flex-shrink: 0;
}

/* Nav */
nav ul {
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
}

a {
  text-decoration: none;
  color: #000000;
}

a:visited {
  color: #000000;
}

a.router-link-exact-active {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 2px;
}

.spacer {
  flex: 1;
}

/* Search */
.search-wrapper {
  background-color: #f5f5f5;
  padding: 7px 12px 7px 20px;
  border-radius: 4px;
  margin-right: 20px; /* TODO: figma design deviation (not really) -> 1270 - (998 + 243) */
  flex-shrink: 0;

  display: flex;
  gap: 12px; /* TODO: figma design deviation (34px) */
  align-items: center;
}

.search-wrapper input {
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

.search-wrapper input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.search-wrapper img {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Cart */
.cart {
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
}

.cart img {
  width: 24px;
  height: 24px;
  display: block;
}

.cart-badge {
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
