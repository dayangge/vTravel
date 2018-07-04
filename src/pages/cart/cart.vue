<template>
  <div class="shell">
    <c-header>购物车</c-header>
    <div class="cart-list">
      <div  class="title" v-if="!carts.length">这里啥也没有。。。。。</div>
      <ol>
        <li  class="item" v-for="(item, index) of carts" :key="index">
          <div  class="goods-info">
            <div  class="choose"></div>
            <a  class="imgProduct">
              <img :src="item.img_url">
            </a>
            <div  class="info flex">
              <p  class="name"><span class="flex">{{item.name}}</span>
            </p>
              <div  class="price"><span >售价：</span><span >{{item.price}}元</span>
                </div>
              <div  class="num">
                <div class="xm-input-number">
                  <div class="input-sub" @click="reducePurchaseNum"
                       :class="{'active':purchaseNum > 1}"
                  ><i class="icon-line" :class="{'on':purchaseNum > 1}"></i></div>
                  <div class="input-num"><span>{{item.goodsNum}}</span></div>
                  <div class="input-add"  @click="addPurchaseNum"
                       :class="{'active':purchaseNum < limitNum}"
                  ><i class="image-icons icon-cross" :class="{'on':purchaseNum < limitNum}" ></i>
                  </div>
                </div>
                <div  class="delete"><i  class="image-icons icon-delete"></i></div>
              </div>
            </div>
          </div>

          <div  class="append">
            <div >
              <div  class="insurance">
                <div  class="i1"><img  src="//s1.mi.com/m/images/m/insurance.png"
                                                        lazy="loaded"></div>
                <div  class="i2"><span > 意外保障服务 69元</span></div>
                <div  class="i3"><span >选购</span></div>
              </div>
            </div></div>
        </li>
      </ol>
    </div>
    <c-footer></c-footer>
  </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import header from '../../common/pages-header/header'
import footer from '../footer-bar/footer'

export default {
  name: 'cart',
  data () {
    return {
      qx: false
    }
  },
  computed: {
    ...mapState([
      'carts'
      // vuex映射
    ])
  },
  methods: {
    addPurchaseNum () {
      if (this.purchaseNum >= this.limitNum) {
        this.purchaseNum = this.limitNum
      } else {
        this.purchaseNum += 1
      }
    },
    reducePurchaseNum () {
      if (this.purchaseNum) {
        this.purchaseNum = 1
      } else {
        this.purchaseNum = 1
      }
    },
    ...mapMutations({
      delGoods: 'DEL_CARTS',
      addGoodsNum: 'ADD_CARTS_NUM',
      reduceGoodsNum: 'REDUCE_CARTS_NUM'
    })
    // this.$store.commit('changeCity', city)映射到changeCity上
  },
  components: {
    'c-header': header,
    'c-footer': footer
  }
}
</script>

<style lang="stylus" scoped>
  .shell
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .cart-list
      background: #fff;
      margin-top: 52px;
      .title
        margin-top: .3rem;
        height: .6rem;
        padding: 0 .56rem 0 .32rem;
        position: relative;
        color: rgba(0,0,0,.54);
        font-size: .32rem;
        display: block;
        text-align: center;
      .item
        border-bottom: 1px solid #f6f6f6;
        line-height: 0;
        .goods-info
          padding: .24rem 0;
          display: flex
          justify-content: center;
          align-items: center;
          .choose
            background: url(//s1.mi.com/m/images/m/check_normal.png) 50% 50% no-repeat;
            background-size: .4rem .4rem;
            flex: none;
            width: .6rem;
            padding: 0 .2rem;
            height: 1.8rem;
          .imgProduct
            flex: none;
            display: block;
            position: relative;
            width: 1.8rem;
            height: 1.8rem;
            margin-right: .2rem;
            border: 1px solid #eee;
            border-radius: 2px;
            img
              width: auto;
              height: 100%;
          .info
            text-align: left;
            flex 1
            .name
              font-size: .28rem;
              line-height: .32rem;
              color: #666;
              margin-bottom: .12rem;
              margin-right: .3rem;
              display: -webkit-box;
              display: box;
              box-align: start;
              span
                flex:1
            .price
              padding: .12rem 0;
              font-size: .24rem;
              color: #999;
              margin-bottom: .12rem;
              span
                margin-right: .1rem;
            .num
              display: block
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
                  &.active
                    background-color: #f4f4f4;
                  .icon-line
                    opacity: .3;
                    width: .6rem;
                    height: .6rem;
                    background-size: .3rem .3rem;
                    background-color: transparent;
                    background-image url("../../../static/img/sub.png")
                    background-position: 50%
                    background-repeat no-repeat
                    position: absolute
                    left 0
                    top: 0
                    &.on
                      opacity 1
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
                  &.active
                    background-color: #f4f4f4
                  .icon-cross
                    opacity: .3;
                    width: .6rem;
                    height: .6rem;
                    background-size: .3rem .3rem;
                    background-color: transparent;
                    background-image url("../../../static/img/cross.png")
                    background-position: 50%
                    background-repeat no-repeat
                    position: absolute
                    left 0
                    top: 0
                    &.on
                      opacity 1
        .append
          flex 1
          .insurance
            display: flex;
            justify-content: space-between;
            border: 1px solid #f6f6f6;
            padding: .14rem .2rem;
            border-radius: .04rem;
            background: #f6f6f6;
            font-size: .24rem;
            margin: 0 .2rem .2rem;
            .i1
              margin-right: .12rem;
              img
                width: .5rem;
                height: .5rem;
            .i2
              flex: 1;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-right: .2rem;
              span
                flex: 1;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                /*必须结合 box-orient使用 第几行开始文字溢出*/
                -webkit-box-orient: vertical;
                word-break: break-all;
                overflow: hidden;
                height: .5rem;
                line-height: .5rem;
                text-align: left;
            .i3
              display: flex;
              align-items: center;
              width: .75rem;
              color: #ff5722;
</style>
