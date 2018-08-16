<template>
  <li>
    <span>
      {{ label }}
    </span>
    <ul v-if="nodes.length">
      <RecursiveComponent
        v-for="(node, key) in nodes"
        :key="key"
        :nodes="nextLevel(node)"
        :label="node.label"/>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'RecursiveComponent',
  props: {
    nodes: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
  },

  methods: {
    nextLevel(node) {
      let whatever;

      const objKeys = Object.keys(node);

      objKeys.forEach((key) => {
        if (typeof node[key] !== 'string') {
          whatever = node[key];
        }
      });

      return whatever;
    },
  },
};
</script>

