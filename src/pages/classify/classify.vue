<template>
<div class="app-shell">
  <c-header>分类</c-header>
  <div class="app-view-wrapper">
    <div class="app-view">
      <div class="list-navBar" ref="leftWrap">
        <ul class="left-list" >
          <li v-for="(item,index) in leftList"
              class="left-list-item border-left"
              :class="{active : index === currentIndex}"
              :key="index"
              ref="leftList"
              @click="scrollTo(index)"
          >
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    <div  ref="rightWrap" class="list-wrap"  >
      <div >
        <div class="list-item" v-for="(item,index) of rightList" :key="index" ref="listItem">
          <div v-for="(innerItem,innerIndex) of item.category_list" :key="innerIndex">
            <div class="cells_auto_fill" v-if="innerItem.view_type === 'cells_auto_fill'">
              <img v-lazy="innerItem.body.items[0].img_url" class="cell-img"
                   :style="{width:(innerItem.body.w/100 + 'rem'),height:innerItem.body.h/100 + 'rem'}">
            </div>
          <div class="category_title" v-if="innerItem.view_type === 'category_title'">
            <span class="title">{{innerItem.body.category_name}}</span>
          </div>

          <div  class="category_group" v-if="innerItem.view_type === 'category_group'">
            <div  class="box">
              <div  class="product" v-for="(proItem,proIndex) of innerItem.body.items" :key="proIndex">
                <a  class="exposure" >
                  <div  class="img">
                    <img  class="big"
                          v-lazy="proItem.img_url"
                          >
                    </div>
                  <div  class="name">{{proItem.product_name}}</div>
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  </div>

  <c-footer></c-footer>
</div>

</template>

<script>

import footer from '../../pages/footer-bar/footer'
import axios from 'axios'
import header from '../../common/pages-header/header'
import BScroll from 'better-scroll'
export default {
  name: 'Classify',
  data () {
    return {
      leftList: [],
      rightList: [],
      listHeight: [],
      currentIndex: 0
    }
  },
  created () {
    this.leftWrapHeight = 0
  },
  mounted () {
    this.getClassifyInfo()
  },
  updated () {
    if (this.listHeight.length === 0) {
      this._calcHeight()
      this._initScroll()
    }
  },
  methods: {
    getClassifyInfo () {
      axios.get('/api/categroy.json')
        .then(this.handleGetCategroyInfoSucc)
    },
    _initScroll () {
      this.scroll = new BScroll(this.$refs.rightWrap, {
        probeType: 3,
        click: true
      })
      this.scroll.on('scroll', (pos) => {
        const y = pos.y
        for (let i = 0; i < this.listHeight.length - 1; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (-y >= height1 && -y < height2) {
            this.currentIndex = i
          }
        }
      })
    },
    _calcHeight () {
      this.listHeight = []
      this.leftWrapHeight = this.$refs.leftWrap.clientHeight
      console.log(this.leftWrapHeight)
      // 这块卡了好久，咋回事呢？
      // 在mmounted获取不到this.$refs内的数组dom，在updated可以
      // 这问题卡了2天，mmp
      let list = []
      list = this.$refs['listItem']
      console.log(this.$refs)
      console.log(list)
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    scrollTo (index) {
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.scroll.scrollToElement(this.$refs.listItem[index], 0)
      this.currentIndex = index
    },
    handleGetCategroyInfoSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        const data = res.data
        this.rightList = data
        for (let i = 0; i < data.length; i++) {
          this.leftList.push(data[i].category_name)
        }
      }
    }
  },
  components: {
    'c-footer': footer,
    'c-header': header
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.app-shell
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  .app-view-wrapper
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 7.2rem;
    margin: 0 auto;
    padding-bottom: 52px;
    padding-top: 50px;
    .app-view
      position: absolute;
      z-index: 99;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      overflow: hidden;
      .list-navBar
        position: fixed;
        top: 49px;
        bottom: 52px;
        left: 0;
        width: 1.52rem;
        border-right: 1px solid #efefef;
        overflow: hidden;
        .left-list
          z-index: 90;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: -.3rem;
          padding: .2rem .3rem .2rem 0;
          background: #fefefe;
          overflow-y: auto;
          .left-list-item
            font-size: .34rem;
            height: .9rem;
            line-height: .9rem;
            overflow: hidden;
            text-align: center;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            &.active
              color: #fb7d34;
              transform: scale(1);
      .list-wrap
        position: absolute;
        left: 1.52rem;
        right: 0;
        top: 49px;
        bottom: 62px;
        padding: 2px .32rem;
        overflow: auto;
        .list-item
          .cells_auto_fill
            height: auto!important;
            display: block;
            .cell-img
              height: 100%;
              width: 100%;
          .category_title
            background: #fff;
            font-size: .28rem;
            text-align: center;
            font-weight: 400;
            margin-top: .2rem;
            height: 1.28rem;
            line-height: 1.28rem;
            overflow: hidden;
            .title
              position: relative;
              &:before
                dividerBefore()
              &:after
                dividerAfter()
          .category_group
             background: #fff;
             margin: -.06rem 0 0;
             display: flex
             .box
               width 100%
               overflow: hidden;
               flex: 1 1 auto;
               .product
                 float: left;
                 width: 33.333333333333336%;
                 text-align: center;
                 margin-top: .2rem;
                 margin-bottom: .3rem;
                 overflow: hidden;
                 .img
                   width: 1rem;
                   height: 1rem;
                   margin: 0 auto;
                   background: #fff;
                   overflow: hidden;
                   .big
                     width: 100%
                     height:100%
                 .name
                   margin-top: .28rem;
                   font-size: .23rem;
                   color: rgba(0,0,0,.54);
                   ellipsis()
</style>
