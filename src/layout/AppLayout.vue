<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader.vue";
import AppFooter from "@/components/shared/AppFooter.vue";

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped></style>
