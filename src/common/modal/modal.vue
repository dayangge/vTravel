<template>
  <transition name="modalslide">
    <div class="modal" v-if="visible">
      <div class="modal-mask"></div>
      <div class="modal-content-box">
          <div class="modal-dialog">
            <div class="icon"></div>
            <div class="content" v-html="message"></div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    message: String
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .modalslide-enter-active, .modalslide-leave-active
    transition: all .5s ease-in-out
  .modalslide-enter, .modalslide-leave-to
    opacity 0
    transform: scale(1.2);
  .modal
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    .modal-mask
      background-color: rgba(0,0,0,.3);
      z-index: 999;
      position: absolute;
      width: 100%;
      height: 100%;
    .modal-content-box
      z-index: 1000;
      position: absolute;
      width: 100%;
      height: 100%;
      text-align center
      .modal-dialog
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
        width: 4.5rem;
        background: #fff;
        border-radius: .1rem;
        overflow: hidden;
        .content
          margin: .4rem;
          line-height: 1.5em;
          color: #676767;
          letter-spacing 1px
        .icon
          margin: .4rem;
          line-height: 1.5em;
          color: #676767;
</style>
