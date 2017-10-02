<template>
  <div class="page-content contextus">
    <div class="banner banner--top">
      <router-link to="/renovation" class="banner__title">Медийная реклама</router-link>
      <router-link to="/renovation" class="banner__link">mgcom.ru/media</router-link>
      <router-link to="/renovation" class="banner__text">
        Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика
      </router-link>
    </div>
    <div class="banner banner--bottom">
      <router-link to="/seo" class="banner__title">SEO</router-link>
      <router-link to="/seo" class="banner__link">mgcom.ru/seo</router-link>
      <router-link to="/seo" class="banner__text">
        Большая база партнеров, многоступенчатая система защиты, арбитраж, мотивация веб-мастеров
      </router-link>
    </div>
    <div class="right-banners-wrapper">
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
        <router-link to="/target" class="banner__title">Paid Social </router-link>
        <router-link to="/target" class="banner__link">mgcom.ru/ target</router-link>
        <router-link to="/target" class="banner__text">
          Большая база партнеров, многоступенчатая система
          защиты, арбитраж, мотивация веб-мастеров
        </router-link>
      </div>
    </div>
    {{text}}
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
    console.log(lastTransition)
    let fromRouteName = (lastTransition || {}).from || {}
    console.log(fromRouteName)

    return {
      text: source[fromRouteName.name || 'index'] || source['index']
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/styles/mixins"

  $one_row: 100% / 24

  .contextus
    @include noDesktop
      display: flex
      flex-flow: column nowrap
      justify-content: flex-start



  .right-banners-wrapper
    position: relative

    @include noDesktop
      order: 2
      margin-top: 5rem

  .banner
    font-size: 1.3rem
    line-height: 2.2rem

    &--bottom
      @include noDesktop
        margin-bottom: 5rem !important

    &--right-2
      @include noDesktop
        margin-bottom: 0 !important


    @include noDesktop
      margin-bottom: 4rem

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
        width: $one_row * 3
        position: absolute

        &-1
          left: $one_row * 26

        &-2
          left: $one_row * 31

    &__title,
    &__link,
    &__text
      display: block
      letter-spacing: 0

    &__title
      color: #2A30E3

    &__link
      color: #A1A6A8

    &__text
      color: #000000

</style>
