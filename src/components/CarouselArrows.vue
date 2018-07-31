<template>
  <!-- Custom Arrows -->
  <div class="chevron-arrows">
    <div class="chevron-arrow-left"/>
    <div class="chevron-arrow-right"/>
  </div>
</template>

<style lang="scss">
.chevron-arrows {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 100%;
}

.chevron-arrow-left,
.chevron-arrow-right {
  border-bottom: 2px solid rgba(#fff, 0.6);
  border-right: 2px solid rgba(#fff, 0.6);
  cursor: pointer;
  display: inline-block;
  height: 15px;
  margin: 0 2rem;
  position: absolute;
  bottom: 7.65rem;
  transition: border 0.5s ease-in-out;
  width: 15px;
}

.chevron-arrow-left {
  left: 55rem;
  transform: rotate(-225deg);

  &:hover {
    border-color: #fff;
  }
}

.chevron-arrow-right {
  right: 55rem;
  transform: rotate(-45deg);

  &:hover {
    border-color: #fff;
  }
}

// Women
.category--women .chevron-arrow-left,
.category--women .chevron-arrow-right {
  border-color: rgba(#222, 0.6);
}

.category--women .chevron-arrow-left:hover {
  border-color: #222;
}

.category--women .chevron-arrow-right:hover {
  border-color: #222;
}
</style>
