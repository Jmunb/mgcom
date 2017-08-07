<template>
  <div class="wrapper">
    <div class="one-row">
      <div class="one-cell one-cell--1"></div>
      <div class="one-cell one-cell--2">
        <router-link to="/media" class="link">Медийная реклама</router-link><br>
        <router-link to="/media" class="link link--gray">mgcom.ru/media</router-link><br>
        <router-link to="/media" class="link link--black">Баннеры на релевантных площадках, программатик</router-link>
      </div>
      <div class="one-cell one-cell--3"></div>
    </div>
    <div class="one-row one-row--central" @wheel="scrollHandler" v-bind:class="'step-' + step">
      <div class="one-cell one-cell--1">
        <div class="one-advert" v-for="(advert, index) in leftBanners" v-bind:class="'one-advert-' + index">
          <router-link :to="advert.link" class="link">{{advert.title}}</router-link><br>
          <router-link :to="advert.link" class="link link--gray">{{advert.linkTitle}}</router-link><br>
          <router-link :to="advert.link" class="link link--black">{{advert.text}}</router-link>
        </div>
      </div>
      <div class="one-cell text one-cell--2">
        <div class="one-text" v-for="(text, index) in source" v-bind:class="'one-text-' + index">{{text}}</div>
      </div>
      <div class="one-cell one-cell--3">
        <div class="one-advert" v-for="(advert, index) in rightBanners" v-bind:class="'one-advert-' + index">
          <router-link :to="advert.link" class="link">{{advert.title}}</router-link><br>
          <router-link :to="advert.link" class="link link--gray">{{advert.linkTitle}}</router-link><br>
          <router-link :to="advert.link" class="link link--black">{{advert.text}}</router-link>
        </div>
      </div>
    </div>
    <div class="one-row">
      <div class="one-cell one-cell--1"></div>
      <div class="one-cell one-cell--2">
        <router-link to="/seo" class="link">SEO</router-link><br>
        <router-link to="/seo" class="link link--gray">mgcom.ru/seo</router-link><br>
        <router-link to="/seo" class="link link--black">Находим качественный трафик и общий язык с вашими разработчиками</router-link>
      </div>
      <div class="one-cell one-cell--3"></div>
    </div>
  </div>
</template>

<script>
let sourceIndexs = {
  'index': 0,
  'media': 1,
  'target': 2,
  'seo': 3,
  'analitycs': 4,
  'price-lists': 5,
  'cpa': 6,
  'mobile-ads': 7
}
let source = {
  'index': 'Основной фокус контекстной рекламы – привлечение лидов и увеличение продаж.Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Собственная команда разработки создает роботов под разные задачи клиента, постоянно развивает инструментарий и тестирует новые технологии, изучает аудиторию с разных сторон.',
  'media': 'Контекстная реклама не влияет на знание и лояльность, как это делает медийная. Фокус контекста – лиды и продажи. Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий изучает аудиторию с разных сторон.',
  'target': 'Контекстная реклама, несмотря на большой трафик соцсетей, пока остаётся более эффективным инструментом привлечения лидов и увеличения продаж. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Собственная команда разработки создает роботов под разные задачи клиента, тестирует новые технологии и изобретает новые решения, изучает аудиторию с разных сторон.',
  'seo': 'Контекстную рекламу и SEO часто используют вместе – для привлечения трафика на сайт. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий изучает аудиторию с разных сторон.',
  'analitycs': 'Контекстная реклама привлекает лидов и увеличивает продажи – аналитика позволяет узнать, как именно. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий изучает аудиторию с разных сторон.',
  'price-lists': 'Контекстную рекламу, как и прайс-площадки, используют для привлечения лидов и увеличения продаж. Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Есть своя команда разработки, которая создает уникальных роботов управления ставками, тестирует новые технологии и изучает аудиторию с разных сторон.',
  'cpa': 'Контекстная реклама, как и CPA-площадки, работают с лидами – но на другом шаге и с платой за клик, а не за целевое действие. Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Есть своя команда разработки создает роботов под разные задачи клиента, постоянно развивает инструментарий и тестирует новые технологии, изучает аудиторию с разных сторон.',
  'mobile-ads': 'Контекстная реклама привлекает лиды из числа мобильных и десктопных пользователей интернета. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Есть своя команда разработки, которая создает уникальных роботов управления ставками, тестирует новые технологии и изучает аудиторию с разных сторон.'
}

