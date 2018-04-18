<template>
  <div class="content">
    <detail-banner :imgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :goods="goods"></detail-list>
    <detail-product :promotion="promotion"></detail-product>
    <detail-specifictions></detail-specifictions>
    <detail-comment></detail-comment>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import DetailProduct from './components/product'
import DetailSpecifictions from './components/specifications'
import DetailComment from './components/comment'
import axios from 'axios'

export default {
  name: 'detail',
  data () {
    return {
      list: [],
      goods: {},
      bannerImg: '',
      gallaryImgs: [],
      promotion: {}
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailProduct,
    DetailSpecifictions,
    DetailComment
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
</style>
