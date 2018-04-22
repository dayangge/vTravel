<template>
  <div>
    <router-link tag="div" to="/" class="header-ads" v-show="showAbs">
      <span class="iconfont header-ads-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link  to="/" >
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      商品详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: 'true',
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 60) {
        let opacity = (top / 140)
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    // 解绑全局事件，因为组件内绑定window事件，会对其他组件同样有效，组件切换必须解绑
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header-ads
  position: absolute
  left:.2rem
  top: .2rem
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius .4rem
  text-align: center
  background: rgba(0,0,0,.8);
  .header-ads-back
    color: $headerColor;
    font-size: .4rem;
    padding-right:.05rem;
.header-fixed
  position: fixed
  top: 0
  left: 0
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center
  color: $headerColor;
  background: $bgColor
  z-index: 2
  .header-fixed-back
    position: absolute
    left .2rem
    color: $headerColor;
    font-size: .4rem;
    padding-right:.05rem;
</style>
