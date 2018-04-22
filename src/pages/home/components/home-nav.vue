<template>
  <div  class="nav" >
    <router-link tag="div"  class="nav-item" to="/">
      <span>
        推荐</span>
    </router-link>
    <div  class="nav-item">
      <span >
        手机</span>
    </div>
    <div  class="nav-item">
      <span >
        智能
      </span>
    </div>
    <div  class="nav-item">
      <span >
        电视
      </span>
    </div>
    <div  class="nav-item">
      <span >
        电脑
      </span>
    </div>
    <div  class="nav-item">
      <span >
        全面屏
      </span>
    </div>
    <div  class="nav-item">
      <span >
        生活周边
      </span>
    </div>
    <div  class="nav-item">
    <span >
      盒子
    </span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'home-nav'
}
</script>

<style lang="stylus" scoped>
.nav
  overflow-x: auto;
  background: #f2f2f2;
  font-size: .26rem;
  white-space: nowrap;
  z-index: 2;
  &:-webkit-scrollbar
    display: none
  .nav-item
    display: inline-block;
    padding: 0 .25rem;
    &.router-link-active
      span
        color: rgb(237, 91, 0);
        border-color: rgb(237, 91, 0);
    span
      display: inline-block;
      line-height: 32px;
      border-bottom: 2px solid rgba(237,91,0,0);

</style>
