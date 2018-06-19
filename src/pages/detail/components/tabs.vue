<template>
  <div class="description-view">
    <div class="tab-header">
      <div class="tab-header-inner">
        <a class="flex" :class="{'on':currentShow==='desc'}" @click.stop="toggleToDesc">概述</a>
        <a class="flex" :class="{'on':currentShow==='paramater'}" @click.stop='toggleToParamater'>参数</a>
      </div>
    </div>
    <div class="tab-view"
         @touchstart="middleTouchStart"
         @touchmove="middleTouchMove"
         @touchend="middleTouchEnd"
         >
      <div class="tab-item1" ref="desc">
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8232b9c0c80f39125c0fa7c3bb4b096c.jpg?w=1080&amp;h=1920"
            ></div></section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/295657b08be2859d92e8069f30d52dff.jpg?w=1080&amp;h=952"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2dd379656523210681e3b00454e56340.jpg?w=1080&amp;h=771"
            ></div>
        </section>
      </div>
      <div class="tab-item2"
           ref="paramater"
      >
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81efdaf0f2a38006a8f41088fa8a87fc.jpg?w=1080&amp;h=848"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7a3ff36ffedf582f784cd5d3c5d25a94.jpg?w=1080&amp;h=356"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6e0d97df341077af6ae92915a3723ac0.jpg?w=1080&amp;h=900"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/872ad21086f7bfdfb5cc196e05a0ce9f.jpg?w=1080&amp;h=979"
            ></div>
        </section>
       </div>
    </div>
  </div>
</template>

<script>
import {prefixStyle} from '../../../common/js/dom'

const transform = prefixStyle('transform')
const transitionDuration = prefixStyle('transitionDuration')

export default {
  name: 'tabs',
  data () {
    return {
      currentShow: 'desc'
    }
  },
  created () {
    this.touch = {}
  },
  methods: {
    toggleToParamater () {
      this.$refs.paramater.style[transform] = `translate3d(${-window.innerWidth}px,0,0)`
      this.$refs.paramater.style[transitionDuration] = '300ms'
      this.$refs.desc.style.opacity = 0
      this.$refs.desc.style[transitionDuration] = '300ms'
      this.currentShow = 'paramater'
    },
    toggleToDesc () {
      this.$refs.paramater.style[transform] = `translate3d(${window.innerWidth}px,0,0)`
      this.$refs.paramater.style[transitionDuration] = '300ms'
      this.$refs.desc.style.opacity = 1
      this.$refs.desc.style[transitionDuration] = '300ms'
      this.currentShow = 'desc'
    },
    middleTouchStart (e) {
      this.touch.initiated = true
      // 用来判断是否是一次移动
      this.touch.moved = false
      const touch = e.touches[0]
      this.touch.startX = touch.pageX
      this.touch.startY = touch.pageY
    },
    middleTouchMove (e) {
      if (!this.touch.initiated) {
        return
      }
      const touch = e.touches[0]
      const deltaX = touch.pageX - this.touch.startX
      const deltaY = touch.pageY - this.touch.startY
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return
      }
      if (!this.touch.moved) {
        this.touch.moved = true
      }
      const left = this.currentShow === 'desc' ? 0 : -window.innerWidth
      const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX))
      this.touch.percent = Math.abs(offsetWidth / window.innerWidth)
      this.$refs.paramater.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      this.$refs.paramater.style[transitionDuration] = 0
      this.$refs.desc.style.opacity = 1 - this.touch.percent
      this.$refs.desc.style[transitionDuration] = 0
    },
    middleTouchEnd () {
      if (!this.touch.moved) {
        return
      }
      let offsetWidth
      let opacity
      if (this.currentShow === 'desc') {
        if (this.touch.percent > 0.1) {
          offsetWidth = -window.innerWidth
          opacity = 0
          this.currentShow = 'paramater'
        } else {
          offsetWidth = 0
          opacity = 1
        }
      } else {
        if (this.touch.percent < 0.9) {
          offsetWidth = 0
          this.currentShow = 'desc'
          opacity = 1
        } else {
          offsetWidth = -window.innerWidth
          opacity = 0
        }
      }
      const time = 300
      this.$refs.paramater.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      this.$refs.paramater.style[transitionDuration] = `${time}ms`
      this.$refs.desc.style.opacity = opacity
      this.$refs.desc.style[transitionDuration] = `${time}ms`
      this.touch.initiated = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.description-view
  margin-top: .16rem;
  .tab-header
    height: .88rem;
    .tab-header-inner
      height: .88rem;
      background: #fff;
      will-change: scroll-position;
      position: relative;
      align-items: center;
      display: flex;
      .flex
        display: block;
        font-size: .26rem;
        width: 100%;
        border-right: 1px solid #f4f4f4;
        flex: 1 1 auto;
        &.on
          color: #ff6700;
  .tab-view
    background: #fff;
    position relative
    .tab-item1
      width: 100%;
      position absolute
      top:0
      left:0
      img
        width 100%
    .tab-item2
      width 100%
      position: relative
      left 100%
      top:0
      .desc-img-box
        width 100%
        img
          width: 100%;

</style>
