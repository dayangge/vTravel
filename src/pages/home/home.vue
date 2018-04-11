<template>
<div>
  <HomeHeader></HomeHeader>
  <HomeSwiper></HomeSwiper>
  <div></div>
</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
