<template>
  <div id="container">
    <section>
      <h1>First</h1>
    </section>
    <section>
      <h1>Second</h1>
    </section>
    <section>
      <h1>Third</h1>
    </section>

    <div class="status" v-cloak>
      Active panel: {{activePanelName}}
    </div>
  </div>
</template>

<script>
import PanelSnap from 'panelsnap';

export default {
  data() {
    return {
      activePanel: null,
    };
  },

  computed: {
    activePanelName() {
      if (!this.activePanel) {
        return '';
      }
      return this.activePanel.querySelector('h1').innerText;
    },
  },

  mounted() {
    this.panelSnapInstance = new PanelSnap({
      panelSelector: '#container > section',
    });

    this.panelSnapInstance.on('activatePanel', this.activatePanel);
  },

  methods: {
    activatePanel(panel) {
      this.activePanel = panel;
    }
  },
};
</script>

<style lang="scss" scoped>
  section {
    min-height: calc(100vh + 20px);
    background-color: cyan;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    &:nth-child(2) {
      background-color: hotpink;
    }

    &:last-child {
      background-color: greenyellow;
    }
  }

  .status {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    text-align: center;
  }
  [v-cloak] {
    visibility: hidden;
  }
</style>
