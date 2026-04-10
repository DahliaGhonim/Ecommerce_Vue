<template>
  <div>
    <label class="heading-20px-regular" for="sort-select__input">Sort by</label>
    <div class="title-14px-regular sort-select__wrapper">
      <img class="sort-select__arrow" :src="downIcon" />
      <select class="sort-select__input" id="sort-select__input">
        <option>Highest Rating</option>
        <option>Price: Low to high</option>
        <option>Price: High to low</option>
        <option>Discount Percentage</option>
        <option>Brand</option>
        <option>Category</option>
      </select>
    </div>
  </div>
</template>

<script>
import downIcon from "@/assets/images/components/shared/icon-down.png";

export default {
  name: "SortSelect",
  data() {
    return {
      downIcon,
    };
  },
};
</script>

<style scoped>
.sort-select__wrapper {
  position: relative;
  display: inline-block;
  margin-left: 12px; /* TODO: Not specified by Figma design */
}

.sort-select__input {
  /* Hide the default arrow */
  appearance: none;
  -webkit-appearance: none;

  background-color: var(--color-dark-gray);
  color: var(--color-white);
  padding: 15px 20px;
  border: 1px solid var(--color-black);
  border-radius: 4px;
  cursor: pointer;
}

.sort-select__arrow {
  position: absolute;
  right: 12.27px;
  top: 50%;
  transform: translateY(-50%);

  width: 12.73px;
  height: 7.78px;
  cursor: pointer;
}
</style>
