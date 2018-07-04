<template>
  <div class="grid">

    <a href="#">

      <img src="http://via.placeholder.com/620x620"
        alt="">
    </a>
    <a href="#">
      <img src="http://via.placeholder.com/620x620"
        alt="">
    </a>
    <a href="#">
      <img src="http://via.placeholder.com/620x620"
        alt="">
    </a>
    <a href="#">
      <img src="http://via.placeholder.com/620x620"
        alt="">
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .grid {
    display: flex;
    // flex: 0 0 50%;
    flex-flow: row wrap;
    max-width: 1240px;
    justify-content: center;
    margin: 0 auto;
    background: hotpink;

    a {
      // padding: 0.25rem;
    }
  }
</style>

