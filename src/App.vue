<template>
    <div id="app" v-bind:class="{cpa_link:isCPAPage, cpa_target:isTargetPage}">
        <header>
            <router-link to="/" class="logo" data-cost="Р0,66"></router-link>
        </header>
        <router-view :history="history"></router-view>
        <footer>
            <router-link to="/contacts" class="link" data-cost="Р0,75">Контакты</router-link>
            <router-link to="/customers" class="link" data-cost="Р0,03">Клиенты</router-link>
            <router-link to="/partners" class="link" data-cost="Р0,12">Партнеры</router-link>
            <div class="last-links">
                <router-link to="/team" class="link link--nested" data-cost="Р0,07">Команда</router-link>
                <router-link to="/vacancies" class="link link--nested" data-cost="Р1,56">Вакансии</router-link>
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
      history: []
    }
  },
  mounted () {
    router.afterEach((to, from) => {
      window.scrollTo(0, 0)
      this.path = to.path
      this.history.push({to, from})
    })
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
    #app
        display: flex
        min-height: 100vh
        flex-flow: column nowrap
        padding: 5rem 5rem 4rem 7rem
        justify-content: space-between

        &.cpa_target
            height: 100vh
            overflow: hidden

    header, footer
        display: flex
        align-items: center
        flex-flow: row nowrap
        justify-content: space-between

    header::after
        font-size: 1.3rem
        padding-right: 5rem
        content: 'A Performance Agency'

    .logo
        width: 19.1rem
        height: 3.8rem
        display: block
        position: relative
        text-decoration: none
        background: url(assets/images/logo.svg) no-repeat center center / contain

    .link
        font-size: 1.3rem
        line-height: 4.5rem

        &--nested
            display: block
            line-height: 2.5rem

    .last-links
        transform: rotate(-90deg)
        transform-origin: 10% 50%

    .link
        position: relative

        &--nested:first-child::before
            top: -.2rem

        &--nested:last-child::before
            top: .2rem

        &::before
            opacity: 0
            pointer-events: none
            transition: opacity .3s linear
            color: #fff
            font-size: 1.5rem
            line-height: 2rem
            background: #0202e6
            border-radius: 5px
            padding: .5rem 1rem .1rem .5rem
            position: absolute
            left: 120%
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

    .cpa_link .link::before,
    .cpa_link .logo::before
        opacity: 1
        transition-delay: .5s
</style>
