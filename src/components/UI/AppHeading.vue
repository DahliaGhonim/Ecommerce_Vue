<template>
  <div class="heading">
    <div class="heading__icon"></div>
    <span class="heading__text title-16px-semibold">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "AppHeading",
};
</script>

<style scoped>
.heading {
  display: flex;
  align-items: center;
  gap: 16px;
}

.heading__icon {
  background-color: var(--color-primary);
  width: 20px;
  height: 40px;
  border-radius: 4px;
}

.heading__text {
  color: var(--color-primary);
}
</style>
