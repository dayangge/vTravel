<template>
  <div>
    <div class="sectionMore more border-bottom">
      <div class="title">规格</div>
      <div class="flex">
        <div class="icon-title">{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specifications',
  props: {
    promotion: Object
  },
  data () {
    return {
      content: '红米5 Plus 3GB+32GB 黑色 x1'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .sectionMore
    display flex
    position: relative;
    padding: .2rem .32rem 0;
    background: #fff;
    border-top: 1px;
    text-align: left;
    overflow: hidden;
    padding-bottom .1rem
    .title
      width: .82rem;
      font-size: .24rem;
      color: rgba(0,0,0,.54);
      line-height: .4rem;
    .flex
      flex: 1 1 auto;
      .icon-title
        float left
        margin-left: .08rem;
        font-size: .24rem;
        color: rgba(0,0,0,.87);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: .4rem;
</style>
