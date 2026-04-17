<template>
  <div class="download-app title-16px-regular">
    <h2 class="download-app__title title-20px-medium">Download App</h2>
    <div>
      <p class="download-app__text title-12px-medium">
        Save $3 with App New User Only
      </p>
      <div class="download-app__apps-wrapper">
        <img class="download-app__qrcode" :src="qrCode" />
        <div class="download-app__links">
          <img class="download-app__google" :src="googlePlay" />
          <img class="download-app__apple" :src="appStore" />
        </div>
      </div>
    </div>
    <div class="download-app__socials">
      <a v-for="(icon, index) in socials" :key="index" href="#">
        <img class="download-app__social-icon" :src="icon" />
      </a>
    </div>
  </div>
</template>

<script>
// images
import qrCode from "@/assets/images/components/footer/qr-code.png";
import googlePlay from "@/assets/images/components/footer/google-play.png";
import appStore from "@/assets/images/components/footer/app-store.png";
import facebookIcon from "@/assets/images/components/footer/icon-facebook.png";
import twitterIcon from "@/assets/images/components/footer/icon-twitter.png";
import instagramIcon from "@/assets/images/components/footer/icon-instagram.png";
import linkedinIcon from "@/assets/images/components/footer/icon-instagram.png";

export default {
  name: "FooterDownloadApp",
  data() {
    return {
      // images
      qrCode,
      googlePlay,
      appStore,

      socials: [facebookIcon, twitterIcon, instagramIcon, linkedinIcon],
    };
  },
};
</script>

<style scoped>
.download-app {
  max-width: 217px; /* TODO: check if can be reconsidered */
}

.download-app__title {
  margin-bottom: 24px;
}

.download-app__text {
  opacity: 0.7;
  margin-bottom: 8px;
}

.download-app__apps-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.download-app__qrcode {
  width: 76px;
  height: 76px;
}

.download-app__links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.download-app__google {
  width: 104px;
  height: 30px;
}

.download-app__apple {
  width: 104px;
  height: 34px;
}

.download-app__socials {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
}

.download-app__social-icon {
  display: block;
  width: 24px;
  height: 24px;
}
</style>
