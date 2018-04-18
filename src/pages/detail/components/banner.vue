<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img class="banner-img" :src="imgs[0]" alt="">
      <div class="bannerinfo">
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseGallary">
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fadeAnimation/fade'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    imgs: Array
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner
  overflow: hidden
  height: 0;
  padding-bottom: 110%;
  .banner-img
    width 100%
</style>
