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
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
