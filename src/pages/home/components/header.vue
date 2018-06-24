<template>
  <div class="box">
    <div class="header border-bottom">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入商品（这不能点(#^.^#)）
      </div>
      <router-link to="/city">
        <div class="header-right">
          <span class="header-right-con">{{this.city}}</span>
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
    <div class="nav-box" ref="navBox">
      <div class="nav" ref="nav" @click="navPosHandle">
        <router-link tag="div" class="nav-item" to="/recommend">
      <span>
        推荐</span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/phone">
      <span>
        手机</span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/smart">
      <span>
        智能
      </span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/tv">
      <span>
        电视
      </span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/pc">
      <span>
        电脑
      </span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/full">
      <span>
        全面屏
      </span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/life">
      <span>
        生活周边
      </span>
        </router-link>
        <router-link tag="div" class="nav-item" to="/box">
    <span>
      盒子
    </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { hasClass } from '../../../common/js/dom'

// const transform = prefixStyle('transform')
// const transitionDuration = prefixStyle('transitionDuration')

export default {
  name: 'HomeHeader',
  mounted () {
  },
  methods: {
    navPosHandle (e) {
      if (hasClass(e.target, 'nav')) {
        return false
      }
      let winWidth = window.innerWidth

      let currentElement = e.target
      let navElement = document.querySelector('.nav')
      let navBoxElement = document.querySelector('.nav-box')
      let navBoxscrollLeft = navBoxElement.scrollLeft

      let navRect = navElement.getBoundingClientRect()
      let navRight = navRect.right
      let navWidth = navRect.width

      let currentElementWidth = currentElement.offsetWidth
      let currentElementLeft = currentElement.getBoundingClientRect().left

      let centerPos = winWidth / 2 - currentElementWidth / 2
      let offsetWidth = currentElementLeft - centerPos
      let boundLeft = navWidth - winWidth
      if (offsetWidth >= 0 || navBoxscrollLeft - boundLeft < 0) {
        if ((navRight - winWidth) < offsetWidth) {
          offsetWidth = navWidth - (navRight - winWidth)
          navBoxElement.scrollLeft = offsetWidth
        } else {
          navBoxElement.scrollLeft = offsetWidth
        }
      }
      /* console.log(e.target,
        '当前元素位置偏移' + navBoxscrollLeft,
        '偏移位置' + offsetWidth,
        '元素离左' + currentElementLeft,
        '内容多出宽度' + boundLeft,
        '中间位置' + centerPos,
        'navright' + navRight,
        'navwidth' + navWidth,
        '当前元素宽度' + currentElementWidth,
        'box宽度' + navBoxElement.getBoundingClientRect().width
      ) */
    }
    /* scrollAnimate (startWidth, el, offsetWidth) {
      let start = startWidth
      let during = offsetWidth
      let _run = function () {
        start++
        if (start < during) {
          el.scrollLeft = start
          requestAnimationFrame(_run)
        }
      }
      _run()
    } */
  },
  computed: {
    ...mapState(['city'])
    // this.$store.state.city映射到 city这个属性上，上面就可以调用city
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .box
    position fixed
    top: -1
    left: 0
    right: 0
    z-index 99
    box-shadow $boxShadow
    min-height 1.48rem
    background: $bgColor;
    .header
      display: flex
      line-height $headerHeight;
      .header-left
        width .64rem;
        float left;
        text-align: center
        .back-icon
          font-size: .4rem;
          padding-left .2rem;
          color: $headerColor;
      .header-input
        flex: 1;
        height: .64rem;
        line-height: .64rem;
        background: #fff;
        border-radius: .1rem;
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
        color $headerColor
        .header-right-con
          font-size: .24rem;
        .arrow-icon
          padding-left: .06rem;
          font-size: .24rem
    .nav-box
      font-size: 0;
      overflow-x: auto;
      background: #f2f2f2;
      white-space: nowrap;
      z-index: 2;
      height:32px
      overflow-y hidden
      -ms-overflow-style: none;
      &::-webkit-scrollbar
        display: none
      .nav
        transition all .3s linear
        float:left
        .nav-item
          display: inline-block;
          margin 0
          &.router-link-active
            span
              color: rgb(237, 91, 0);
              border-color: rgb(237, 91, 0);
          span
            font-size: .26rem;
            padding: 0 .25rem;
            display: inline-block;
            line-height: 32px;
            border-bottom: 2px solid rgba(237, 91, 0, 0);
</style>
