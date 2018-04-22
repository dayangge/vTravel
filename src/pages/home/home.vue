<template>
<div>
  <HomeHeader></HomeHeader>
  <home-nav-list></home-nav-list>
  <recommend></recommend>
  <div></div>
</div>
</template>

<script>
import HomeHeader from './components/header'
import axios from 'axios'
import HomeNavList from './components/home-nav'
import Recommend from '../recommend/recommend'
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
    HomeNavList,
    Recommend
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

<style scoped>

</style>
