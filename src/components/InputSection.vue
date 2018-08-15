<template>
  <div>
    <fieldset
      v-if="typeof data === 'string'"
      class="section">
      <legend @click="show = !show">
        {{ name }}
      </legend>
      <div v-show="show">
        <JDInput
          :value="data"
          :label="name"
          @input="data = $event.value"
          @remove="remove($event, data)"/>
      </div>
    </fieldset>
    <fieldset
      v-if="dataIsArray"
      class="section">
      <legend @click="show = !show">
        {{ name }}
      </legend>
      <div v-show="show">
        <Draggable
          v-model="data">
          <InputGenerator
            v-for="(product, key) in data"
            :key="key"
            :index="key"
            :data="product"
            :name="name"
            @input="product[$event.key] = $event.value"
            @remove="remove($event, data)"/>
        </Draggable>
        <button @click="add(data[0], data)">
          Add
        </button>
      </div>
    </fieldset>
</div>
</template>

<script>
import Draggable from 'vuedraggable';
import InputGenerator from '@/components/InputGenerator.vue';
import JDInput from '@/components/JDInput.vue';

export default {
  components: {
    Draggable,
    InputGenerator,
    JDInput,
  },

  props: {
    data: {
      type: [Object, String, Array],
      default: () => {},
    },
    name: {
      type: [String, Number],
      default: '',
    },
    parentName: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    dataIsArray() {
      return Array.isArray(this.data);
    },
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

