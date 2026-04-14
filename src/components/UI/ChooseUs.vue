<template>
  <div class="choose-us">
    <img class="choose-us-icon" :src="chooseUs.icon" />
    <p class="choose-us-title title-20px-semibold">{{ chooseUs.title }}</p>
    <p class="title-14px-regular">{{ chooseUs.text }}</p>
  </div>
</template>

<script>
export default {
  name: "ChooseUs",
  props: {
    chooseUs: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.choose-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.choose-us-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
}

.choose-us-title {
  text-transform: uppercase;
  margin-bottom: 8px;
}
</style>
