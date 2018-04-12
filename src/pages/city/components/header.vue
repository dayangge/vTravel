<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont city-back-icon">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  position: relative
  overflow: hidden
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center
  color: #fff;
  background: $bgColor
  .city-back-icon
    position: absolute
    left 0
    top: 0
    width: .64rem;
    font-size: .4rem;
    text-align: center;
    color: #fff;
</style>
