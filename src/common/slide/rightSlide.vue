<template>
  <transition name="rightslide">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'rightSlide'
}
</script>

<style lang="stylus" scoped>
  .rightslide-enter-active, .rightslide-leave-active
    transition: all 0.3s
  .rightslide-enter, .rightslide-leave-to
    transform: translate3d(-100%, 0, 0)
</style>
