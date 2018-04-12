<template>
  <div class="search">
    <input type="text" placeholder="请输入城市" class="search-input">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  background $bgColor
  padding 0 .1rem
  height:.72rem
  .search-input
    box-sizing border-box
    width: 100%;
    height:.62rem
    padding 0 .1rem
    line-height: .62rem;
    text-align: center
    border-radius .06rem
    color #666
</style>
