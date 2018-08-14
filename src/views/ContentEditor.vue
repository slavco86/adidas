<template>
  <div v-if="json.influencer">
    <form
      class="form">
      <InputGenerator
        v-for="influencer in json.influencer.products"
        :key="influencer"
        :data="influencer"
        @input="influencer[$event.key] = $event.value"/>
    </form>
    <pre>
      {{ json.influencer }}
    </pre>
    <button @click="save">
      Save
    </button>
  </div>
</template>

<script>
import InputGenerator from '@/components/InputGenerator.vue';

export default {
  components: {
    InputGenerator,
  },

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

    /deep/ input {
      width: 100%;
      margin-bottom: 1rem;
    }

    /deep/ label {
      font-size: 18px;
      display: block;
    }
  }
</style>

