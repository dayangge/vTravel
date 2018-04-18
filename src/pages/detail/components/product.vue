<template>
  <div>
    <div class="sectionMore more border-bottom" v-for="(item,index) of promotion" :key="index">
      <div class="title">促销</div>
      <div class="flex">
        <div class="icon-desc" >{{promDesc[item.desc]}}</div>
        <div class="icon-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    promotion: Object
  },
  data () {
    return {
      promDesc: ['赠品', '满减', '买一送一', '半价', '优惠价']
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
  .title
    width: .82rem;
    font-size: .24rem;
    color: rgba(0,0,0,.54);
    line-height: .4rem;
  .flex
    flex: 1 1 auto;
    .icon-desc
      float left
      color: #f56600;
      border-radius: 1px;
      font-size: .16rem
      line-height: .4rem;
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
