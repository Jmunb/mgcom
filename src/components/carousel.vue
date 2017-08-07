<template>
    <div
        class="carousel"
        @mouseleave="offCarouselScroll"
        @mouseenter="onCarouselScroll"
        v-bind:class="'carousel--step-' + step"
    >
        <router-link to="/contextus" class="carousel__item carousel__item-1"><span>контекстная реклама</span></router-link>
        <router-link to="/media" class="carousel__item carousel__item-2"><span>медийная реклама</span></router-link>
        <router-link to="/target" class="carousel__item carousel__item-3"><span>SMM</span></router-link>
        <router-link to="/cpa" class="carousel__item carousel__item-4"><span>CPA</span></router-link>
        <router-link to="/price-lists" class="carousel__item carousel__item-5"><span>прайс-площадки</span></router-link>
        <router-link to="/seo" class="carousel__item carousel__item-6"><span>SEO</span></router-link>
        <router-link to="/analitycs" class="carousel__item carousel__item-7"><span>веб-аналитика</span></router-link>
        <router-link to="/mobile-ads" class="carousel__item carousel__item-8"><span>мобильная реклама</span></router-link>
    </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      step: 1
    }
  },
  created () {
    this.throttleSteps = this._.throttle(function (deltaY) {
      if (deltaY > 0) {
        this.nextStep(-1)
      } else {
        this.nextStep(1)
      }
    }, 125, {trailing: false})
  },
  beforeDestroy () {
    this.enableScroll()
  },
  methods: {
    onCarouselScroll () {
      this.disableScroll()
    },
    offCarouselScroll () {
      this.enableScroll()
    },
    nextStep (step) {
      let nextStep = this.step + step
      if (nextStep > 8) {
        nextStep = 1
      }
      if (nextStep < 1) {
        nextStep = 8
      }

      this.step = nextStep
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

      this.throttleSteps(e.deltaY)
    },
    disableScroll () {
      if (window.addEventListener) window.addEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onwheel = this.preventDefault
      window.onmousewheel = document.onmousewheel = this.preventDefault
      window.ontouchmove = this.preventDefault
      document.onkeydown = this.preventDefaultForScrollKeys
    },
    enableScroll () {
      if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      window.onmousewheel = document.onmousewheel = null
      window.onwheel = null
      window.ontouchmove = null
      document.onkeydown = null
    }
  }
}
</script>

<style lang="sass" scoped>
.carousel
    position: relative
    width: 100%
    height: 16rem
    margin: 5rem 0 7rem
    perspective: 100rem
    transform-style: preserve-3d

    &:hover .carousel__item
        opacity: 1

    &--step-1
        .carousel__item-1
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-2
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-3
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-4
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-5,
        .carousel__item-6,
        .carousel__item-7
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-8
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-2
        .carousel__item-2
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-3
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-4
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-5
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-6,
        .carousel__item-7,
        .carousel__item-8
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-1
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-3
        .carousel__item-3
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-4
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-5
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-6
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-7,
        .carousel__item-8,
        .carousel__item-1
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-2
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-4
        .carousel__item-4
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-5
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-6
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-7
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-8,
        .carousel__item-1,
        .carousel__item-2
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-3
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-5
        .carousel__item-5
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-6
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-7
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-8
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-1,
        .carousel__item-2,
        .carousel__item-3
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-4
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-6
        .carousel__item-6
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-7
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-8
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-1
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-2,
        .carousel__item-3,
        .carousel__item-4
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-5
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-7
        .carousel__item-7
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-8
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-1
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-2
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-3,
        .carousel__item-4,
        .carousel__item-5
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-6
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &--step-8
        .carousel__item-8
            opacity: 1
            z-index: 40
            transform: scale(1.15) translate(0px, 0px)

        .carousel__item-1
            z-index: 30
            filter: blur(1.5px)
            transform: scale(1) translate(0px, 3.5rem)

        .carousel__item-2
            z-index: 20
            filter: blur(3.86px)
            transform: scale(0.85) translate(0px, 7rem)

        .carousel__item-3
            z-index: 10
            filter: blur(10.48px)
            transform: scale(.7) translate(0px, 11rem)

        .carousel__item-4,
        .carousel__item-5,
        .carousel__item-6
            z-index: 0
            transform: scale(1) translate(0px, 0px)

        .carousel__item-7
            z-index: 20
            filter: blur(2.65px)
            transform: scale(.9) translate(0px, -4rem)

    &__item
        opacity: 0
        text-align: center
        display: flex
        flex-flow: column nowrap
        justify-content: center
        align-items: center
        overflow: hidden
        color: #fcfcff
        font-size: 5.6rem
        font-weight: 700
        text-shadow: 0 0 5px #000
        text-decoration: none
        background: no-repeat center center / cover


        position: absolute
        left: 50%
        top: 50%
        width: 100%
        height: 100%
        background-size: cover
        margin-top: -8rem
        margin-left: -13.5rem
        transition: transform .2s linear, z-index .2s linear, filter .2s linear, opacity .2s ease-in

        &-1
            font-size: 3rem
            background-image: url(../assets/images/displayAds/1.png)

        &-2
            font-size: 4rem
            background-image: url(../assets/images/displayAds/6.png)

        &-3
            background-image: url(../assets/images/displayAds/3.png)

        &-4
            background-image: url(../assets/images/displayAds/4.png)

        &-5
            font-size: 4rem
            background-image: url(../assets/images/displayAds/5.png)

        &-6
            background-image: url(../assets/images/displayAds/2.png)

        &-7
            font-size: 3rem
            background-image: url(../assets/images/displayAds/7.png)

        &-8
            font-size: 4rem
            background-image: url(../assets/images/displayAds/8.png)
</style>
