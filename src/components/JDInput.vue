<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      v-model="computedValue"
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
      inputValue: this.computedValue,
    };
  },

  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.inputValue = newVal;
      },
    },
  },
};
</script>

