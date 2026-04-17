<template>
  <footer class="footer">
    <div class="footer__main">
      <FooterSubscribe />

      <FooterColumn
        v-for="(footerInfo, index) in footerColumns"
        :key="index"
        :footerInfo="footerInfo"
      />

      <FooterDownloadApp />
    </div>

    <FooterCopyright />
  </footer>
</template>

<script>
// Components
import FooterSubscribe from "./FooterSubscribe.vue";
import FooterColumn from "./FooterColumn.vue";
import FooterDownloadApp from "./FooterDownloadApp.vue";
import FooterCopyright from "./FooterCopyright.vue";

export default {
  name: "AppFooter",
  components: {
    FooterSubscribe,
    FooterColumn,
    FooterDownloadApp,
    FooterCopyright,
  },
  data() {
    return {
      footerColumns: [
        {
          title: "Support",
          items: [
            "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
            "exclusive@gmail.com",
            "+88015-88888-9999",
          ],
        },
        {
          title: "Account",
          links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
        },
        {
          title: "Quick Link",
          links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/styles/components/layout/AppFooter/app-footer.css"></style>
