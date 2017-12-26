<template>
  <div class="contextus" @wheel="wheelHandler">
    <div class="top-line">
      <div class="banner banner--top">
        <router-link to="/media" class="banner__title">Медийная реклама</router-link>
        <router-link to="/media" class="banner__link">mgcom.ru/media</router-link>
        <router-link to="/media" class="banner__text">
          Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика
        </router-link>
      </div>
    </div>
    <div class="content">
      <div class="content-scroller" v-bind:style="{transform: `translateX(${deltaY * -1}px)`}">
        <div class="text-wrapper">{{text}}</div>
        <div class="banner banner--right banner--right-1">
          <router-link to="/analitycs" class="banner__title">Веб-аналитика</router-link>
          <router-link to="/analitycs" class="banner__link">mgcom.ru/ analitycs</router-link>
          <router-link to="/analitycs" class="banner__text">
            Call&nbsp;tracking,
            А/В-тесты
            и понятные отчёты. Мультика-нальная аналитика
          </router-link>
        </div>
        <div class="banner banner--right banner--right-2">
          <router-link to="/target" class="banner__title">Paid Social</router-link>
          <router-link to="/target" class="banner__link">mgcom.ru/ target</router-link>
          <router-link to="/target" class="banner__text">
            Большая база партнеров, многоступенчатая система
            защиты, арбитраж, мотивация веб-мастеров
          </router-link>
        </div>
        <div class="banner banner--right banner--right-3">
          <router-link to="/target" class="banner__title">Прайс-площадки</router-link>
          <router-link to="/target" class="banner__link">mgcom.ru/ marketplace</router-link>
          <router-link to="/target" class="banner__text">
            Продажи можно повысить за счёт размещения рекламы на Яндекс.Маркете
          </router-link>
        </div>
        <div class="banner banner--right banner--right-4">
          <router-link to="/target" class="banner__title">CPA</router-link>
          <router-link to="/target" class="banner__link">mgcom.ru/ cpa</router-link>
          <router-link to="/target" class="banner__text">
            У MGCom большая база CPA-партнеров и свой арбитраж
          </router-link>
        </div>
        <div class="banner banner--right banner--right-5">
          <router-link to="/target" class="banner__title">Мобильная реклама</router-link>
          <router-link to="/target" class="banner__link">mgcom.ru/ mobile-ads</router-link>
          <router-link to="/target" class="banner__text">
            Приводим пользователей мобильных устройств
          </router-link>
        </div>
      </div>
    </div>
    <div class="bottom-line">
      <div class="banner banner--bottom">
        <router-link to="/seo" class="banner__title">SEO</router-link>
        <router-link to="/seo" class="banner__link">mgcom.ru/seo</router-link>
        <router-link to="/seo" class="banner__text">
          Большая база партнеров, многоступенчатая система защиты, арбитраж, мотивация веб-мастеров
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
let source = {
  'index': 'Контекстную рекламу и SEO часто используют вместе — для привлечения трафика на сайт. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий и изучает аудиторию с разных сторон.',
  'media': 'Контекстная реклама не влияет на знание и лояльность, как это делает медийная. Фокус контекста – лиды и продажи. Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий изучает аудиторию с разных сторон.',
  'target': 'Контекстная реклама, несмотря на большой трафик соцсетей, пока остаётся более эффективным инструментом привлечения лидов и увеличения продаж. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Собственная команда разработки создает роботов под разные задачи клиента, тестирует новые технологии и изобретает новые решения, изучает аудиторию с разных сторон.',
  'seo': 'Контекстную рекламу и SEO часто используют вместе – для привлечения трафика на сайт. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий изучает аудиторию с разных сторон.',
  'analitycs': 'Контекстная реклама привлекает лидов и увеличивает продажи – аналитика позволяет узнать, как именно. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии, совершенствует инструментарий изучает аудиторию с разных сторон.',
  'price-lists': 'Контекстную рекламу, как и прайс-площадки, используют для привлечения лидов и увеличения продаж. Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Есть своя команда разработки, которая создает уникальных роботов управления ставками, тестирует новые технологии и изучает аудиторию с разных сторон.',
  'cpa': 'Контекстная реклама, как и CPA-площадки, работают с лидами – но на другом шаге и с платой за клик, а не за целевое действие. Агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум возможных лидов по заданной цене. Есть своя команда разработки создает роботов под разные задачи клиента, постоянно развивает инструментарий и тестирует новые технологии, изучает аудиторию с разных сторон.',
  'mobile-ads': 'Контекстная реклама привлекает лиды из числа мобильных и десктопных пользователей интернета. Работая с контекстом, агентство снижает СРС и ДРР, увеличивает СR и средний чек, приводит максимум лидов по заданной цене. Есть своя команда разработки, которая создает уникальных роботов управления ставками, тестирует новые технологии и изучает аудиторию с разных сторон.'
}

