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
    <div class="one-row">
      <div class="one-cell one-cell--1">
        <router-link to="/target" class="link">Таргетинг рекламы в соцсетях</router-link><br>
        <router-link to="/target" class="link link--gray">mgcom.ru/target</router-link><br>
        <router-link to="/target" class="link link--black">Находим нужную аудиторию и работаем с ней</router-link>
      </div>
      <div class="one-cell text one-cell--2">{{text}}</div>
      <div class="one-cell one-cell--3">
        <router-link to="/analitycs" class="link">Веб-аналитика</router-link><br>
        <router-link to="/analitycs" class="link link--gray">mgcom.ru/analitycs</router-link><br>
        <router-link to="/analitycs" class="link link--black">Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика</router-link>
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

  .one-cell
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

</style>
