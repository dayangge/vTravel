<template>
  <div class="shell">
    <c-header>购物车</c-header>
    <div></div>
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

</style>
