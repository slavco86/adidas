<template>
  <ul>
    <li
      v-for="item in topLevel"
      :key="item">
      {{ item }}
    </li>
    <li
        v-if="hasNestedChildren"
        v-for="(nestedChild, key) in nestedChildren">
      <div class="label">{{ 'label' }}</div>
      <RecursiveComponent
        :key="key"
        :data="nestedChild"/>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'RecursiveComponent',
  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
  },

  computed: {
    topLevel() {
      const keys = Object.keys(this.data);
      return keys.filter(key => typeof this.data[key] === 'string');
    },
    hasNestedChildren() {
      return (Object.keys(this.data).length > this.topLevel.length);
    },
    nestedChildren() {
      const children = Object.keys(this.data);
      return children.filter(key => typeof this.data[key] !== 'string').map(key => this.data[key]);
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  color: yellow;
}
</style>
