<template>
  <footer class="footer">
    <!-- Footer copyright section -->
    <div class="footer__main">
      <!-- Column 1: logo + subscribe -->
      <div class="footer__main-col title-16px-regular">
        <AppLogo class="footer__logo" />
        <h2 class="footer__col-title title-20px-medium">Subscribe</h2>
        <p class="footer__col-text">Get 10% off your first order</p>
        <div class="footer__send-email">
          <input
            class="footer__email-input title-16px-regular"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <img class="footer__send-icon" :src="iconSend" />
        </div>
      </div>

      <!-- Column 2: support -->
      <div class="footer__main-col title-16px-regular">
        <h2 class="footer__col-title title-20px-medium">Support</h2>
        <p class="footer__col-text">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p class="footer__col-text">exclusive@gmail.com</p>
        <p class="footer__col-text">+88015-88888-9999</p>
      </div>

      <!-- Column 3: account -->
      <div class="footer__main-col title-16px-regular">
        <h2 class="footer__col-title title-20px-medium">Account</h2>
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
            <router-link class="footer__col-link" to="/products">
              Shop
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Column 4: quick link -->
      <div class="footer__main-col title-16px-regular">
        <h2 class="footer__col-title title-20px-medium">Quick Link</h2>
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
      <div class="footer__main-col title-16px-regular">
        <h2 class="footer__col-title title-20px-medium">Download App</h2>
        <div>
          <p class="footer__apps-text title-12px-medium">
            Save $3 with App New User Only
          </p>
          <div class="footer__apps-wrapper">
            <img class="footer__qrcode" :src="qrCode" />
            <div class="footer__apps-links">
              <img class="footer__app-google" :src="googlePlay" />
              <img class="footer__app-apple" :src="appStore" />
            </div>
          </div>
        </div>
        <div class="footer__socials">
          <a href="#">
            <img class="footer__social-icon" :src="facebookIcon" />
          </a>
          <a href="#">
            <img class="footer__social-icon" :src="twitterIcon" />
          </a>
          <a href="#">
            <img class="footer__social-icon" :src="instagramIcon" />
          </a>
          <a href="#">
            <img class="footer__social-icon" :src="linkedinIcon" />
          </a>
        </div>
      </div>
    </div>

    <!-- Footer copyright section -->
    <div class="footer__copyright">
      <div class="footer__copyright-content title-16px-regular">
        <img class="footer__copyright-icon" :src="copyrightIcon" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from "@/components/UI/AppLogo.vue";

// images
import iconSend from "@/assets/images/components/shared/icon-send.png";
import qrCode from "@/assets/images/components/footer/qr-code.png";
import googlePlay from "@/assets/images/components/footer/google-play.png";
import appStore from "@/assets/images/components/footer/app-store.png";
import facebookIcon from "@/assets/images/components/footer/icon-facebook.png";
import twitterIcon from "@/assets/images/components/footer/icon-twitter.png";
import instagramIcon from "@/assets/images/components/footer/icon-instagram.png";
import linkedinIcon from "@/assets/images/components/footer/icon-instagram.png";
import copyrightIcon from "@/assets/images/components/footer/icon-copyright.png";

export default {
  name: "AppFooter",
  components: {
    AppLogo,
  },
  data() {
    return {
      // images
      iconSend,
      qrCode,
      googlePlay,
      appStore,
      facebookIcon,
      twitterIcon,
      instagramIcon,
      linkedinIcon,
      copyrightIcon,
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: #ffffff;
  width: 100%;
  padding: 80px 0 24px;
}

/* *************************************************** */
/* Footer main section */
/* *************************************************** */
.footer__main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 60px; /* TODO: figma design deviation (87px) */

  color: var(--color-white);
  width: 100%;
  padding: 0 80px 60px; /* TODO: figma design deviation (135 not 80) */
}

/* General column styles */
.footer__main-col {
  max-width: 217px; /* TODO: check if can be reconsidered */
}

.footer__logo {
  cursor: default;
  margin-bottom: 24px;
}

.footer__col-title {
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
  color: var(--color-white);
  text-decoration: none;
}

.footer__col-link:visited {
  color: var(--color-white);
}

/* Column 1: logo + subscribe */
.footer__send-email {
  width: 217px;
  padding: 12px 16px;
  border: 1.5px solid var(--color-white);
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 32px;
}

.footer__email-input {
  background-color: transparent;
  color: rgba(250, 250, 250, 0.8); /* Not specified by Figma design */
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
}

.footer__copyright-icon {
  width: 16.67px;
  height: 16.67px;
}
</style>
