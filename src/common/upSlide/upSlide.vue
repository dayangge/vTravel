<template>
  <transition name="upslide">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'upSlide'
}
</script>

<style lang="stylus" scoped>
  .upslide-enter-active, .upslide-leave-active
    transition: all 0.3s
  .upslide-enter, .upslide-leave-to
    transform: translate3d(0, 100%, 0)
</style>
