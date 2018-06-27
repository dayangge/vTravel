<template>
  <div>
    <div>
      <div class="sectionMore more border-bottom" @click.stop="maskShow">
        <div class="title">规格</div>
        <div class="flex">
          <div class="icon-title">{{currentGoods.name}}</div>
        </div>
      </div>
    </div>
    <div class="ui-mask" v-show="isShow"></div>
    <up-slide>
      <div class="pop" v-show="isShow">
        <div class="close" @click.stop="maskHide">
          <i class="close-icon"></i>
        </div>
        <div class="pro-info ">
          <div class="pro-img">
            <img :src="currentGoods.img_url">
          </div>
          <div class="pro-desc">
            <div class="cur-price">
              <div class="price">{{currentGoods.price}}</div>
            </div>
            <div class="name">{{currentGoods.name}}</div>
          </div>
        </div>
        <div class="max5">
          <div class="border-top max-info">
            <div class="option-title ">版本</div>
            <div class="options-group">
              <div
                v-for="item of goodsBuyOption1"
                :key="item.prop_value_id"
                @click="selectSKUModel(item)"
                :class = "{'active':prop_value_id1 === item.prop_value_id}"
                class="option-item ">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
              </div>
            </div>
          </div>
          <div class="border-top max-info">
            <div class="option-title border-bottom ">颜色</div>
            <div class="options-group ">
              <div class="option-muen"
                   v-for="item of goodsBuyOption2"
                   :key="item.prop_value_id"
                   :class = "{'active':prop_value_id2 === item.prop_value_id,
                    }"
                   @click = selectSKUColor(item)
              >
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
          <div class="calc-info">
            <div class="option-title border-bottom">购买数量</div>
            <div class="xm-input-number">
              <div class="input-sub"><i class="icon-line"></i></div>
              <div class="input-num"><span>1</span></div>
              <div class="input-add active"><i class="image-icons icon-cross"></i>
              </div>
            </div>
          </div>

          <div class="btn-bottom">
            <div class="action-box ">
              <a class="btn buy-btn">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
    </up-slide>
  </div>

</template>

<script>
import upSlide from '../../../common/upSlide/upSlide'
import {to, getScrollTop} from '../../../common/js/util'
import axios from 'axios'

let scrollTop = 0