let contextSource = [
  {
    link: '/target',
    title: 'Таргетированная реклама в социальных сетях',
    text: 'Находим нужную аудиторию и работаем с ней',
    linkTitle: 'mgcom.ru/target'
  },
  {
    link: '/media',
    title: 'Медийная реклама',
    text: 'Баннеры на релевантных площадках, программатик',
    linkTitle: 'mgcom.ru/media'
  },
  {
    link: '/analitycs',
    title: 'Веб-аналитика',
    text: 'Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика',
    linkTitle: 'mgcom.ru/analitycs'
  },
  {
    link: '/seo',
    title: 'SEO',
    text: 'Находим качественный трафик и общий язык с вашими разработчиками',
    linkTitle: 'mgcom.ru/seo'
  },
  {
    link: '/cpa',
    title: 'CPA',
    text: 'Большая база партнеров, многоступенчатая система защиты, арбитраж, мотивация веб-мастеров',
    linkTitle: 'mgcom.ru/cpa'
  },
  {
    link: '/mobile-ads',
    title: 'Мобильная реклама',
    text: 'Приводим пользователей мобильных устройств',
    linkTitle: 'mgcom.ru/mobile'
  },
  {
    link: '/price-lists',
    title: 'Прайс-площадки',
    text: 'Разработка уникального робота под задачу. Большой опыт с e-commerce и девелоперами',
    linkTitle: 'mgcom.ru/price'
  }
]

export default {
  name: 'Contextus',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      step: (sourceIndexs[fromRouteName.name || 'index'] || sourceIndexs['index']) + 1,
      leftBanners: [
        contextSource[0],
        contextSource[1],
        contextSource[2],
        contextSource[3],
        contextSource[4],
        contextSource[5],
        contextSource[6],
        contextSource[0]
      ],
      rightBanners: [
        contextSource[2],
        contextSource[3],
        contextSource[4],
        contextSource[5],
        contextSource[6],
        contextSource[0],
        contextSource[1],
        contextSource[2]
      ],
      source: [
        source['index'],
        source['media'],
        source['target'],
        source['seo'],
        source['analitycs'],
        source['price-lists'],
        source['cpa'],
        source['mobile-ads']
      ]
    }
  },
  created () {
    this.throttle = this._.throttle(function (deltaY) {
      let nextStep = deltaY > 0 ? 1 : -1
      let currentState = this.step + nextStep

      if (currentState > 8) {
        currentState = 7
      } else if (currentState < 1) {
        currentState = 1
      }

      this.step = currentState
    }, 200, {trailing: false})
  },
  methods: {
    scrollHandler (e) {
      if ((e.deltaY > 0 && this.step === 8) || (e.deltaY < 0 && this.step === 1)) {
        return
      }

      e = e || window.event
      if (e.preventDefault) e.preventDefault()
      e.returnValue = false

      this.throttle(e.deltaY)
    }
  }
}
</script>

<style lang="sass" scoped>
  .one-text
    opacity: 0
    width: 100%
    overflow: hidden
    pointer-events: none
    position: absolute
    transform: translateX(3rem)
    transition: opacity 405ms linear, transform 405ms linear

  .one-advert
    opacity: 0
    width: 100%
    pointer-events: none
    position: absolute
    transform: translateY(5rem)
    transition: opacity 540ms linear, transform 540ms linear

  @for $i from 1 through 8
    .step-#{$i} .one-text-#{$i - 1}
      opacity: 1
      transform: translateX(0)
      position: relative
      pointer-events: auto
      transition-delay: 270ms

    .step-#{$i} .one-text-#{$i}
      top: 0
      transform: translateX(-3rem)

    .step-#{$i} .one-advert-#{$i - 1}
      opacity: 1
      transform: translateY(0)
      pointer-events: auto
      transition-delay: 405ms

    .step-#{$i} .one-advert-#{$i}
      transform: translateY(-5rem)

  .wrapper
    flex-grow: 1
    position: relative
    padding-bottom: 4rem
    display: flex
    flex-flow: column nowrap
    justify-content: space-between

  .one-row
    display: flex
    flex-flow: row nowrap
    justify-content: space-between

    &--central
      flex-grow: 1

  .one-cell
    position: relative

    &--1,
    &--3
      flex: 0 0 15%
      margin: 2rem 0

    &--2
      flex: 1 0
      margin: 2rem 8rem

  .text
    line-height: 3.8rem
    font-size: 2.9rem

  .link
    color: #1e0cdb
    font-size: 1.8rem
    line-height: 2.7rem

    &--gray
      color: #9b9fa0

    &--black
      color: #000

  @keyframes heightAnimation
    0%
      animation-timing-function: ease-in
      height: 0px
    100%
      animation-timing-function: ease-in
      height: 100%

</style>
