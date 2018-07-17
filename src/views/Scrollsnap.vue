<template>
  <div class="scroll-snap">
    <div class="content">
      <h1>Scroll Snap</h1>
    </div>
    <div class="content">
      <h1>Scroll Snap 2</h1>
    </div>
    <div class="content">
      <h1>Scroll Snap 3</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    height: 100vh;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
      background-color: hotpink;
    }

    &:last-child {
      background-color: yellowgreen;
    }
  }
</style>
