<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img class="banner-img" src="//i8.mifile.cn/v1/a1/2af7bc21-ce55-b992-788e-c8c42792f772!720x792.webp" alt="">
      <div class="bannerinfo">
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseGallary">
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'Banner',
  data () {
    return {
      imgs: ['//i8.mifile.cn/v1/a1/d108bc58-3f1f-3a13-9213-ba2627e00a14!720x792.webp',
        '//i8.mifile.cn/v1/a1/c66b6801-f13a-07c7-97b6-361ade5f4a32!720x792.webp',
        '//i8.mifile.cn/v1/a1/e4be781a-ced3-3b5c-ba53-6e24d060205d!720x792.webp',
        '//i8.mifile.cn/v1/a1/7a31a09f-2796-7c5d-dd1e-50b3fa01e57c!720x792.webp',
        '//i8.mifile.cn/v1/a1/dbed9798-2cab-1e5c-d28d-f83468567cec.webp'],
      showGallary: false
    }
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
    CommonGallary
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
