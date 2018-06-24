<template>
  <div class="bodys">
    <div v-for="(item, index) of list" :key="index">
      <div class="banner" v-if="item.view_type === 'gallery'">
        <div class="swiper"
             :style="{width:(item.body.items[0].w/100 + 'rem'),height:item.body.items[0].h/100 + 'rem'}">
          <img :src="item.body.items[0].img_url" alt="">
        </div>
      </div>
      <div class="divider_line" v-if="item.view_type === 'divider_line'"
           :style="{height:(item.body.line_height/150 + 'rem'),backgroundColor:item.body.line_color,borderBottomColor:item.body.line_color,borderBottomWidth:(item.body.line_height/150 + 'rem') }"
      >
      </div>
      <div class="cells_auto_fill" v-if="item.view_type === 'cells_auto_fill'">
        <div v-for="(innerItem,innerIndex) of item.body.items" :key="innerIndex" class="cells-box">
          <img v-lazy="innerItem.img_url" class="cell-img"
               :style="{width:(innerItem.w/100 + 'rem'),height:innerItem.h/100 + 'rem'}">
        </div>
      </div>

      <div class="list_two_type1" v-if="item.view_type === 'list_two_type1'">
        <div v-for="(innerItem,innerIndex) of item.body.items" :key="innerIndex">
          <div class="list-item">
            <div class="img">
              <img class="big"
                   v-lazy="innerItem.img_url"
              >
            </div>
            <div class="info">
              <h3 class="name">{{innerItem.product_name}}</h3>
              <p class="brief">{{innerItem.product_brief}}</p>
              <div class="price">{{innerItem.product_price}}<span>起</span><!----></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'life',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getLifeInfo()
  },
  methods: {
    getLifeInfo () {
      axios.get('/api/life.json')
        .then(this.handleGetLifeInfoSucc)
    },
    handleGetLifeInfoSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        const data = res.data.data.sections
        this.list = data
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .bodys
    bodystyle()
    .banner
      background: #ccc;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      .swiper
        position: relative;
        z-index: 1;
        display: flex;
        transition-property: transform;
        /*制定过渡属性*/
        box-sizing: content-box;
        margin 0 auto
        img
          position absolute
          top: 0
          left 0
          right 0
          bottom 0
          margin 0 a
          width: 100%;
          height: 100%;
    .cells_auto_fill
      height: auto !important;
      display: flex;
      justify-content space-around
      .cells-box
        float left
        flex 1 1 auto
    .divider_line
      margin: 0 auto;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom-style solid
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    .list_two_type1
      display: flex;
      width 100%
      justify-content space-around
      align-items center
      .list-item
        margin-right: .04rem;
        flex: 1 0 auto;
        .img
          width 3.6rem
          height 3.6rem
          position: relative;
          overflow: hidden;
          .big
            display: block
            animation: opacity01 .3s;
            width 100%
            height:100%
        .info
          width 3.6rem
          box-sizing border-box
          padding: .2rem .27rem;
          text-align: left;
          .name
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .28rem;
            color: rgba(0,0,0,.87);
          .brief
            margin-top: .06rem;
            font-size: .22rem;
            line-height: .3rem;
            color: rgba(0,0,0,.54);
            ellipsis()
          .price
            font-size: .28rem;
            color: #ea625b;
            height: 1.5em;
            line-height: 1.5em;
            position: relative;
            display: inline-block;
            padding-left: .5em;
            &:before
              rmbsign()
</style>
