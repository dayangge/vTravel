<template>
  <transition name="modalslide">
    <div class="modal">
      <div class="modal-mask"></div>
      <div class="modal-content-box">
        <div class="modal-content"></div>
          <div class="modal-dialog">
            <div class="icon"></div>
            <div class="content">{{msg}}</div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    msg: {
      type: String,
      default: '加入购物车成功'
    },
    iconimg: {
      type: String,
      default: '加入购物车成功'
    }
  }
}
</script>

<style lang="stylus" scoped>
.modalslide-enter-active, .modalslide-leave-active
  transition: all 0.3s
.modalslide-enter, .modalslide-leave-to
  opacity 0
  .model
    opacity: 1;
    transform: scale(1);
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
      transform: translate(100%,100%);
      z-index: 1000;
      position: absolute;
      width: 100%;
      height: 100%;
      text-align center
      .modal-contennt
        position: absolute;
        top: -50%;
        left: -50%;
        width: auto;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
        .modal-dialog
          width: 6.5rem;
          background: #fff;
          border-radius: .1rem;
          overflow: hidden;
          .content
            margin: .4rem;
            line-height: 1.5em;
            color: #676767;
          .icon
            margin: .4rem;
            line-height: 1.5em;
            color: #676767;
</style>
