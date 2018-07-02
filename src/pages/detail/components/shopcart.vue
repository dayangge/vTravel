<template>
  <div>
    <footer >
      <div class="footer-box">
        <a href="/" class="footer-btn router-link-active">
          <i class="icon-home"></i>
          <span >首页</span></a>
        <a class="footer-btn">
          <i class="icon-cart"></i>
          <span >购物车</span></a>
        <div class="action-box" @click="add">
          <a class="buy">加入购物车</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'shopcart',
  methods: {
    add () {
      this.$emit('changeMaskShow', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
footer
  height: 52px;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  .footer-box
    display: flex
    height: 100%;
    box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    box-flex: 1
    flex: 1 1 auto;
    .footer-btn
      text-align: center
      border-left: none;
      display: block;
      text-decoration: none;
      width: 1.45rem;
      color: rgba(0,0,0,.54);
      .icon-home
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto .1rem;
        background-image url("../../../../static/img/home.png")
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
      .icon-cart
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto .1rem;
        background-image: url('../../../../static/img/cart.png')
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;

    .action-box
      flex: 1 1 180px
      line-height: 52px;
      display: block;
      outline: 0;
      background: #ff6700;
      text-align: center;
      width: 100%;
      height: 1rem;
      font-size: .28rem;
      .buy
        color: #fff;
</style>
