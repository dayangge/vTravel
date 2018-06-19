<template>
  <transition name="leftslide">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'leftSlide'
}
</script>

<style lang="stylus" scoped>
.leftslide-enter-active, .leftslide-leave-active
  transition: all 0.3s
.leftslide-enter, .leftslide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
