<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: '//i8.mifile.cn/v1/a1/4b450c55-4511-0e7a-bc35-dcd1b769103e.webp',
          title: '小米MIX 2s',
          desc: '搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 艺术品般陶瓷机身',
          proLink: 'https://m.mi.com/commodity/detail/10000085'
        },
        {
          id: '0002',
          imgUrl: '//i8.mifile.cn/v1/a1/058dd3ce-e8d2-678d-ed48-7c412b202eb6.webp',
          title: '小米路由器3C',
          desc: '一款轻便好路由',
          proLink: 'https://m.mi.com/commodity/detail/4108'
        },
        {
          id: '0003',
          imgUrl: '//i8.mifile.cn/v1/a1/71a40922-389b-70fd-375c-2e409df60338.webp',
          title: '小米游戏本',
          desc: '极佳性能，震撼发布',
          proLink: 'https://m.mi.com/commodity/detail/10000086'
        },
        {
          id: '0004',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/19a01dfb52bd52d9a3654eab319b457e.jpg',
          title: '12.5笔记本 Ari',
          desc: '超级续航，超窄边框,128G',
          proLink: 'https://m.mi.com/commodity/detail/7566'
        }
      ]
    }
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
