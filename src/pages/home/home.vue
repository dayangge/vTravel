<template>
<div>
  <HomeHeader></HomeHeader>
  <HomeSwiper></HomeSwiper>
  <HomeIcons></HomeIcons>
  <HomeRecommend></HomeRecommend>
  <HomeWeekend></HomeWeekend>
  <div></div>
</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped>

</style>
