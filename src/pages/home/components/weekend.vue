<template>
  <div>
    <div class="title">爆款产品</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c6c4f82bfad13578d0a8c822eaac3254.jpg?thumb=1&w=720&h=280',
          title: '小米4A 电视 50英寸',
          desc: '4K HDR / 人工智能 / 蓝牙语音遥控器 / 高性能 / 大存储 / 海量片源',
          proLink: 'https://m.mi.com/commodity/detail/7575'
        },
        {
          id: '0002',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c51eb3727683a6612745ca948ca1d5e7.jpg?thumb=1&w=720&h=280',
          title: '红米Note 5A 自拍手机',
          desc: '1600万柔光自拍，5.5"高清大屏，流畅8核处理器，2+1卡槽，最高可扩容128GB',
          proLink: 'https://m.mi.com/commodity/detail/10000068'
        },
        {
          id: '0003',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7277e4361b17927108001e083bf1edee.jpg?thumb=1&w=720&h=280',
          title: '1600万美颜自拍 / 2倍变焦双摄，四轴光学防抖 / 5.5"护眼屏 ',
          desc: '极佳性能，震撼发布',
          proLink: 'https://m.mi.com/commodity/detail/10000069'
        }
      ]
    }
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
