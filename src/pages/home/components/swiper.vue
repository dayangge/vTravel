<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bf60972f79f94a4b69a0666a57121b2.jpg?thumb=1&w=720&h=360'
        },
        {
          id: '0002',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/269b56a462f2c93ede1fc5ace852a621.jpg?thumb=1&w=720&h=360'
        },
        {
          id: '0003',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b7525acde6db7c47d976479afa5d2f6.jpg?thumb=1&w=720&h=360'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> swiper-pagination swiper-pagination-bullets
  background #fff
.wrapper
  width: 100%;
  height 0
  overflow hidden
  padding-bottom 50%
  background:#eaeaea;
  .swiper-img
    width: 100%;
</style>
