<template>
  <div class="content">
    <detail-banner :imgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :goods="goods"></detail-list>
    <detail-product :promotion="promotion"></detail-product>
    <detail-specifictions  :show="maskShow" @cartControlMaskShow="cartControlMaskShow"></detail-specifictions>
    <detail-layer></detail-layer>
    <detail-comment></detail-comment>
    <detail-tabs></detail-tabs>
    <shop-cart @changeMaskShow="specifictionsShow"></shop-cart>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import DetailProduct from './components/product'
import DetailSpecifictions from './components/specifications'
import DetailComment from './components/comment'
import DetailLayer from './components/DetailLayer'
import ShopCart from './components/shopcart'
import Tabs from './components/tabs'
import axios from 'axios'

export default {
  name: 'detail',
  data () {
    return {
      list: [],
      goods: {},
      bannerImg: '',
      gallaryImgs: [],
      promotion: [],
      preventBodyScroll: false,
      maskShow: false
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailProduct,
    DetailSpecifictions,
    DetailComment,
    DetailLayer,
    ShopCart,
    DetailTabs: Tabs
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDetailSucc)
    },
    handleGetDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.goods = data.goodsDetail
        this.gallaryImgs = data.gallaryImgs
        this.promotion = data.promotion
        // const data = res.data
      }
    },
    specifictionsShow (flag) {
      this.maskShow = flag
    },
    cartControlMaskShow (flag) {
      this.maskShow = flag
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  background: #efefef
.noScoll
  overflow-y: hidden;
</style>
