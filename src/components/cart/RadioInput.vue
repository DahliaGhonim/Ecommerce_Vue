<template>
  <div class="radio-input">
    <input
      class="radio-input__field"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
    />
    <label class="radio-input__label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.radio-input {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.radio-input__field[type="radio"] {
  width: 24px;
  height: 24px;
  accent-color: #000000;
}

.radio-input__field[type="radio"],
.radio-input__label {
  cursor: pointer;
}
</style>
