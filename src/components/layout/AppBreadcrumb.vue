<template>
  <nav class="breadcrumb title-14px-regular">
    <router-link class="breadcrumb__home" to="/">Home</router-link>
    <span class="breadcrumb__separator">/</span>
    <span class="breadcrumb__current">{{ current }}</span>
  </nav>
</template>

<script>
export default {
  name: "AppBreadcrumb",
  props: {
    current: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
}

.breadcrumb__home {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.breadcrumb__home:visited {
  color: rgba(0, 0, 0, 0.5);
}

.breadcrumb__separator {
  color: rgba(0, 0, 0, 0.5);
}

.breadcrumb__current {
  color: var(--color-black);
}
</style>
