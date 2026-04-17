<template>
  <div class="page">
    <AppHeader />
    <main class="page__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter/AppFooter.vue";

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page__main {
  flex: 1;
}
</style>
