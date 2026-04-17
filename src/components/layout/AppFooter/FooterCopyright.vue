<template>
  <div class="footer-copyright">
    <div class="footer-copyright__content title-16px-regular">
      <img class="footer-copyright__icon" :src="copyrightIcon" />
      <p>Copyright Rimel 2022. All right reserved</p>
    </div>
  </div>
</template>

<script>
import copyrightIcon from "@/assets/images/components/footer/icon-copyright.png";

export default {
  name: "FooterCopyright",
  data() {
    return {
      copyrightIcon,
    };
  },
};
</script>

<style scoped>
.footer-copyright {
  opacity: 0.4;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.footer-copyright__content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  opacity: 0.6;
}

.footer-copyright__icon {
  width: 16.67px;
  height: 16.67px;
}
</style>
