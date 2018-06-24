<template>
<div class="shell">
  <HomeHeader></HomeHeader>
  <keep-alive>
    <router-view></router-view>
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
      lastCity: ''
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
</style>
