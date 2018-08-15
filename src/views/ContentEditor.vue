<template>
  <div v-if="json.influencer">
    <form
      class="form">
      <div class="section">
        <Draggable
          v-model="json.influencer.products">
          <InputGenerator
            v-for="(influencer, key) in products"
            :key="key"
            :index="key"
            :data="influencer"
            :name="Object.keys(json.influencer)[0]"
            @input="influencer[$event.key] = $event.value"
            @remove="remove($event, products)"/>
        </Draggable>
        <button @click="add(products[0], products)">
          Add
        </button>
      </div>
      <button
        type="submit"
        @click="save">
        Download
      </button>
    </form>
    <pre>
      {{ json.influencer }}
    </pre>
  </div>
</template>

<script>
import InputGenerator from '@/components/InputGenerator.vue';
import Draggable from 'vuedraggable';

export default {
  components: {
    InputGenerator,
    Draggable,
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
  computed: {
    products() {
      return this.json.influencer.products;
    },
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
    remove(index, array) {
      array.splice(index, 1);
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

  .section {
    border: 2px solid white;
    margin-bottom: 1rem;
    padding: 1rem;
  }
</style>

