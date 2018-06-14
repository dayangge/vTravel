<template>
  <div class="description-view">
    <div class="tab-header">
      <div class="tab-header-inner">
        <a class="flex on">概述</a>
        <a class="flex">参数</a>
      </div>
    </div>
    <div class="tab-view">
      <div class="tab-item">
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8232b9c0c80f39125c0fa7c3bb4b096c.jpg?w=1080&amp;h=1920"
            ></div></section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/295657b08be2859d92e8069f30d52dff.jpg?w=1080&amp;h=952"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2dd379656523210681e3b00454e56340.jpg?w=1080&amp;h=771"
            ></div>
        </section>
      </div>
      <div class="tab-item">
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81efdaf0f2a38006a8f41088fa8a87fc.jpg?w=1080&amp;h=848"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7a3ff36ffedf582f784cd5d3c5d25a94.jpg?w=1080&amp;h=356"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6e0d97df341077af6ae92915a3723ac0.jpg?w=1080&amp;h=900"
            ></div>
        </section>
        <section>
          <div class="desc-img-box"><img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/872ad21086f7bfdfb5cc196e05a0ce9f.jpg?w=1080&amp;h=979"
            ></div>
        </section>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs'
}
</script>

<style lang="stylus" scoped>
.description-view
  margin-top: .16rem;
  .tab-header
    height: .88rem;
    .tab-header-inner
      height: .88rem;
      background: #fff;
      will-change: scroll-position;
      position: relative;
      align-items: center;
      display: flex;
      .flex
        display: block;
        font-size: .26rem;
        width: 100%;
        border-right: 1px solid #f4f4f4;
        flex: 1 1 auto;
        &.on
          color: #ff6700;
  .tab-view
    background: #fff;
    .tab-item
      width: 100%;
      .desc-img-box
        width 100%
</style>
