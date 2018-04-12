<template>
<div>
  <HomeHeader :city="city"></HomeHeader>
  <HomeSwiper :list="swiperList"></HomeSwiper>
  <HomeIcons :list="iconList"></HomeIcons>
  <HomeRecommend :list="recommendList"></HomeRecommend>
  <HomeWeekend :list="weekendList"></HomeWeekend>
  <div></div>
</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
