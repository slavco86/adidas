<template>
  <div v-if="json">
    <form
      class="form">
      <fieldset
        v-for="(section, name) in json"
        :key="name"
        class="main-section">
        <legend>
          {{ name }}
        </legend>
        <InputSection
          v-for="(value, name2) in section"
          :key="name2"
          :data="value"
          :name="name2"
          :parent-name="name"/>
      </fieldset>
      <button
        type="submit"
        @click="save">
        Download
      </button>
    </form>
    <pre>
      {{ json }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InputSection from '@/components/InputSection.vue';

export default {
  components: {
    InputSection,
  },

  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      show: false,
    };
  },
  computed: {
    products() {
      return this.json.influencer.products;
    },
    ...mapState([
      'json',
    ]),
  },

  mounted() {
    this.$store.commit('json', this.content);
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

  .main-section {
    border: 2px solid red;
    padding: 1rem;
    margin: 1rem;
  }
</style>

