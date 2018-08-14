<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      v-model="inputValue"
      type="text"
      required
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      inputValue: this.value,
    };
  },
};
</script>

