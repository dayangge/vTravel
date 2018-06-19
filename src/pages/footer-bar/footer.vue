<template>
  <div id="bottom">
    <ul class="bottom-ul">
      <router-link  to="/recommend" tag="li" class="bottom-li">
        <div class="index">
          <i class="icon" :class="['recommend' === active ? 'index-icon-active' : 'index-icon']"></i>
          <span class="image-span" :class="{ 'on' : 'recommend' === active }">首页</span>
        </div>
      </router-link>

      <router-link to="/classify" tag="li"  class="bottom-li">
        <div class="index">
          <i class="icon" :class="['classify' === active ? 'classify-icon-active' : 'classify-icon']"></i>
          <span class=" image-span" :class="{ 'on' : 'classify' === active }">分类</span>
        </div>
      </router-link>

      <router-link to="/cart" tag="li"  class="bottom-li">
        <div class="index">
          <i class="icon" :class="['cart' === active ? 'cart-icon-active' : 'cart-icon']"></i>
          <span class="image-span" :class="{ 'on' : 'cart' === active }">购物车</span>
        </div>
      </router-link>

       <router-link to="/me" tag="li"  class="bottom-li">
         <div class="index">
           <i class="icon" :class="['me' === active ? 'me-icon-active' : 'me-icon']"></i>
           <span class="image-span" :class="{ 'on' : 'me' === active }">我</span>
         </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'recommend'
    }
  },
  mounted () {
    console.log(this.$route)
    this.determineRoute()
  },
  activated () {
    this.determineRoute()
  },
  methods: {
    determineRoute () {
      let seleRoute = this.$route.path.slice(1)
      switch (seleRoute) {
        case 'recommend':
          this.active = 'recommend'
          break
        case 'classify':
          this.active = 'classify'
          break
        case 'cart':
          this.active = 'cart'
          break
        case 'me':
          this.active = 'me'
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  #bottom
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
    height: 52px;
    background: #fff;
    display: block
    text-align: center
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    .bottom-ul
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .bottom-li
        width 25%
        flex: 1 1 auto;
        display: block;
        color: #999;
        .icon
          display: block;
          width: .4rem;
          height: .4rem;
          margin: 0 auto .1rem;
          background-color: transparent;
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
          color: #999;
        .index-icon
          background-image url("../../../static/img/home.png")
        .index-icon-active
          background-image url("../../../static/img/home-active.png")
        .classify-icon
          background-image url("../../../static/img/classify.png")
        .classify-icon-active
          background-image url("../../../static/img/classify-active.png")
        .cart-icon
          background-image url("../../../static/img/cart.png")
        .cart-icon-active
          background-image url("../../../static/img/cart-active.png")
        .me-icon
          background-image url("../../../static/img/me.png")
        .me-icon-active
          background-image: url("../../../static/img/me-active.png")
        .image-span
          font-size: .22rem;
          &.on
           color  #ff6700;

</style>
