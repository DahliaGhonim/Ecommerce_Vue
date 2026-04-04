<template>
  <footer class="footer">
    <!-- Footer copyright section -->
    <div class="footer__main">
      <!-- Column 1: logo + subscribe -->
      <div class="footer__main-col">
        <AppLogo class="footer__logo" />
        <h2 class="footer__col-title">Subscribe</h2>
        <p class="footer__col-text">Get 10% off your first order</p>
        <div class="footer__send-email">
          <input
            class="footer__email-input"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <img
            class="footer__send-icon"
            src="/src/assets/images/icons/icon-send.png"
          />
        </div>
      </div>

      <!-- Column 2: support -->
      <div class="footer__main-col">
        <h2 class="footer__col-title">Support</h2>
        <p class="footer__col-text">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p class="footer__col-text">exclusive@gmail.com</p>
        <p class="footer__col-text">+88015-88888-9999</p>
      </div>

      <!-- Column 3: account -->
      <div class="footer__main-col">
        <h2 class="footer__col-title">Account</h2>
        <ul class="footer__links">
          <li>
            <router-link class="footer__col-link" to="/">
              My Account
            </router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/">
              Login / Register
            </router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/">Cart</router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/">Wishlist</router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/">Shop</router-link>
          </li>
        </ul>
      </div>

      <!-- Column 4: quick link -->
      <div class="footer__main-col">
        <h2 class="footer__col-title">Quick Link</h2>
        <ul class="footer__links">
          <li>
            <router-link class="footer__col-link" to="/">
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/">
              Terms Of Use
            </router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/">FAQ</router-link>
          </li>
          <li>
            <router-link class="footer__col-link" to="/contact">
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Column 5: download app -->
      <div class="footer__main-col">
        <h2 class="footer__col-title">Download App</h2>
        <div>
          <p class="footer__apps-text">Save $3 with App New User Only</p>
          <div class="footer__apps-wrapper">
            <img
              class="footer__qrcode"
              src="/src/assets/images/icons/qr-code.png"
            />
            <div class="footer__apps-links">
              <img
                class="footer__app-google"
                src="/src/assets/images/icons/google-play.png"
              />
              <img
                class="footer__app-apple"
                src="/src/assets/images/icons/app-store.png"
              />
            </div>
          </div>
        </div>
        <div class="footer__socials">
          <a href="#">
            <img
              class="footer__social-icon"
              src="/src/assets/images/icons/icon-facebook.png"
            />
          </a>
          <a href="#">
            <img
              class="footer__social-icon"
              src="/src/assets/images/icons/icon-twitter.png"
            />
          </a>
          <a href="#">
            <img
              class="footer__social-icon"
              src="/src/assets/images/icons/icon-instagram.png"
            />
          </a>
          <a href="#">
            <img
              class="footer__social-icon"
              src="/src/assets/images/icons/icon-linkedin.png"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Footer copyright section -->
    <div class="footer__copyright">
      <div class="footer__copyright-content">
        <img
          class="footer__copyright-icon"
          src="/src/assets/images/icons/icon-copyright.png"
        />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from "@/components/shared/AppLogo.vue";
export default {
  name: "AppFooter",
  components: {
    AppLogo,
  },
};
</script>

<style scoped>
.footer {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  padding: 80px 0 24px;
  margin-top: 150px;
}

/* *************************************************** */
/* Footer main section */
/* *************************************************** */
.footer__main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 60px; /* TODO: figma design deviation (87px) */

  letter-spacing: 0;
  color: #fafafa;
  width: 100%;
  padding: 0 80px 60px; /* TODO: figma design deviation (135 not 80) */
}

/* General column styles */
.footer__main-col {
  max-width: 217px; /* TODO: check if can be reconsidered */
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.footer__logo {
  cursor: default;
  margin-bottom: 24px;
}

.footer__col-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 24px;
}

.footer__col-text {
  margin-bottom: 16px;
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__col-link {
  color: #fafafa;
  text-decoration: none;
}

.footer__col-link:visited {
  color: #fafafa;
}

/* Column 1: logo + subscribe */
.footer__send-email {
  width: 217px;
  padding: 12px 16px;
  border: 1.5px solid #fafafa;
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 32px;
}

.footer__email-input {
  background-color: transparent;
  color: rgba(250, 250, 250, 0.8); /* Not specified by Figma design */
  font-size: 16px;
  font-weight: 400;
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
}

.footer__email-input::placeholder {
  color: rgba(250, 250, 250, 0.4);
}

.footer__send-icon {
  display: block;
  width: 20px;
  height: 18px;
  cursor: pointer;
}

/* Column 5: download app */
.footer__apps-text {
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  opacity: 0.7;
  margin-bottom: 8px;
}

.footer__apps-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer__qrcode {
  width: 76px;
  height: 76px;
}

.footer__apps-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.footer__app-google {
  width: 104px;
  height: 30px;
}

.footer__app-apple {
  width: 104px;
  height: 34px;
}

.footer__socials {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
}

.footer__social-icon {
  display: block;
  width: 24px;
  height: 24px;
}

/* *************************************************** */
/* Footer copyright section */
/* *************************************************** */
.footer__copyright {
  opacity: 0.4;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.footer__copyright-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  opacity: 0.6;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
}

.footer__copyright-icon {
  width: 16.67px;
  height: 16.67px;
}
</style>
