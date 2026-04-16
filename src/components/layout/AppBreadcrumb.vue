<template>
  <nav class="breadcrumb title-14px-regular">
    <router-link class="breadcrumb__link" to="/">Home</router-link>
    <span class="breadcrumb__separator">/</span>

    <router-link v-if="prev" class="breadcrumb__link" :to="prevLink">
      {{ prev }}
    </router-link>
    <span v-if="prev" class="breadcrumb__separator">/</span>

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
    prev: {
      type: String,
    },
    prevLink: {
      type: String,
    }
  },
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
}

.breadcrumb__link {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.breadcrumb__link:visited {
  color: rgba(0, 0, 0, 0.5);
}

.breadcrumb__separator {
  color: rgba(0, 0, 0, 0.5);
}

.breadcrumb__current {
  color: var(--color-black);
}
</style>
