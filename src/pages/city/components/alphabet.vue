<template>
  <ul class="list">
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
  display: flex
  justify-content center
  flex-direction column
  position: absolute
  top: 1.58rem
  right:0
  bottom 0
  .item
    padding 0 .1rem
    text-align: center
    line-height: .4rem;
    color:$bgColor ;
</style>
