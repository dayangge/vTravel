<template>
  <div>
    <div class="item">
      <div class="item-title">
        <span class="item-title-icon">赠品</span>
        {{goods.name}}
      </div>
      <div class="item-brief">
        {{goods.brief}}
      </div>
      <div class="item-price">
        {{goods.price}}
      </div>
      <div v-if="goods.children"   class="item-children">
        <data-list :list="item.children"></data-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataList',
  props: {
    goods: Object
  }
}
</script>

<style lang="stylus" scoped>
.item
  background: #fff;
  text-align: left;
  padding: .2rem .32rem 0
  .item-title
    line-height: .48rem;
    font-size: .32rem;
    padding:0
    .item-title-icon
      color: #f56600;
      border-radius: 1px;
      padding: .03rem .05rem .02rem 0rem;
      margin: 0 0 .01rem;
      font-size: .16rem
  .item-brief
    font-size: .24rem;
    line-height: 1.5em;
    color: rgba(0,0,0,.54);
  .item-price
    color: #ff6700;
    font-size: .4rem;
    font-weight: 700;
    position: relative;
    padding-left: .5em;
    line-height: 1.8em
    &:before
      content: "\A5";
      position: absolute;
      left: 0;
      top: 0;
      font-size: .86em;
      text-decoration: none;
  .item-children
    padding:0 .2rem
    font-size: .14rem;
</style>
