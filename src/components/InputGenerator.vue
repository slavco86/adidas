<template>
  <fieldset>
    <div
      v-for="(value, field) in data"
      :key="field"
      class="input-container">
      <JDInput
        v-if="typeof value === 'string'"
        :label="field"
        :value="value"
        @input="$emit('input', {key: field, value: $event})"/>
      <fieldset v-else>
        {{ field }}
        <JDInput
          v-for="(value2, field2) in value"
          :key="field2"
          :label="field2"
          :value="value2"
          @input="objectUpdate($event, field, value, field2)"/>
      </fieldset>
    </div>
  </fieldset>
</template>

<script>
import JDInput from '@/components/JDInput.vue';

export default {
  components: {
    JDInput,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    objectUpdate(input, key, value, name) {
      const payload = {
        key,
        value,
      };

      payload.value[name] = input;

      this.$emit('input', payload);
    },
  },
};
</script>

<style scoped>
fieldset {
  border: 2px solid yellow;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
