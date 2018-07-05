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
                  <div class="input-sub" @click="reducePurchaseNum(index)"
                       :class="{'active':item.goodsNum > 1}"
                  ><i class="icon-line" :class="{'on':item.goodsNum > 1}"></i></div>
                  <div class="input-num"><span>{{item.goodsNum}}</span></div>
                  <div class="input-add"  @click="addPurchaseNum(index)"
                       :class="{'active':item.goodsNum < item.buy_limit}"
                  ><i class="image-icons icon-cross" :class="{'on':item.goodsNum < item.buy_limit}" ></i>
                  </div>
                </div>
                <div  class="delete"><i  class="image-icons icon-delete"></i></div>
              </div>
            </div>
          </div>

          <div  class="append">
            <div >
              <div  class="insurance">
                <div  class="i1"><img  src="//s1.mi.com/m/images/m/insurance.png"></div>
                <div  class="i2"><span > 意外保障服务 69元</span></div>
                <div  class="i3"><span >选购</span></div>
              </div>
            </div></div>
        </li>
      </ol>
    </div>
    <div  class="bottom-submit">
      <div  class="price-box">
        <span >共4件 金额：</span>
        <br >
        <strong >3597</strong>
        <span >元</span>
      </div>
      <router-link  to="/classify" class="bottom-goon">继续购物</router-link>
      <a  class="bottom-settlement" data-stat-id="045289e7822f192d">去结算</a>
    </div>
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
    addPurchaseNum (index) {
      if (this.carts[index].goodsNum >= this.carts[index].buy_limit) {
      } else {
        this.addGoodsNum({
          index: index,
          num: 1
        })
      }
    },
    reducePurchaseNum (index) {
      if (this.carts[index].goodsNum === 1) {
      } else {
        this.reduceGoodsNum({
          index: index,
          num: 1
        })
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
            &.on
              background: url(//s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
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
    .bottom-submit
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 99;
      box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
      display: flex;
      .price-box
        font-size: .26rem;
        color: #999;
        text-align: center;
        padding-top: .15rem;
        flex 1
        strong
          font-size: .4rem;
          color: #ff5722;
          margin-right: .2em;
          font-weight: 700;
      .bottom-goon
        background: #f4f4f4;
        border: 1px solid #f4f4f4;
        color: #333;
        display: block;
        outline: 0;
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: .28rem;
        flex 1;
      .bottom-settlement
        display: block;
        outline: 0;
        background: #ff6700;
        color: #fff;
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: .28rem;
        flex 1
</style>
