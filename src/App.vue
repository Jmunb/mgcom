<template>
    <div class="app" v-bind:class="{cpa_link:isCPAPage, cpa_target:isTargetPage, app__showbg:showBg, app__showhm:showHm}">
        <div class="bgimage">
            <div class="one-row" v-for="n in 10" v-bind:class="'one-row-' + n">
                <div class="one-cel" v-for="j in 20" v-bind:class="'one-cel-' + j" ></div>
            </div>
        </div>
        <header>
            <router-link to="/" class="logo" data-cost="Р0,66"></router-link>
        </header>
        <router-view :history="history"></router-view>
        <footer>
            <div class="first-link">
                <router-link to="/contacts" class="link" data-cost="Р0,75">Контакты</router-link>
                <router-link to="/customers" class="link" data-cost="Р0,03">Клиенты</router-link>
                <router-link to="/partners" class="link" data-cost="Р0,12">Партнеры</router-link>
            </div>
            <div class="last-links">
                <div class="links-wrapper">
                    <router-link to="/team" class="link link--nested" data-cost="Р0,07">Команда</router-link>
                    <router-link to="/vacancies" class="link link--nested" data-cost="Р1,56">Вакансии</router-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import router from './router'

export default {
  name: 'app',
  data () {
    return {
      path: '',
      history: [],
      showBg: false,
      showHm: false,
      realBgState: false,
      activeAnimate: false
    }
  },
  created () {
    this.$root.$on('showHm', (state) => {
      this.showHm = state
    })
    this.$root.$on('showBg', (state) => {
      this.realBgState = state

      if (!this.activeAnimate) {
        this.showBg = state
        this.activeAnimate = true

        setTimeout(() => {
          // TODO: Поправить отмену анимации
          this.activeAnimate = false
          this.showBg = this.realBgState
        }, 1850)
      }
    })
  },
  mounted () {
    router.afterEach((to, from) => {
      window.scrollTo(0, 0)
      this.path = to.path
      this.history.push({to, from})
    })
    this.path = router.history.current.path
  },
  computed: {
    isCPAPage () {
      return this.path === '/cpa'
    },
    isTargetPage () {
      return this.path === '/target'
    }
  }
}
</script>

<style src="./assets/styles/main.scss" lang="sass"></style>
<style lang="sass" scoped>
    .one-row
        height: 10%
        display: flex
        flex-flow: row nowrap
        justify-content: space-between

    .one-cel
        flex: 1 1 5%
        opacity: 0
        transform: scale(0)
        transition: transform .15s linear, opacity .2s linear
        background: no-repeat center center url(assets/images/mobile_bg.png)
        background-size: 100vw 100vh

    @for $i from 1 through 10
        .one-row-#{$i}
            @for $j from 1 through 20
                .one-cel-#{$j}
                    transition-delay: ($j * 0.05s) + (($i - 1) * .05s)
                    background-position-x: -($j - 1) * 5vw
                    background-position-y: -($i - 1) * 10vh

    .bgimage
        top: 0
        left: 0
        right: 0
        bottom: 0
        position: fixed
        pointer-events: none
        perspective: 100rem

        &::after
            display: block
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            opacity: 0
            transition: opacity .3s linear
            background: #000

    .app
        display: flex
        min-height: 100vh
        flex-flow: column nowrap
        padding: 5rem 5rem 4rem 7rem
        justify-content: space-between

        header,
        footer a
            transition: background .4s linear, color .4s linear

        &__showbg
            header,
            footer a
                color: #fff

            .one-cel
                opacity: 1
                will-change: transform, opacify
                transform: scale(1)

        &__showhm
            header,
            footer a
                color: #2a2fe3

            .bgimage::after
                opacity: 1

        &.cpa_target
            height: 100vh
            overflow: hidden

            .link
                line-height: 2.5rem

            .first-link
                margin-left: -1.5rem
                flex-flow: column nowrap

            .first-link,
            .last-links
                flex: 0 0

            .links-wrapper
                transform: rotate(-90deg)

    header, footer
        display: flex
        position: relative
        align-items: center
        flex-flow: row nowrap
        justify-content: space-between

    header
        flex: 0 0 3.8rem

    header::after
        font-size: 1.3rem
        padding-right: 5rem
        content: 'A Performance Agency'

    .first-link
        display: flex
        flex: 0 0 75%
        flex-flow: row nowrap
        justify-content: space-between

    .last-links
        flex: 0 0 25%
        display: flex
        justify-content: flex-end

    .links-wrapper
        transform: rotate(-90deg) translate(3rem, 0)


    .logo
        width: 19.1rem
        height: 3.8rem
        display: block
        position: relative
        text-decoration: none
        background: url(assets/images/logo.svg) no-repeat center center / contain

    .link
        font-size: 1.3rem
        position: relative
        line-height: 2.8rem
        display: inline-block
        border-radius: 1.5rem
        background: transparent
        padding: .5rem 3rem 0 1.5rem

        &.router-link-active
            color: #fff
            background: #29292d

        &--nested
            display: block

            &:first-child::before
                top: -.2rem

            &:last-child::before
                top: .2rem

        &::after
            opacity: 0
            transition: opacity .3s linear
            color: #fff
            font-size: 1.5rem
            line-height: 2rem
            background: #0202e6
            border-radius: 5px
            padding: .5rem 1rem .1rem .5rem
            position: absolute
            margin: -1rem 0 0 1rem
            content: attr(data-cost)


    .logo::before
        opacity: 0
        pointer-events: none
        transition: opacity .3s linear
        color: #fff
        font-size: 1.8rem
        line-height: 3rem
        background: #0202e6
        border-radius: 5px
        padding: .5rem 1rem .1rem .5rem
        position: absolute
        left: 120%
        content: attr(data-cost)

    .cpa_link .link::after,
    .cpa_link .logo::before
        opacity: 1
        transition-delay: .5s
</style>
