<template>
  <div>
    <div class="title">爆款产品</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <a :href="item.proLink" class="item-link">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    overflow: hidden
    height: .8rem;
    line-height: .6rem;
    text-indent .2rem
    background #eaeaea
  .item
    .item-link
      overflow: hidden
      height: 3.4rem;
      color #333333
      margin-bottom .2rem
      .item-img-wrapper
        overflow: hidden
        width: 100%;
        height 0
        padding-bottom 38.888888888%
        .item-img
          width: 100%;
      .item-info
        padding-left .2rem
        padding-bottom .1rem
        min-width: 0;/*解决文字溢出在flexbug问题*/
        .item-title
          line-height: .64rem;
          font-size: .32rem;
          ellipsis()
        .item-desc
          line-height: .4rem;
          color: #c1c1c1;
          ellipsis()
</style>
