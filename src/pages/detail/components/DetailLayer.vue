<template>
  <div>
    <div  class="product-section" @click="show=!show">
      <div  class="service-policy-list">
        <div  class="service-policy-item">
          <img src="../../../../static/img/img-yes.png" class="img-icon">
          <span  class="fsc1">7天无理由退货</span></div>
        <div  class="service-policy-item" data-stat-id="a97c7db07bdf022f">
          <img src="../../../../static/img/img-yes.png" class="img-icon">
          <!----><span  class="fsc1">15天质量问题换货</span></div>
        <div  class="flex service-policy-item" data-stat-id="172c8cb1e3f79864">
          <img src="../../../../static/img/img-yes.png" class="img-icon">
          <span  class="fsc1">365天保修</span>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="boxbox" v-show="show" @click ="close"  @touchmove.prevent>
        <div class="layer" v-show="show">
          <div class="layer-box">
            <div class="layer-box-left"></div>
            <div class="layer-box-in">
              <h3>服务说明</h3>
            </div>
            <div class="layer-box-rigt" @click.stop="show=!show">
              <i class="iconfont icon-cancel-1-copy"></i>
            </div>
          </div>
          <div class="layer-box-2">
            <div class="layer-box-2-1">
              <i class="iconfont icon-icon--"></i>
              <h3>7天无理由退货</h3>
              <p>15天质量问题换货</p>
            </div>
            <div class="layer-box-2-1 top">
              <i class="iconfont icon-icon--"></i>
              <h3>365天保修</h3>
              <p>
                365天出现任何质量问题包修
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DetailLayer',
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>

<style lang="stylus">
  .product-section
    padding: .16rem .32rem;
    position: relative;
    background: #fff;
    border-top: 1px;
    text-align: left;
    .service-policy-list
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      align-items: center;
      .service-policy-item
        font-size: .24rem;
        line-height: .4rem;
        margin-right: .2rem;
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        .img-icon
          height: .2rem;
          width: auto;
          margin-right: .08rem;
          .fsc1
            font-size: .2rem;
            color: rgba(0,0,0,.54)
  .category
    width 100%
    height 1.5rem
    border-bottom: 10px solid #f4f4f4;
    .category-con
      float left
      margin-left 10px
      line-height 1.28rem
      font-size .34rem
      i
        float left
        color #0098df
      p
        float left
        color #777
        padding-left .1rem
    .category-rigth
      float right
      margin-right 10px
      line-height 1.28rem

  .boxbox
    width 100%
    height 100%
    position fixed
    background rgba(0, 0, 0, 0.75)
    top 0
    bottom 0
    z-index 109

  .layer
    width 100%
    max-height 6rem
    background white
    position fixed
    bottom 0
    z-index 2

    .layer-box
      width 100%
      height: 1.5rem;
      line-height: 1.5rem;
      .layer-box-left
        width 10%
        height 100%;
        float left

      .layer-box-in
        width 80%
        height 100%
        font-size 0.4rem
        float left
        text-align center
      .layer-box-right
        width 10%
        height 100%
        float left
        i
          font-size 0.4rem

    .layer-box-2
      width 85%
      margin 20px auto
      .layer-box-2-1
        width 100%
        h3
          font-size .4rem
          padding-left .1rem
          display inline-block
        p
          font-size .35rem
          height .7rem
          line-height .7rem
          color #666
          margin-top .15rem
          padding-left .3rem
          a
            color #00acff
        i
          float left
          color #0098df
          font-size .5rem
      .top
        margin-top .6rem
    .layer-box-button
      width 100%
      height 1.5rem
      border-top 1px solid #eee
      position absolute
      bottom 0
      div
        width 95%
        height 0.89rem
        line-height 0.89rem
        display block
        text-align center
        margin .25rem auto
        background #00acff
        border-radius 30px
        color white
        font-size .35rem

  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter, .fade-leave-active {
    transform: translateY(100%);
  }
</style>
