<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入景点</div>
    <div class="header-right">
      <span class="header-right-con">{{this.city}}</span>
      <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height .86rem;
    background: $bgColor;
    .header-left
      width .64rem;
      float left;
      text-align: center
      .back-icon
        font-size: .4rem;
        padding-left .2rem;
    .header-input
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      background: #fff;
      border-radius:.1rem ;
      margin-top: .12rem;
      margin-left: .24rem;
      padding-left: .2rem;
      color: #ccc;
    .header-right
      width: 1.24rem;
      float: left;
      -ms-text-align-last: center
      text-align: center
      font-size: 0;
      color #ffffff
      .header-right-con
        font-size: .24rem;
      .arrow-icon
        padding-left: .06rem;
        font-size: .24rem

</style>
