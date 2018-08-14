<template>
  <div>
    <pre>
      {{ json }}
    </pre>
    <button @click="save">
      Save
    </button>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      json: '',
    };
  },

  methods: {
    save() {
      return this.json;
    },
  },
};
</script>