export default {
  name: 'Specifications',
  props: {
    promotion: Object,
    show: Boolean
  },
  data () {
    return {
      isShow: false,
      goodsInfo: [],
      goodsBuyOption1: [],
      goodsBuyOption2: [],
      originGoodsBuyOption2: [],
      prop_value_id1: '',
      prop_value_id2: '',
      currentGoods: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getProductInfo()
      // console.log(this.goodsBuyOption)
    })
  },
  methods: {
    maskShow () {
      this.isShow = true
    },
    maskHide () {
      this.isShow = false
      this.$emit('cartControlMaskShow', false)
    },
    getProductInfo () {
      axios.get('api/product.json').then(this.handleGetProductSucc)
    },
    handleGetProductSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        const data = res.data
        this.goodsInfo = data.goods_info
        this.goodsBuyOption1 = data.buy_option[0].list
        this.goodsBuyOption2 = data.buy_option[1].list
        this.originGoodsBuyOption2 = data.buy_option[1].list
        // 最好直接将值赋给数据，不要从数据中，再用下标获取，因为，数据不一定存在，会报该属性不存在的错误错
        this.currentGoods = data.goods_info[0]
        this.prop_value_id1 = this.currentGoods.prop_list[0].prop_value_id
        this.prop_value_id2 = this.currentGoods.prop_list[1].prop_value_id
        //  console.log(this.selectGroup1, this.selectGroup2, this.prop_value_id1, this.prop_value_id2)
      }
    },
    selectSKUModel (item) {
      let _arr = []
      this.prop_value_id1 = item.prop_value_id
      this.modifyCurrentGoods()
      // 双重遍历判断存在的路径，保村到_arr
      for (let i = 0; i < this.originGoodsBuyOption2.length; i++) {
        for (let j = 0; j < this.goodsInfo.length; j++) {
          if (item.prop_value_id === this.goodsInfo[j].prop_list[0].prop_value_id &&
            this.originGoodsBuyOption2[i].prop_value_id === this.goodsInfo[j].prop_list[1].prop_value_id) {
            _arr.push(this.originGoodsBuyOption2[i])
          }
        }
      }
      this.goodsBuyOption2 = _arr
    },
    selectSKUColor (item) {
      this.prop_value_id2 = item.prop_value_id
      this.modifyCurrentGoods()
    },
    modifyCurrentGoods () {
      for (let i = 0; i < this.goodsInfo.length; i++) {
        if (this.prop_value_id1 === this.goodsInfo[i].prop_list[0].prop_value_id &&
          this.prop_value_id2 === this.goodsInfo[i].prop_list[1].prop_value_id) {
          this.currentGoods = this.goodsInfo[i]
        }
      }
    }
  },
  watch: {
    isShow () {
      if (this.isShow) {
        scrollTop = getScrollTop()
        // 使body脱离文档流
        document.body.classList.add('dialog-open')
        // 把脱离文档流的body拉上去！否则页面会回到顶部！
        document.body.style.top = -scrollTop + 'px'
      } else {
        document.body.classList.remove('dialog-open')
        // 滚回到老地方
        to(scrollTop)
      }
    },
    show () {
      this.isShow = this.show
    }
  },
  components: {
    upSlide
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .sectionMore
    display flex
    position: relative;
    padding: .2rem .32rem 0;
    background: #fff;
    border-top: 1px;
    text-align: left;
    overflow: hidden;
    padding-bottom .1rem
    .title
      width: .82rem;
      font-size: .24rem;
      color: rgba(0, 0, 0, .54);
      line-height: .4rem;
    .flex
      flex: 1 1 auto;
      .icon-title
        float left
        margin-left: .08rem;
        font-size: .24rem;
        color: rgba(0, 0, 0, .87);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: .4rem;

  .ui-mask
    background-color: rgba(0, 0, 0, .75);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
    z-index: 100;
    transition 0.4s

  .pop
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width 8.5rem;
    background-color: #fff;
    color: #000;
    padding: .32rem .32rem 1.27rem;
    z-index: 110;
    min-height: 5rem;
    max-height: 9.6rem;
    text-align: left;
    transition 0.4s
    .close
      position: absolute;
      top: .16rem;
      right: .16rem;
      width: .5rem;
      height: .5rem;
      .close-icon
        display: inline-block;
        width: .4rem;
        height: .4rem;
        background-image url("../../../../static/img/close.png")
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
    .pro-info
      min-height: 1.5rem;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: nowrap;
      display: flex;
      flex: 1 1 auto;
      .pro-img
        position: relative;
        width: 2rem;
        height: 2rem;
        text-align: center;
        background: #fff;
        img
          height: 100%;
          width: auto;
          margin: 0 auto;
      .pro-desc
        position: relative;
        width: 4.5rem;
        margin: .32rem .16rem;
        text-align: left;
        flex-direction: column;
        justify-content: flex-start;
        flex: 1 1 auto;
        flex-wrap: nowrap;
        display: flex
        .cur-price
          .price
            display: inline;
            color: #ff6700;
            font-size: .48rem;
            line-height: .38rem;
            position: relative;
            padding-left: .5em;
            &:before
              content: "\A5";
              position: absolute;
              left: 0;
              top: 0;
              font-size: .76em;
              text-decoration: none;
        .name
          padding-top: 0.24rem;
          font-size: .28rem;
          color: rgba(0, 0, 0, .87);
          line-height: .4rem;

    .max5
      max-height: 6rem;
      overflow-x: hidden;
      overflow-y: scroll;
      .max-info
        margin-top: .2rem;
        .option-title
          padding-top: .32rem;
          position: relative;
          padding-bottom: .16rem;
          line-height: .24rem;
          font-size: .24rem;
          color: rgba(0, 0, 0, .87);
        .options-group
          padding-bottom: .32rem;
          justify-content flex-start
          flex-wrap: wrap;
          align-items center
          display: flex
          flex: 1 1 auto;
          .option-item
            width: 100%;
            padding: .24rem .32rem !important;
            height: .72rem;
            line-height: .72rem;
            min-width: 1.45rem;
            box-sizing: border-box;
            text-align: center;
            margin: .16rem 0 0 .16rem;
            overflow: visible;
            display: flex
            justify-content space-between
            align-items center
            &.active
              color: #f56600;
          .option-muen
            height: .72rem;
            line-height: .72rem;
            min-width: 1.45rem;
            box-sizing: border-box;
            padding: 0 .08rem;
            text-align: center;
            margin: .16rem 0 0 .16rem;
            overflow: visible;
            justify-content: center;
            align-items: center;
            display: flex;
            &.active
              color: #f56600;
      .calc-info
        padding-top .32rem
        display: flex;
        justify-content space-between
        align-items center
        flex-wrap nowrap
        .option-title
          padding-top: .32rem;
          position: relative;
          padding-bottom: .16rem;
          line-height: .24rem;
          font-size: .24rem;
          color: rgba(0, 0, 0, .87);
        .xm-input-number
          display: inline-block;
          border: 1px solid #eee;
          .input-sub
            display: inline-block;
            width: .6rem;
            height: .6rem;
            position: relative;
            vertical-align: middle;
            background-color: #fafafa;
            text-align: center;
            .icon-line
              opacity: .3;
              width: .6rem;
              height: .6rem;
              background-size: .3rem .3rem;
              background-color: transparent;
              background-image url("../../../../static/img/sub.png")
              background-position: 50%
              background-repeat no-repeat
              position: absolute
              left 0
              top: 0
          .input-num
            display: inline-block;
            vertical-align: middle;
            min-width: .6rem;
            padding: 0 .12rem;
            text-align: center;
            font-size: .32rem;
          .input-add
            display: inline-block;
            width: .6rem;
            height: .6rem;
            position: relative;
            vertical-align: middle;
            background-color: #fafafa;
            text-align: center;
            .icon-cross
              opacity: .3;
              width: .6rem;
              height: .6rem;
              background-size: .3rem .3rem;
              background-color: transparent;
              background-image url("../../../../static/img/cross.png")
              background-position: 50%
              background-repeat no-repeat
              position: absolute
              left 0
              top: 0
    .btn-bottom
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex
      .action-box
        flex: 1 1 auto;
        .buy-btn
          display: block;
          outline: 0;
          background: #ff6700;
          color: #fff;
          text-align: center;
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          font-size: .28rem;
</style>
