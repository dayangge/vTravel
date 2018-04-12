<template>
  <div class="icons" >
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img class="icon-img" :src="item.urlImg">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      imgList: [
        {
          id: '0001',
          urlImg: '//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp'
        },
        {
          id: '0002',
          urlImg: '//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp'
        },
        {
          id: '0003',
          urlImg: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152'
        },
        {
          id: '0004',
          urlImg: '//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp'
        },
        {
          id: '0005',
          urlImg: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152'
        },
        {
          id: '0006',
          urlImg: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.imgList.forEach((item, index) => {
        const page = Math.floor(index / 5)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
  height 0;
  padding-bottom 21.11111111111%;
  .icon
    position: relative;
    float: left;
    overflow: hidden
    height: 0
    width: 20%;
    padding-bottom: 21.11111111111%;
    background: #333333
    .icon-img
      height 100%
      display: block
      position absolute
      top 0
      left:0
      right:0
      bottom:.44rem
      margin 0 auto

</style>
