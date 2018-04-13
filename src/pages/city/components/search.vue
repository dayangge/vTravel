<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入城市" class="search-input" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) of list" :key="index" >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData" >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  background $bgColor
  padding 0 .1rem
  height:.72rem
  .search-input
    box-sizing border-box
    width: 100%;
    height:.62rem
    padding 0 .1rem
    line-height: .62rem;
    text-align: center
    border-radius .06rem
    color #666
.search-content
  z-index 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0;
  right: 0
  bottom: 0
  background-color #eaeaea
  .search-item
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
</style>
