<template>
  <slide>
    <div class="wrapper">
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
      <city-alphabet :cities="cities" @change="handleLetterChange" v-show="isAlpShow"></city-alphabet>
    </div>
  </slide>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import slide from '../../common/slide/slide'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      fullHeight: document.documentElement.clientHeight,
      isAlpShow: true
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
    slide
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    handleAlpShow: function () {
      let clientHeight = document.documentElement.clientHeight
      if (clientHeight < (this.fullHeight - 100)) {
        console.log(clientHeight)
        this.isAlpShow = false
      } else {
        this.isAlpShow = true
      }
    }
  },
  mounted () {
    this.getCityInfo()
    this.fullHeight = document.documentElement.clientHeight
  },
  activated () {
    window.addEventListener('resize', this.handleAlpShow)
  },
  deactivated () {
    window.removeEventListener('resize', this.handleAlpShow)
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
</style>
