<template>
  <!-- Custom Arrows -->
  <div class="chevron-arrows">
    <div class="chevron-arrow-wrap--left">
      <div class="chevron-arrow--left"/>
    </div>
    <slot/>
    <div class="chevron-arrow-wrap--right">
      <div class="chevron-arrow--right"/>
    </div>
  </div>
</template>

<style lang="scss">
.chevron-arrows {
  width: 100%;
  height: 40px;
  position: relative;
  margin-top: 1rem;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.chevron-arrow--left,
.chevron-arrow--right {
  border-bottom: 2px solid rgba(#fff, 0.6);
  border-right: 2px solid rgba(#fff, 0.6);
  display: inline-block;
  height: 15px;
  margin: 0 2rem;
  transition: border 0.5s ease-in-out;
  width: 15px;
}

.chevron-arrow--left {
  transform: rotate(-225deg);
}

.chevron-arrow--right {
  right: 0;
  transform: rotate(-45deg);
}

// Women
.category--women .chevron-arrow--left,
.category--women .chevron-arrow--right {
  border-color: rgba(#222, 0.6);
}

.category--women .chevron-arrow-wrap--left:hover .chevron-arrow--left {
  border-color: #222;
}

.category--women .chevron-arrow-wrap--right:hover .chevron-arrow--right {
  border-color: #222;
}

.chevron-arrow-wrap--left,
.chevron-arrow-wrap--right {
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover .chevron-arrow--left {
    border-color: #fff;
  }

  &:hover .chevron-arrow--right {
    border-color: #fff;
  }
}
</style>
