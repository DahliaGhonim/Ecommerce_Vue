<template>
  <div class="header-search">
    <input
      class="header-search__input title-12px-regular"
      id="search"
      placeholder="What are you looking for?"
    />
    <img class="header-search__icon" :src="searchIcon" alt="search" />
  </div>
</template>

<script>
import searchIcon from "@/assets/images/components/shared/icon-search.png";

export default {
  name: "HeaderSearch",
  data() {
    return {
      searchIcon,
    };
  },
};
</script>

<style scoped>
/* Search */
.header-search {
  background-color: var(--color-gray);
  padding: 7px 12px 7px 20px;
  border-radius: 4px;
  margin-right: 20px; /* TODO: figma design deviation (not really) -> 1270 - (998 + 243) */
  flex-shrink: 0;

  display: flex;
  gap: 12px; /* TODO: figma design deviation (34px) */
  align-items: center;
}

.header-search__input {
  background-color: transparent;
  width: 180px; /* TODO: figma design deviation (153px) */
  outline: none;
  border: none;
}

.header-search__input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.header-search__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
</style>
