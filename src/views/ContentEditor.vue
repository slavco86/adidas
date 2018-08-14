<template>
  <div>
    <form
      v-if="json.influencer"
      class="form">
      <div
        v-for="(value, field) in json.influencer.products[0]"
        :key="field"
        class="input-container">
        <label :for="field">{{ field }}</label>
        <input
          :id="field"
          v-model="json.influencer.products[0][field]"
          type="text">
      </div>
    </form>
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
      json: JSON.parse(JSON.stringify(this.content)),
    };
  },

  methods: {
    save() {
      const content = JSON.stringify(this.json, null, 2);
      const a = document.createElement('a');
      const file = new Blob([content], { type: 'application/json' });

      a.href = URL.createObjectURL(file);
      a.download = `${this.$route.params.gender}.${this.$route.params.franchise}.json`;
      a.click();
    },
  },
};
</script>

<style lang="scss" scoped>
  .form {
    max-width: 500px;
    margin: 0 auto;

    input {
      width: 100%;
      margin-bottom: 1rem;
    }

    label {
      font-size: 18px;
      display: block;
    }
  }
</style>

