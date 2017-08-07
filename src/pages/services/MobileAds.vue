<template>
  <div class="layout">
    <div class="view" v-bind:class="{'view--show-border':showBorder}">
      <div class="view__menu-content" v-bind:class="{'view__menu--show':showMenu}">
        <router-link to="/contextus" class="link">контекстная реклама</router-link><br>
        <router-link to="/media" class="link">медийная реклама</router-link><br>
        <router-link to="/target" class="link">таргетированная реклама в социальных сетях</router-link><br>
        <router-link to="/cpa" class="link">CPA</router-link><br>
        <router-link to="/price-lists" class="link">прайс-площадки</router-link><br>
        <router-link to="/seo" class="link">SEO</router-link><br>
        <router-link to="/analitycs" class="link">веб-аналитика</router-link>
      </div>
      <div class="view__menu" v-on:click="toggleMenu">
        <div class="view__menu-separator"></div>
        <div class="view__menu-separator"></div>
        <div class="view__menu-separator"></div>
      </div>
      <div class="view__scroll-layout" @scroll="scrollHandler" v-bind:class="{active: showBlack}">
        <div class="view__canvas">
          <p>Аудитория всё больше пользуется интернетом с мобильных устройств – в 2016 десктопная доля упала до 48%.</p>

          <router-link to="/media" class="banner image banner-1"><span>медийная реклама</span></router-link>

          <p>Мобильный перфоманс-маркетинг решает те же задачи и использует те же инструменты, но с другими настройками и KPI. Рекламу размещают в мобильном вебе и приложениях.</p>

          <carousel></carousel>

          <p>Можно вывести приложение в топ магазина, увеличить активную аудиторию, повысить возвращаемость и так далее.</p>

          <div
              @mouseleave="showBannerBg(false)"
              @mouseenter="showBannerBg(true)">
            <router-link to="/target" class="banner image banner-2"><span>таргетинг в соцсетях</span></router-link>
          </div>

          <div class="paralax-wrapper">
            <p>Конверсия мобильных пользователей пока ниже, чем десктопных – на маленьком экране неудобно совершать покупку. Но этот канал больше нельзя игнорировать – он играет важную роль в пути потенциального покупателя.</p>
            <p>Конверсия мобильных пользователей пока ниже, чем десктопных – на маленьком экране неудобно совершать покупку. Но этот канал больше нельзя игнорировать – он играет важную роль в пути потенциального покупателя.</p>
            <p>Конверсия мобильных пользователей пока ниже, чем десктопных – на маленьком экране неудобно совершать покупку. Но этот канал больше нельзя игнорировать – он играет важную роль в пути потенциального покупателя.</p>
          </div>

          <router-link to="/media" class="banner image banner-1"><span>медийная реклама</span></router-link>

          <p>Как и на десктопе, мобильную рекламу можно анализировать.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/carousel'

export default {
  name: 'hello',
  data () {
    return {
      heatmapInstance: null,
      heatmap: null,
      showMenu: false,
      scrollDelay: 0,
      isScrollDisabled: false,
      showBorder: false,
      showBlack: false,
      hitMapSmallData: [
        {x: '17', y: '474', radius: 50, value: 5},
        {x: '19', y: '439', radius: 50, value: 5},
        {x: '23', y: '415', radius: 50, value: 5},
        {x: '33', y: '376', radius: 50, value: 5},
        {x: '221', y: '273', radius: 50, value: 5},
        {x: '232', y: '278', radius: 50, value: 5},
        {x: '241', y: '298', radius: 50, value: 5},
        {x: '258', y: '320', radius: 50, value: 5},
        {x: '267', y: '342', radius: 50, value: 5},
        {x: '281', y: '366', radius: 50, value: 5},
        {x: '290', y: '379', radius: 50, value: 5},
        {x: '307', y: '407', radius: 50, value: 5},
        {x: '317', y: '424', radius: 50, value: 5},
        {x: '331', y: '447', radius: 50, value: 5},
        {x: '336', y: '485', radius: 50, value: 5},
        {x: '349', y: '496', radius: 50, value: 5}
      ]
    }
  },
  created () {
    this.throttle = this._.throttle(function (deltaY) {
      this.scrollDelay = this.scrollDelay + deltaY

      if (deltaY > 0 && this.hitMapSmallData.length) {
        this.heatmapInstance.addData(this.hitMapSmallData.pop())
      }
      if (deltaY < 0) {
        let heatMapData = this.heatmapInstance.getData()

        if (heatMapData.data.length) {
          this.hitMapSmallData.push(heatMapData.data.shift())
          this.heatmapInstance.setData({
            max: 10,
            min: 0,
            data: heatMapData.data
          })
          this.heatmapInstance.repaint()
        }
      }

      this.showBorder = this.scrollDelay > 3000
      this.$root.$emit('showHm', this.showBorder)

      if (this.scrollDelay > 5000 || this.scrollDelay <= 0) {
        this.enableScroll()
      }
    }, 100)
  },
  mounted () {
    this.heatmap = document.querySelector('.paralax-wrapper')

    this.heatmapInstance = window.h337.create({
      container: this.heatmap,
      radius: 50,
      blur: 1,
      gradient: {
        '1': '#2a2fe3'
      }
    })

    window.heatmapInstance = this.heatmapInstance

    this.heatmapInstance.setData({
      max: 10,
      min: 0,
      data: []
    })
    /* this.heatmap.onclick = (ev) => {
      this.heatmapInstance.addData({
        x: ev.layerX,
        y: ev.layerY,
        radius: 50,
        value: 5
      })
    } */
  },
  beforeDestroy () {
    this.heatmap.onmousemove = function () {}
    this.heatmap.ontouchmove = function () {}
    this.heatmapInstance._renderer.canvas.remove()
    this.heatmapInstance = null
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    scrollHandler (event) {
      if (!this.isScrollDisabled) {
        if (event.target.scrollTop >= 1200 && this.scrollDelay <= 5000) {
          event.target.scrollTop = 1200
          this.disableScroll()
        }
        if (event.target.scrollTop < 1200 && this.scrollDelay > 0) {
          event.target.scrollTop = 1199
          this.disableScroll()
        }
      }

      if (event.target.scrollTop >= 1635) {
        this.showBorder = false
        this.$root.$emit('showHm', this.showBorder)
      } else if (event.target.scrollTop < 1635 && this.scrollDelay > 3000) {
        this.showBorder = true
        this.$root.$emit('showHm', this.showBorder)
      }

      this.showBlack = event.target.scrollTop >= 1199 && event.target.scrollTop < 1635
    },
    showBannerBg (isShow) {
      this.$root.$emit('showBg', isShow)
    },

    preventDefaultForScrollKeys (e) {
      let keys = {37: 1, 38: 1, 39: 1, 40: 1}

      if (keys[e.keyCode]) {
        this.preventDefault(e)
        return false
      }
    },
    preventDefault (e) {
      e = e || window.event
      if (e.preventDefault) e.preventDefault()
      e.returnValue = false

      this.throttle(e.deltaY)
    },
    disableScroll () {
      console.log('disableScroll')
      this.isScrollDisabled = true
      if (window.addEventListener) window.addEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onwheel = this.preventDefault
      window.onmousewheel = document.onmousewheel = this.preventDefault
      window.ontouchmove = this.preventDefault
      document.onkeydown = this.preventDefaultForScrollKeys
    },
    enableScroll () {
      console.log('enableScroll')
      this.isScrollDisabled = false
      if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onmousewheel = document.onmousewheel = null
      window.onwheel = null
      window.ontouchmove = null
      document.onkeydown = null
    }
  },
  components: {
    Carousel
  }
}
</script>

