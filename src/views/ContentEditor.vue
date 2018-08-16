<template>
  <!-- <div v-if="json">
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
  </div> -->
  <!-- <ul>
    <li>root</li>
    <li>
      <ul>
        <li>item1</li>
        <li>
          <ul>
            <li>item1.1</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul> -->
  <ul>
    <RecursiveComponent
      :label="tree.label"
      :nodes="tree.nodes"/>
  </ul>

</template>

<script>
import { mapState } from 'vuex';
import InputSection from '@/components/InputSection.vue';
import RecursiveComponent from '@/components/RecursiveComponent.vue';

export default {
  components: {
    InputSection,
    RecursiveComponent,
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
      tree: {
        label: 'root',
        nodes: [
          {
            label: 'products',
            products: [
              {
                label: 'product.1',
              },
              {
                label: 'product.2',
                title: 'tit',
                sub: [
                  {
                    label: 'item1.2.1',
                  },
                ],
              },
            ],
          },
          {
            label: 'item2',
          },
        ],
      },
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

