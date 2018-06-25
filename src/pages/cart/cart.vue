<template>
  <div class="shell">
    <c-header>购物车</c-header>
    <div></div>
    <c-footer></c-footer>
  </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
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
    carts () {
      return this.$store.state.carts
    },
    ...mapGetters(['this.$store.state.carts']),
    sum: function () {
      var sum = 0
      this.$store.state.carts.forEach(cart => {
        if (cart.danx1uan) {
          sum += cart.price * cart.value
        }
      })
      return sum
    },
    sumValue () {
      var sumValue = 0
      this.$store.state.carts.forEach(cart => {
        if (cart.danx1uan) {
          sumValue += parseInt(cart.value)
        }
      })
      return sumValue
    }
  },
  methods: {
    ...mapMutations(['shanchu', 'add', 'reduce', 'settlement']),

    danxuan (cart) {
      console.log(cart)
      cart.danx1uan = !cart.danx1uan
      if (!cart.danx1uan) {
        this.qx = false
      }
    },
    quanxuan () {
      this.qx = !this.qx
      if (this.qx) {
        this.$store.state.carts.forEach(cart => {
          cart.danx1uan = true
        })
      } else {
        this.$store.state.carts.forEach(cart => {
          cart.danx1uan = false
        })
      }
    }
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

</style>