export default {
  name: 'Contextus',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      deltaY: 0,
      text: source[fromRouteName.name || 'index'] || source['index']
    }
  },
  methods: {
    wheelHandler ($event) {
      if (window.device.desktop()) {
        $event.preventDefault()
        let oneColumn = (window.innerWidth - 130) / 36

        if ($event.deltaY < 0 && this.deltaY <= 0) {
          this.deltaY = 0
        } else if ($event.deltaY < 0 || this.deltaY < oneColumn * 29) {
          this.deltaY += $event.deltaY
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/styles/mixins"

  $one_row: 100% / 24
  $one_column: 100vw / 36

  .text-wrapper
    letter-spacing: 0
    font-size: 2.6rem
    line-height: 3.71429rem
    margin-right: calc( ((100vw - 13rem) / 24) * 2 )

    @include desktop
      padding-left: calc( (100vw - 13rem) / 36)
      flex: 0 0 calc( ((100vw - 13rem) / 36) * 24 )

    @include tablet
      margin-bottom: 3.8rem

    @include mobile
      margin-right: 0
      font-size: 1.8rem
      line-height: 2.6rem
      margin-bottom: 2.1rem

  .content
    @include desktop
      padding: 0 8rem

      &-scroller
        display: flex
        flex-flow: row nowrap
        justify-content: flex-start
        padding-left:  calc( ((100vw - 13rem) / 36) * 6 )
        padding-right: 8rem

    @include mobile
      margin-top: 1.1rem

    @include noDesktop
      order: 2

  .contextus
    display: flex
    flex-flow: column nowrap

    @include desktop
      width: 100vw
      height: 100vh
      padding: 7rem 0 6rem
      margin: -7rem -8rem -6rem
      justify-content: space-between

    @include noDesktop
      width: 75%

  .banner
    font-size: 1.3rem
    line-height: 2.2rem

    @include tablet
      width: 75%
      margin-bottom: 3.8rem

    @include mobile
      display: inline-block
      font-size: 1.2rem
      line-height: 1.6rem
      margin-bottom: 1.7rem
      letter-spacing: 0

    @include desktop
      &--top,
      &--bottom
        position: absolute
        width: calc( ((50% - 8rem) * 14/18) + 8rem)
        left: calc( ((50% - 8rem) *.5) + 8rem)

      &--top
        top: 6.6rem

      &--bottom
        bottom: 5.2rem

      &--right
        flex: 0 0 calc( ((100vw - 13rem) / 24) * 3 )
        margin-right: calc( ((100vw - 13rem) / 24) * 2 )
        width: calc( ((100vw - 13rem) / 24) * 3 )

    @include noDesktop
      &--right-5
        margin-bottom: 0

    &__title,
    &__link,
    &__text
      display: block
      letter-spacing: 0

    &__title
      color: #2A30E3

    &__link
      color: #A1A6A8
      word-spacing: 0

    &__text
      color: #000000

</style>