<style lang="sass" scoped>
  .one-point
    width: 3.3rem
    height: 4.5rem
    position: absolute
    background: no-repeat center center / contain url(../../assets/images/point.png)

    &-1
      right: 1rem
      bottom: 3rem

  .paralax-wrapper
    z-index: 1
    user-select: none
    position: relative
    padding: 30rem 5rem 2rem 4.2rem
    margin: 0 -5rem 8rem -4.2rem

  .link
    color: #fcfcff
    font-size: 1.3rem
    line-height: normal
    margin-bottom: 3rem
    display: inline-block
    position: relative

  .layout
    display: flex
    padding-right: 10rem
    padding-bottom: 5rem
    padding-top: 2rem
    flex-flow: row nowrap
    justify-content: flex-end

  .view
    z-index: 100000
    width: 36.2rem
    height: 56.8rem
    overflow: hidden
    position: relative
    background: #ffffff
    border-radius: .5rem
    border: 1px solid transparent
    transition: border-color .3s linear

    &--show-border
      border-color: #969696

    &__menu
      z-index: 100
      cursor: pointer
      top: 1.9rem
      right: 2.2rem
      width: 2.1rem
      height: 1.5rem
      position: absolute
      display: flex
      flex-flow: column nowrap
      justify-content: space-between

      &-separator
        width: 100%
        height: .3rem
        background: #a3a3a9
        transition: transform .2s linear

      &:hover > .view__menu-separator:first-child
        transform: translateY(1px) rotate(-3deg)

      &:hover > .view__menu-separator:last-child
        transform: translateY(-1px) rotate(3deg)

      &-content
        top: 0
        left: 0
        opacity: 0
        width: 100%
        overflow: hidden
        position: absolute
        padding-top: 3.4rem
        padding-left: 4.2rem
        pointer-events: none
        transition: opacity .2s ease-in

        &::before
          top: 0
          right: 0
          width: 300%
          height: 300%
          content: ''
          display: block
          background: #0909e2
          position: absolute
          border-radius: 50%
          transform: translate(50%, -50%) scale(0)
          transition: transform .3s ease-in

      &--show
        opacity: 1
        pointer-events: auto

        &::before
          transform: translate(50%, -50%) scale(1)

    &__scroll-layout
      height: 100%
      overflow-y: scroll
      width: calc(100% + 3rem)
      transition: background .5s linear, color .5s linear

      &.active
        color: #fff
        background: #000

    &__canvas
      width: 36.2rem
      font-size: 1.8rem
      padding: 3.7rem 5rem 3.7rem 4.2rem

  .image
    display: block
    height: 18rem
    width: calc(100% + 9.2rem)
    margin: 0 -5rem 0 -4.2rem
    background: no-repeat center center / cover

  .banner
    text-align: center
    display: flex
    flex-flow: column nowrap
    justify-content: center
    align-items: center
    color: #fcfcff
    font-size: 5.6rem
    font-weight: 700
    text-shadow: 0 0 5px #000
    text-decoration: none

    &-1
      font-size: 4rem
      background-image: url(../../assets/images/displayAds/6.png)

    &-2
      font-size: 4rem
      background-image: url(../../assets/images/displayAds/3.png)

</style>
