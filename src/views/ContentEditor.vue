<template>
  <div v-if="json.influencer">
    <form
      class="form">
      <InputGenerator
        v-for="(influencer, key) in json.influencer.products"
        :key="key"
        :data="influencer"
        @input="influencer[$event.key] = $event.value"/>
      <button
        type="submit"
        @click="save">
        Download
      </button>
      <button @click="add(json.influencer.products[0], json.influencer.products)">
        Add
      </button>
    </form>
    <pre>
      {{ json.influencer }}
    </pre>
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
    add(object, array) {
      const newObject = JSON.parse(JSON.stringify(object));
      Object.keys(newObject).forEach((key) => {
        if (typeof newObject[key] === 'string') {
          newObject[key] = '';
        } else {
          Object.keys(newObject[key]).forEach((key2) => {
            newObject[key][key2] = '';
          });
        }
      });
      array.push(newObject);
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

