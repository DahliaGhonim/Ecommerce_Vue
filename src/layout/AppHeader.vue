<template>
  <header>
    <div class="logo">Exclusive</div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="search-wrapper">
      <input id="search" placeholder="What are you looking for?" />
      <img src="/src/assets/images/search-icon.png" />
    </div>
    <div class="cart">
      <img src="/src/assets/images/cart1.png">
      <span>2</span>
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
  padding: 86px 135px 22px; /* TODO: check whether this is correct */
  /* padding-bottom: 22px;   142 - (96 + 24) */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 66px; /* TODO: check whether this is correct */

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 118px;
  height: 24px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 24px;
  margin-right: 191px; /* TODO: make it reactive -> 444 - (135 + 118) */
}

ul {
  min-width: 258px; /* TODO: make it reactive */
  margin-right: 296px; /* TODO: make it reactive -> 998 - (444 + 258) */

  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
}

a {
  text-decoration: none;
}

a:visited {
  color: #000000;
}

a.router-link-exact-active {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.search-wrapper {
  background-color: #f5f5f5;
  padding: 7px 12px 7px 20px;
  border-radius: 4px;
  margin-right: 29px; /* TODO: make it interactive -> 1270 - (998 + 243) */

  display: flex;
  gap: 34px;
  align-items: center;
}

.search-wrapper input {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  width: 153px; /* TODO: check if needs to be reactive */
  height: 18px;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18px;
  border: none;
}

.search-wrapper input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.search-wrapper input:focus {
  outline: none;
  box-shadow: none;
}

.search-wrapper img {
  width: 16px;
  height: 16px;
}

.cart img {
  position: relative;
  width: 24px;
  height: 24px;
}

.cart span {
  position: absolute;
  top: -3;
}
</style>
