<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <a :href="item.proLink" class="item-link">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">点击查看</button>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title
  overflow: hidden
  height: .6rem;
  line-height: .6rem;
  text-indent .2rem
  background #eaeaea
.item
  overflow: hidden
  height: 1.9rem;
  .item-link
    display: flex
    color #333333
    padding .1rem .3rem
    .item-img-wrapper
      height 1.7rem
      width: 1.7rem;
      .item-img
        width: 100%;
        background #eee
        padding-bottom 16%
    .item-info
      flex 1
      padding-left .6rem
      padding-top .1rem
      padding-bottom .1rem
      min-width: 0;/*解决文字溢出在flexbug问题*/
      .item-title
        line-height: .54rem;
        font-size: .32rem;
        ellipsis()
      .item-desc
        line-height: .4rem;
        color: #ccc;
        ellipsis()
      .item-button
        line-height: .44rem;
        background #ff9300
        padding:0 .2rem
        margin-top: .16rem;
        border-radius:.06rem
        color: #fff;
</style>
