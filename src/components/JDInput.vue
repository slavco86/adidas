<template>
  <div>
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      v-model="inputValue"
      type="text"
      required
      @input="changeData">
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
    parentName: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      inputValue: this.value,
    };
  },

  // computed: {
  //   computedValue: {
  //     get() {
  //       return this.value;
  //     },
  //     set(newVal) {
  //       this.inputValue = newVal;
  //     },
  //   },
  // },

  methods: {
    changeData() {
      console.info(this.inputValue);
    },
  },
};
</script>

