<template>
  <div class="category" @click="$emit('click', category.slug)">
    <div class="category__icon-wrapper">
      <img class="category__icon" :src="category.icon" />
    </div>
    <p class="category__title title-16px-regular">{{ category.name }}</p>
  </div>
</template>

<script>
export default {
  name: "BrowseCategory",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.category {
  width: 170px;
  height: 145px;
  padding: 18px 11px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.category:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
}

.category__icon-wrapper {
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
}

.category__icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.category:hover .category__icon {
  filter: brightness(0) invert(1);
}

.category__title {
  text-align: center;
}
</style>
