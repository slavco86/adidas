<template>
  <div class="countdown">
    <div class="countdown__value">
      <div
        class="countdown__value__num"
        v-html="hours"/>
      <div class="countdown__value__label">{{ content.hours }}</div>
    </div>
    <div class="countdown__value">
      <div
        class="countdown__value__num"
        v-html="minutes"/>
      <div class="countdown__value__label">{{ content.minutes }}</div>
    </div>
    <div class="countdown__value">
      <div
        class="countdown__value__num"
        v-html="seconds"/>
      <div class="countdown__value__label">{{ content.seconds }}</div>
    </div>
  </div>
</template>

<script>
// https://github.com/fareez-ahamed/countdown-vuejs
export default {
  name: 'Countdown',
  props: {
    date: {
      default: 'August 15, 2219',
      type: String,
      validator(value) {
        return new Date(value).toString() !== 'Invalid Date';
      },
    },
    content: {
      type: Object,
      required: false,
      default() {
        return {
          days: 'days',
          hours: 'hours',
          minutes: 'mins',
          seconds: 'secs',
        };
      },
    },
  },

  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      interval: false,
    };
  },

  computed: {
    countdownDate() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },

    seconds() {
      return this.two_digits((this.countdownDate - this.now) % 60);
    },

    minutes() {
      return this.two_digits(Math.trunc((this.countdownDate - this.now) / 60) % 60);
    },

    hours() {
      return this.two_digits(Math.trunc((this.countdownDate - this.now) / 60 / 60));
    },

    days() {
      return this.two_digits(Math.trunc((this.countdownDate - this.now) / 60 / 60 / 24));
    },

    expired() {
      return (this.countdownDate - this.now >= 0) === false;
    },
  },

  mounted() {
    if (this.expired === false) {
      this.interval = setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
      }, 1000);
    }

    this.hasExpired();
  },

  updated() {
    this.hasExpired();
  },

  methods: {
    two_digits(value) {
      let str = value;

      if (str.toString().length <= 1) {
        str = `0${value.toString()}`;
      }

      return str.toString().split('').map(x => `<i>${x}</i>`).join('');
    },

    hasExpired() {
      if (this.expired === true) {
        this.$emit('expired', true);
        clearInterval(this.interval);
      }
    },
  },
};
</script>
