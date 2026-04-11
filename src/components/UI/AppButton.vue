<template>
  <button class="btn title-16px-medium" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 16px 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
