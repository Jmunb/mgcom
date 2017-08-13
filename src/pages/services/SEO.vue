<template>
    <div class="wrapper">
        <div class="select__wrapper" tabindex="-1" v-bind:class="{'select__wrapper--show':showSearchList}">
            <input
                @blur="blur"
                @focus="focus"
                type="text"
                placeholder="seo"
                v-model="searchString"
            >
            <ul class="select__list">
                <router-link v-for="route in filterLinks" :to="route.link" class="select__item" :key="route.id" tag="li">
                    {{route.t || route.title}}
                </router-link>
            </ul>
        </div>
        <div class="result">
            <router-link to="/seo" class="result__title">SEO | Поисковая оптимизация</router-link>
            <div class="result__text">
                Оптимизируем сайт, чтобы получить максимум поисковой органики – анализируем архитектуру и контента, разрабатываем рекомендаций.
                Умеем находить общий язык с разработчиками. Не покупаем ссылки – только белое seo-продвижение.
            </div>
        </div>
        <div class="about">
            <div class="about__title">Вместе с «seo» ищут:</div>
            <div class="about__columns">
                <div class="about__column">
                    <router-link v-for="route in linksMap.first" :to="links[route].link" class="about__link" :key="links[route].id">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap.second" :to="links[route].link" class="about__link" :key="links[route].id">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap.third" :to="links[route].link" class="about__link" :key="links[route].id">
                        {{links[route].title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let links = [
  {id: 1, title: 'контекст', link: '/contextus'}, // 0
  {id: 2, title: 'веб-аналитика', link: '/analitycs'}, // 1
  {id: 3, title: 'медийная реклама', link: '/media'}, // 2
  {id: 4, title: 'таргетинг в соцсетях', link: '/target'}, // 3
  {id: 5, title: 'прайс-площадки', link: '/price-lists'}, // 4
  {id: 6, t: 'SEO', title: 'smm', link: '/seo'}, // 5
  {id: 7, title: 'мобайл', link: '/mobile-ads'}, // 6
  {id: 8, title: 'CPA', link: '/cpa'} // 7
]
let source = {
  'index': {
    first: [0, 3, 6],
    second: [1, 4, 7],
    third: [2, 5]
  },
  'media': {
    first: [2, 3, 4],
    second: [5, 6, 1],
    third: [7, 0]
  },
  'cpa': {
    first: [7, 4, 0],
    second: [1, 3, 6],
    third: [2, 5]
  },
  'target': {
    first: [3, 0, 2],
    second: [1, 5, 4],
    third: [6, 7]
  },
  'price-lists': {
    first: [4, 0, 7],
    second: [6, 1, 3],
    third: [2, 5]
  },
  'mobile-ads': {
    first: [6, 0, 3],
    second: [2, 1, 4],
    third: [7, 5]
  },
  'analitycs': {
    first: [1, 3, 0],
    second: [6, 4, 7],
    third: [2, 5]
  }
}

export default {
  name: 'SEO',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      showSearchList: false,
      searchString: '',
      linksMap: source[fromRouteName.name || 'index'] || source['index'],
      links: links
    }
  },
  methods: {
    blur () {
      this.showSearchList = false
      this.searchString = ''
    },
    focus () {
      this.showSearchList = true
    }
  },
  computed: {
    filterLinks: function () {
      let searchString = this.searchString.trim().toLowerCase()

      return this.links.filter(link => (link.t || link.title).toLowerCase().indexOf(searchString) > -1)
    }
  }
}
</script>

<style lang="sass" scoped>
    .select
        &__wrapper
            outline: 0
            position: relative
            box-shadow: 0 0 1rem .3rem rgba(28,0,0,.05)

            &--show .select__list
                opacity: 1
                visibility: visible
                transition: opacity .1s ease-in, visibility 0s step-end

        &__list
            left: 0
            top: 100%
            margin: 0
            z-index: 1
            padding: 0
            width: 100%
            opacity: 0
            list-style: none
            position: absolute
            background: #fff
            visibility: hidden
            transition: opacity .1s ease-in, visibility .2s step-end
            border-top: 1px solid rgba(28,0,0,.05)
            box-shadow: 0 0 .5rem .1rem rgba(28,0,0,.05)

        &__item
            cursor: pointer
            padding: 0 2rem
            line-height: 4rem
            font-size: 1.4rem

            &:hover
                background: #dedede

    .wrapper
        width: 52%
        flex-grow: 1
        display: flex
        padding: 5rem 0
        align-self: center
        flex-flow: column nowrap
        justify-content: flex-end

    input
        border: 0
        z-index: 2
        outline: 0
        width: 100%
        height: 5rem
        background: #fff
        font-size: 2.1rem
        padding-left: 2rem
        position: relative

    .result
        margin-top: 5rem
        padding: 0 1rem 0 2rem

        &__title
            color: #2649db
            font-size: 1.8rem

        &__text
            line-height: 1.4
            margin-top: 2rem
            font-size: 1.5rem

    .about
        margin-top: 5rem
        padding-left: 2rem
        opacity: .4
        color: #000000
        font-size: 1.5rem

        &__title
            line-height: 4rem

        &__columns
            display: flex
            margin-top: 1rem
            flex-flow: row nowrap

        &__column
            margin-right: 4rem

        &__link
            line-height: 3rem
            display: block
</style>
