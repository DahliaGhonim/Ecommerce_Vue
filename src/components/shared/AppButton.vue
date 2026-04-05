<template>
  <button class="btn" :type="type">
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
  background-color: #db4444;
  color: #fafafa;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding: 16px 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
