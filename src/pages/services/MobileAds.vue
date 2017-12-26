<template>
  <div class="layout" v-bind:class="{'layout--first': firstBgIsShow && scrollIsTop, 'layout--second': secondBgIsShow}">
    <div class="bg-1" v-bind:style="{ backgroundSize: 'auto ' + contentHeight + 'px', 'background-position': '100% ' + (scrollY * -1) + 'px'}"></div>
    <div class="bg-2"></div>
    <div class="phone">
      <div class="phone__content-wrapper" @scroll="scrollHandler($event)">
        <div
                class="phone__content"
        >

          <div
                  class="first-page"
                  @mouseenter="mousePointerHandler(true)"
                  @mouseleave="mousePointerHandler(false)"
          >
            <div class="first-page__bg" v-bind:style="{ backgroundSize: 'auto ' + contentHeight + 'px'}"></div>
            <div class="first-page__title">Мобайл</div>
            <div class="first-page__content">
              В 2016 десктопная
              доля использования интернета упала
              до 48% — мобильные пользователи
              победили
            </div>
          </div>

          <div class="page-2">
            <p>
              Мобильный перфоманс-маркетинг решает те же задачи
              и использует те же инструменты, но с другими настройками и KPI. Это классическая
            </p>
            <div
                    class="img-link"
                    @mouseenter="mousePointerHandler2(true)"
                    @mouseleave="mousePointerHandler2(false)"
            ></div>
            <p>
              или, например,
              <router-link to="/contextus" class="link">paid search</router-link>,
              но размещенные в мобильном вебе или приложениях. Можно вывести приложение в топ магазина, увеличить активную аудиторию, повысить возвра-щаемость — с этой задачей эффективнее всего работает
            </p>
            <div
                    class="paid-link"
                    @mouseenter="paidLinkHover(true)"
                    @mouseleave="paidLinkHover(false)"
            >
              <video
                      id="paid-video-bg"
                      loop="true"
                      muted="true"
                      class="paid-link__video-bg"
                      src="../../assets/videos/15876364.mp4"
              ></video>
              <div class="paid-link__text">paid social</div>
            </div>
            <p>
              — и так далее.
              <router-link to="/seo" class="link">SEO</router-link>,
              при этом не потребует специальных настроек для мобильного поиска.
            </p>
            <p>
              Конверсия мобильных пользователей пока ниже, чем десктопных — на маленьком экране неудобно совершать покупку. Но смотреть рекламу ровно на тех же маркетплейсах ничто не мешает уже сейчас.
            </p>
            <div class="analytics-link"></div>
            <p>
              Поэтому этот канал больше нельзя игнорировать: он играет важную роль в пути потенциаль-ного покупателя.
            </p>
            <p>
              Как и на десктопе, бюджетом мобильной кампании лучше управлять при помощи
            </p>
            <router-link to="/cpa" class="cpa-link"></router-link>
            <p>
              а результаты всегда можно
              <router-link to="/analitycs" class="link">анализировать</router-link>,
              нужным способом.
            </p>
          </div>
        </div>
      </div>
      <div class="phone__menu-content" v-bind:class="{'phone__menu--show':showMenu}">
        <div class="phone__menu-control" v-on:click="toggleMenu">
          <svg width="1.5rem" height="1.5rem" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Mobile-15-2-Menu" transform="translate(-909.000000, -134.000000)" fill="#F8F8FB">
                <g id="Бургер-светлый" transform="translate(884.000000, 107.000000)">
                  <g id="Меню">
                    <path d="M32.5,33.3949223 L26.3345402,27.2294625 C26.0346685,26.9295909 25.534911,26.9245934 25.2297522,27.2297522 C24.9224659,27.5370385 24.9244637,28.0295414 25.2294625,28.3345402 L31.3949223,34.5 L25.2294625,40.6654598 C24.9295909,40.9653315 24.9245934,41.465089 25.2297522,41.7702478 C25.5370385,42.0775341 26.0295414,42.0755363 26.3345402,41.7705375 L32.5,35.6050777 L38.6654598,41.7705375 C38.9653315,42.0704091 39.465089,42.0754066 39.7702478,41.7702478 C40.0775341,41.4629615 40.0755363,40.9704586 39.7705375,40.6654598 L33.6050777,34.5 L39.7705375,28.3345402 C40.0704091,28.0346685 40.0754066,27.534911 39.7702478,27.2297522 C39.4629615,26.9224659 38.9704586,26.9244637 38.6654598,27.2294625 L32.5,33.3949223 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <router-link to="/media" class="menu-link">Медийная реклама</router-link><br>
        <router-link to="/contextus" class="menu-link">Paid Search</router-link><br>
        <router-link to="/target" class="menu-link">Paid Social</router-link><br>
        <router-link to="/seo" class="menu-link">SEO</router-link><br>
        <router-link to="/price-lists" class="menu-link">Маркетплейсы</router-link><br>
        <router-link to="/cpa" class="menu-link">CPA</router-link><br>
        <router-link to="/analitycs" class="menu-link">Веб-аналитика</router-link>
        <div class="phone__menu-mobile-links">
          <router-link to="/contacts" class="menu-link">Контакты</router-link><br>
          <router-link to="/customers" class="menu-link">Клиенты</router-link><br>
          <router-link to="/vacancies" class="menu-link">Вакансии</router-link><br>
          <router-link to="/team" class="menu-link">Команда</router-link><br>
          <router-link to="/partners" class="menu-link">Партнеры</router-link>
        </div>
      </div>
      <div class="phone__menu" v-on:click="toggleMenu">
        <svg width="2rem" height="1.5rem" viewBox="0 0 20 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Mobile-15-2-Menu" transform="translate(-1141.000000, -132.000000)" fill="#F8F8FB">
              <g id="Бургер-светлый" transform="translate(884.000000, 107.000000)">
                <path d="M257,25.8333333 C257,25.373096 257.381668,25 257.833912,25 L276.166088,25 C276.626645,25 277,25.3698874 277,25.8333333 C277,26.2935706 276.618332,26.6666667 276.166088,26.6666667 L257.833912,26.6666667 C257.373355,26.6666667 257,26.2967793 257,25.8333333 Z M257,32.5 C257,32.0397627 257.381668,31.6666667 257.833912,31.6666667 L276.166088,31.6666667 C276.626645,31.6666667 277,32.036554 277,32.5 C277,32.9602373 276.618332,33.3333333 276.166088,33.3333333 L257.833912,33.3333333 C257.373355,33.3333333 257,32.963446 257,32.5 Z M257,39.1666667 C257,38.7064294 257.381668,38.3333333 257.833912,38.3333333 L276.166088,38.3333333 C276.626645,38.3333333 277,38.7032207 277,39.1666667 C277,39.626904 276.618332,40 276.166088,40 L257.833912,40 C257.373355,40 257,39.6301126 257,39.1666667 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="phone__scroller-icon" v-bind:class="{'phone__scroller-icon--show': scrollIsTop}">
        <svg width="8.2rem" height="1.8rem" viewBox="0 0 82 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Mobile-15" transform="translate(-1054.000000, -577.000000)" fill="#F8F8FB">
              <g id="Окно" transform="translate(884.000000, 107.000000)">
                <path d="M170.059818,470.651606 C170.266123,470.136441 170.848231,469.884446 171.357207,470.087648 L211.01446,485.920285 L250.652299,470.087648 C251.162272,469.883949 251.738262,470.132139 251.942588,470.651606 L251.909742,470.568098 C252.112376,471.083263 251.868095,471.663395 251.356608,471.86685 L210.998176,487.920285 L170.639745,471.86685 C170.131624,471.664734 169.885231,471.087565 170.09326,470.568098 L170.059818,470.651606 Z" id="Line"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div v-if="false" class="view" v-bind:class="{'view--show-border':showBorder}">
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
      videoBg: null,

      firstBgIsShow: false,
      secondBgIsShow: false,
      scrollIsTop: true,
      scrollY: window.scrollY,
      contentHeight: window.innerHeight,

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
    this.videoBg = document.getElementById('paid-video-bg')

    this.contentHeight = document.documentElement.scrollHeight
    window.onscroll = () => {
      this.scrollY = window.scrollY
    }
    /*
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
    }) */
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
    paidLinkHover (state) {
      if (state) {
        this.videoBg.play()
      } else {
        this.videoBg.pause()
      }
    },
    mousePointerHandler (value) {
      this.firstBgIsShow = value
      if (!this.scrollIsTop) value = false
      this.$root.$emit('bgIsColor', value)
    },
    mousePointerHandler2 (value) {
      this.secondBgIsShow = value
      if (!this.scrollIsTop) value = false
      this.$root.$emit('bgIsColor', value)
    },
    scrollHandler (event) {
      this.scrollIsTop = event.target.scrollTop < 1
      this.$root.$emit('bgIsColor', event.target.scrollTop < 1)
    },

    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    scrollHandler2 (event) {
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
  @import "../../assets/styles/mixins"

  .layout
    flex-grow: 1
    display: flex
    flex-flow: column nowrap
    justify-content: flex-start
    align-items: flex-end
    position: relative

    @include desktop
      padding: 3.7rem 10rem 4.7rem 0

    @include tablet
      justify-content: flex-end
      padding: 0 10rem 0 0

    @include mobile
      align-items: stretch
      margin: -11.1rem -3.5rem 0 -4rem

    .bg-1,
    .bg-2
      top: 0
      right: 0
      content: ''
      position: fixed
      width: 100vw
      height: 100vh
      opacity: 0
      pointer-events: none
      transition: opacity .2s linear

      @include mobile
        display: none

    .bg-1
      background: no-repeat center center / cover url('../../assets/images/mobile/first_bg.jpg')

    .bg-2
      background: no-repeat center center / cover url('../../assets/images/mobile/bg_2.jpg')

    &--first
      .bg-1
        opacity: 1

      .phone
        box-shadow: 0 0 0 2px rgba(255, 255, 255, .5)

    &--second
      .bg-2
        opacity: 1

  .phone
    @include noMobile
      background: #FFFFFF
      position: relative
      overflow: hidden
      width: 32rem
      height: 56.8rem
      background: #FFFFFF
      border-radius: .3rem
      transition: box-shadow .2s linear

    @include tablet
      height: 52.2rem
      z-index: 0

    &__scroller-icon
      opacity: 0
      width: 8.2rem
      height: 1.8rem
      right: 5rem
      bottom: 3.4rem
      position: absolute
      pointer-events: none
      animation: bounce 2s infinite
      transition: opacity .2s linear

      &--show
        opacity: 1

    &__content
      font-size: 1.3rem
      color: #000000
      letter-spacing: 0.16px
      line-height: 2rem
      padding: 3rem 2.5rem 3rem 2.3rem

      @include noMobile
        width: 32rem
        overflow: hidden

      @include mobile
        font-size: 1.6rem
        color: rgba(0,0,0,0.90)
        letter-spacing: 0
        line-height: 2.4rem

      &-wrapper
        @include noMobile
          height: 56.8rem
          overflow: auto
          margin-right: -2rem

        @include tablet
          height: 52.2rem

    &__menu
      z-index: 100
      cursor: pointer
      top: 2.5rem
      right: 2.5rem
      width: 2rem
      height: 1.5rem
      position: absolute
      display: flex
      flex-flow: column nowrap
      justify-content: space-between

      @include mobile
        position: fixed

      &-mobile-links
        @include noMobile
          display: none

      &-control
        top: 2.7rem
        left: 2.5rem
        cursor: pointer
        position: absolute

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
        padding-top: 4.1rem
        padding-left: 2.5rem
        pointer-events: none
        border-radius: 0 0 .7rem .7rem
        transition: opacity .2s ease-in
        padding-bottom: 2.8rem

        @include mobile
          z-index: 10000
          position: fixed

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

  p
    margin: 4rem 0 0

    @include mobile
      margin: 3.5rem 0 0

  .link
    color: #0A0AE2

  .menu-link
    font-size: 1.3rem
    color: #ffffff
    letter-spacing: 0.16px
    display: inline-block
    line-height: 2rem
    position: relative
    margin-top: 2.8rem
    text-decoration: none

    &:hover
      color: #000000

  .img-link
    height: 15rem
    cursor: pointer
    margin-top: 4rem
    background: no-repeat center center / cover url(../../assets/images/mobile/first_banner.jpg)

  .paid-link
    height: 21rem
    cursor: pointer
    overflow: hidden
    position: relative
    margin: 4rem -2.5rem 0 -2.3rem
    transition: box-shadow .1s linear

    &__text
      color: #fff
      font-size: 3rem
      font-weight: bold
      text-align: center
      position: relative
      line-height: 20rem
      text-transform: lowercase

    &__video-bg
      height: 100%
      top: 0
      left: 50%
      position: absolute
      pointer-events: none
      transform: translateX(-50%)

  .analytics-link
    cursor: pointer
    height: 56.8rem
    margin: 4rem -2.5rem 0 0
    background: no-repeat center center / cover url(../../assets/images/mobile/oval.png)

    @include tablet
      height: 52.2rem

  .cpa-link
    cursor: pointer
    height: 16.4rem
    margin-top: 4rem
    display: block
    text-decoration: underline
    background: no-repeat center center / cover url(../../assets/images/mobile/cpa_bg.png)

  .first-page
    display: flex
    position: relative
    justify-content: flex-end
    flex-flow: column nowrap
    color: #F8F8FB

    @include noMobile
      z-index: 0
      height: 56.8rem
      padding-bottom: 3.9rem
      margin-top: -3rem

    @include tablet
      height: 52.2rem

    @include mobile
      height: calc(100vh - 3rem)
      padding-bottom: 11rem
      font-size: 1.6rem
      color: #F8F8FB
      letter-spacing: 0
      line-height: 2.4rem

    &__bg
      top: -10.7rem
      right: -20.5rem
      position: absolute
      content: ''
      width: 100vw
      height: 100vh
      z-index: -1
      display: block
      background: no-repeat 100% 0px / cover url('../../assets/images/mobile/first_bg.jpg')

      @include mobile
        top: -3rem
        left: -2.3rem
        right: auto
        position: absolute
        background: no-repeat center center / cover url('../../assets/images/mobile/first_bg.jpg') !important


    &__title
      font-weight: bold
      font-size: 3.6rem
      letter-spacing: -.3rem
      line-height: 3.1rem

    &__content
      margin-top: 3.2rem





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

    &__scroll-layout
      height: 100%
      overflow: auto
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
      background-image: url(../../assets/images/mobile_bg.png)

  @keyframes bounce
    0%, 20%, 50%, 80%, 100%
      transform: translateY(0)
    40%
      transform: translateY(-1rem)
    60%
      transform: translateY(-.5rem)
</style>
