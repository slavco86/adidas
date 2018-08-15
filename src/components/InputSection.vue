<template>
  <fieldset
    class="section">
    <legend @click="show = !show">
      {{ name }}
    </legend>
    <div v-show="show">
      <Draggable
        v-model="data.products">
        <InputGenerator
          v-for="(product, key) in data.products"
          :key="key"
          :index="key"
          :data="product"
          :name="name"
          @input="product[$event.key] = $event.value"
          @remove="remove($event, data.products)"/>
      </Draggable>
      <button @click="add(data.products[0], data.products)">
        Add
      </button>
    </div>
  </fieldset>
</template>

<script>
import Draggable from 'vuedraggable';
import InputGenerator from '@/components/InputGenerator.vue';

export default {
  components: {
    Draggable,
    InputGenerator,
  },

  props: {
    data: {
      type: [Object, String],
      default: () => {},
    },
    name: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
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
  .section {
    border: 2px solid white;
    margin-bottom: 1rem;
    padding: 1rem;
  }
</style>

