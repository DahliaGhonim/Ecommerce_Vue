<template>
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
</template>

<script>
import AppLogo from "@/components/UI/AppLogo.vue";
import iconSend from "@/assets/images/components/shared/icon-send.png";

export default {
  name: "FooterSubscribe",
  components: {
    AppLogo,
  },
  data() {
    return {
      iconSend,
    };
  },
};
</script>
