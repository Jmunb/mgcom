<template>
    <div class="wrapper page-content">
        <div class="select__wrapper" tabindex="-1" v-bind:class="{'select__wrapper--show':showSearchList}">
            <input
                @blur="blur"
                @focus="focus"
                @keyup.40.38.27.13="keyboard"
                type="text"
                placeholder="seo"
                v-model="searchString"
            >
            <ul class="select__list">
                <router-link v-for="(route, index) in filterLinks" :to="route.link" class="select__item" v-bind:class="{'active':activeTab == index}" :key="route.id" tag="li">
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
                    <router-link v-for="route in linksMap[0]" :to="links[route].link" class="about__link" :key="links[route].id">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap[1]" :to="links[route].link" class="about__link" :key="links[route].id">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap[2]" :to="links[route].link" class="about__link" :key="links[route].id">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap[3]" :to="links[route].link" class="about__link" :key="links[route].id">
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
  {id: 3, title: 'баннеры', link: '/media'}, // 2
  {id: 4, title: 'таргетинг', link: '/target'}, // 3
  {id: 5, title: 'маркетплейсы', link: '/price-lists'}, // 4
  {id: 6, t: 'SEO', title: 'smm', link: '/seo'}, // 5
  {id: 7, title: 'мобайл', link: '/mobile-ads'}, // 6
  {id: 8, title: 'cpa', link: '/cpa'} // 7
]

let source = {
  'index': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ],
  'media': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ],
  'cpa': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ],
  'target': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ],
  'price-lists': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ],
  'mobile-ads': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ],
  'analitycs': [
    [0, 3],
    [1, 4],
    [6, 7],
    [2, 5]
  ]
}

export default {
  name: 'SEO',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      showSearchList: false,
      activeTab: -1,
      searchString: '',
      linksMap: source[fromRouteName.name || 'index'] || source['index'],
      links: links
    }
  },
  methods: {
    blur () {
      this.activeTab = -1
      this.showSearchList = false
      this.searchString = ''
    },
    focus () {
      this.showSearchList = true
    },
    keyboard (event) {
      let code = event.keyCode
      let activeTabIndex = this.activeTab

      if (code === 40) {
        activeTabIndex++

        if (activeTabIndex > this.filterLinks.length - 1) activeTabIndex = 0
      } else if (code === 38) {
        activeTabIndex--

        if (activeTabIndex < 0) activeTabIndex = this.filterLinks.length - 1
      } else if (code === 13) {
        let selectTab = this.filterLinks[activeTabIndex]

        if (selectTab) {
          this.$router.push(selectTab.link)
        }
      } else if (code === 27) {
        event.target.blur()
      }

      this.activeTab = activeTabIndex
    }
  },
  computed: {
    filterLinks: function () {
      let searchString = this.searchString.trim().toLowerCase()

      return this.links.filter(link => (link.t || link.title).toLowerCase().indexOf(searchString) > -1)
    }
  },
  watch: {
    searchString () {
      this.activeTab = -1
    }
  }
}
</script>

<style lang="sass" scoped>
    @import "../../assets/styles/mixins"

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
            width: 100%
            opacity: 0
            list-style: none
            position: absolute
            background: #fff
            padding: 1.4rem 0
            visibility: hidden
            transition: opacity .1s ease-in, visibility .2s step-end
            border-top: 1px solid rgba(28,0,0,.05)
            box-shadow: 0 0 .5rem .1rem rgba(28,0,0,.05)

        &__item
            cursor: pointer
            padding: 0 2rem
            font-size: 1.4rem
            line-height: 2.2rem

            &.active,
            &:hover
                background: #F8F8FB

    .wrapper
        display: flex
        flex-flow: column nowrap

        @include desktop
            padding-top: calc( (50vh - 17rem) * .375)

        @include tablet('portrait')
            flex: .5 0 45%

    .old-wrapper
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
        margin-top: 2.1rem
        padding: 0 1rem 0 2rem
        letter-spacing: 0
        line-height: 2.2rem

        @include tablet
            margin-top: 3.9rem

        @include tablet('portrait')
            flex-grow: 1

        &__title
            font-size: 1.6rem
            color: #2749DC
            letter-spacing: 0
            line-height: 2.2rem

        &__text
            margin-top: 1.6rem
            font-size: 1.3rem

    .about,
    .result
        width: 80%

    .about
        margin-top: 2.2rem
        padding-left: 2rem
        opacity: .4
        color: #000000
        font-size: 1.3rem
        letter-spacing: 0
        line-height: 2.2rem

        @include tablet
            margin-top: 3.3rem

        @include mobile
            font-size: 1.2rem
            line-height: 2rem

        &__columns
            display: flex
            margin-top: 1.5rem
            flex-flow: row nowrap
            justify-content: space-between

            @include mobile
                justify-content: flex-start
                flex-flow: row wrap

            @include tablet
                margin-top: 1.7rem

        &__column
            margin-right: 4rem
            @include mobile
                flex: 0 0 50%
                margin: 0


        &__link
            line-height: 3rem
            display: block

            @include tablet
                line-height: 2.2rem

            @include mobile
                white-space: nowrap

</style>
