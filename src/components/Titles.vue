<template>
  <div v-if="headline || subtext" class="titles">
    <div v-if="headline" :is="explictHeadline" class="title1">{{ headline }}</div>
    <div v-if="subtext" class="title2" v-html="paragraphs"/>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: '',
    },
    subtext: {
      type: String,
      default: '',
    },
    weight: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    explictHeadline() {
      return (this.weight > 0 && this.weight <= 6) ? `h${this.weight}` : 'div';
    },

    paragraphs() {
      const textParts = this.subtext.split('\n\n');

      if (textParts.length > 1) {
        return `<p>${textParts.join('</p><p>')}</p>`;
      }

      return this.subtext;
    },
  },
};
</script>
