<template>
  <div>
    <div class="header border-bottom">
      <slot></slot>
      <div @click="$router.go(-1)">
        <span class="iconfont city-back-icon">&#xe624;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-header'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position: fixed
    overflow: hidden
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center
    color: $headerColor;
    background: $bgColor
    top: 0;
    left: 0;
    right: 0;
    z-index 999
    .city-back-icon
      position: absolute
      left 0
      top: 0
      width: .64rem;
      font-size: .4rem;
      text-align: center;
      color: $headerColor;
</style>
