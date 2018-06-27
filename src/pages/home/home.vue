<template>
<div class="shell">
  <HomeHeader></HomeHeader>
  <keep-alive>
    <transition :name="transitionName">
      <router-view ></router-view>
    </transition>
  </keep-alive>
  <footer-bottom></footer-bottom>
  <div></div>
</div>
</template>

<script>
import HomeHeader from './components/header'
import axios from 'axios'
import Recommend from '../recommend/recommend'
import Footer from '../footer-bar/footer'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      lastCity: '',
      transitionName: 'leftslide'
    }
  },
  components: {
    HomeHeader,
    Recommend,
    FooterBottom: Footer
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  watch: {
    '$route' (to, from) {
      const pathArr = ['recommend', 'phone', 'smart', 'tv', 'pc', 'full', 'life', 'box']
      const toDepth = pathArr.indexOf(to.path.split('/')[1])
      const fromDepth = pathArr.indexOf(from.path.split('/')[1])
      // console.log(toDepth, fromDepth)
      this.transitionName = toDepth < fromDepth ? 'rightslide' : 'leftslide'
    }
  },
  // 被keepalive缓存的页面再次切换会执行这个钩子
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.shell
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  .leftslide-enter-active
      transition: all 0.3s
  .leftslide-leave-active
      opacity .8
  .leftslide-enter, .leftslide-leave-to
      transform: translate3d(100%, 0, 0)
  .rightslide-enter-active, .rightslide-leave-active
      transition: all 0.3s
  .rightslide-enter
      transform: translate3d(-100%, 0, 0)
  .rightslide-leave-to
      opacity .8

</style>
