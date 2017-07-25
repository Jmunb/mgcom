<template>
    <div class="wrapper">
        <autocomplete
                name="people"
                url="http://localhost:3000/remote-list/klien"
                anchor="value"
                label="label"
                model="vModelLike">
        </autocomplete>
        <input type="text" value="SEO" disabled>
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
                    <router-link v-for="route in linksMap.first" :to="links[route].link" class="about__link" :key="route">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap.second" :to="links[route].link" class="about__link" :key="route">
                        {{links[route].title}}
                    </router-link>
                </div>
                <div class="about__column">
                    <router-link v-for="route in linksMap.third" :to="links[route].link" class="about__link" :key="route">
                        {{links[route].title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let links = [
  {title: 'контекст', link: '/contextus'}, // 0
  {title: 'веб-аналитика', link: '/analitycs'}, // 1
  {title: 'медийная реклама', link: '/media'}, // 2
  {title: 'таргетинг в соцсетях', link: '/target'}, // 3
  {title: 'прайс-площадки', link: '/price-lists'}, // 4
  {title: 'smm', link: '/seo'}, // 5
  {title: 'мобайл', link: '/mobile-ads'}, // 6
  {title: 'CPA', link: '/cpa'} // 7
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
      linksMap: source[fromRouteName.name || 'index'],
      links: links
    }
  }
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 52%
        align-self: center
        padding-bottom: 5rem

    input
        border: 0
        outline: 0
        width: 100%
        height: 5rem
        background: #fff
        font-size: 2.1rem
        padding-left: 2rem
        box-shadow: 0 0 1.5rem .3rem rgba(28,0,0,.1)

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
