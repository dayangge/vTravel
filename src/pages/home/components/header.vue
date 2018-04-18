<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入商品（这不能点(#^.^#)）</div>
    <router-link to="/city">
      <div class="header-right" >
        <span class="header-right-con">{{this.city}}</span>
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // this.$store.state.city映射到 city这个属性上，上面就可以调用city
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height $headerHeight;
    background: $bgColor;
    .header-left
      width .64rem;
      float left;
      text-align: center
      .back-icon
        font-size: .4rem;
        padding-left .2rem;
        color: #fff;
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
      min-width: 1.04rem;
      padding: 0 .1rem
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
