<template>
  <div class="footer-col title-16px-regular">
    <h2 class="footer-col__title title-20px-medium">{{ footerInfo.title }}</h2>
    <p
      class="footer-col__text"
      v-for="(item, index) in footerInfo.items"
      :key="index"
    >
      {{ item }}
    </p>
    <ul class="footer-col__links">
      <li v-for="(link, index) in footerInfo.links" :key="index">
        <router-link class="footer-col__link" to="/">
          {{ link }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterColumn",
  props: {
    footerInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.footer-col {
  max-width: 217px; /* TODO: check if can be reconsidered */
}

.footer-col__title {
  margin-bottom: 24px;
}

.footer-col__text {
  margin-bottom: 16px;
}

.footer-col__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-col__link {
  color: var(--color-white);
  text-decoration: none;
}

.footer-col__link:visited {
  color: var(--color-white);
}
</style>
