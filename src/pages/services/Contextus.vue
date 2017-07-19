<template>
  <div class="wrapper">
    <table>
      <tr>
        <td></td>
        <td class="middle-cell">
          <router-link to="/media" class="link">Медийная реклама</router-link><br>
          <router-link to="/media" class="link link--gray">mgcom.ru/media</router-link><br>
          <router-link to="/media" class="link">Баннеры на релевантных площадках, программатик</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <router-link to="/target" class="link">Таргетинг рекламы в соцсетях</router-link><br>
          <router-link to="/target" class="link link--gray">mgcom.ru/target</router-link><br>
          <router-link to="/target" class="link">Находим нужную аудиторию и работаем с ней</router-link>
        </td>
        <td class="middle-cell text">{{text}}</td>
        <td>
          <router-link to="/analitycs" class="link">Веб-аналитика</router-link><br>
          <router-link to="/analitycs" class="link link--gray">mgcom.ru/analitycs</router-link><br>
          <router-link to="/analitycs" class="link">Организуем колл-трекинг, проводим а/b-тесты, занимаемся мультиканальной аналитикой, готовим наглядные отчёты</router-link>
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="middle-cell">
          <router-link to="/seo" class="link">SEO</router-link><br>
          <router-link to="/seo" class="link link--gray">mgcom.ru/seo</router-link><br>
          <router-link to="/seo" class="link">Находим качественный трафик и общий язык с вашими разработчиками</router-link>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
let source = {
  'index': 'Контекстной рекламой MGCom занимается с 2006 года: собственная команда разработки создает роботов под разные задачи клиента, постоянно развивает инструментарий и тестирует новые технологии; работа с разными сферами бизнеса позволяет изучать аудиторию с разных сторон.',
  'media': 'Как и медийной, контекстной рекламой MGCom занимается с 2006 года. Внутренняя команда разработки создает роботов, которые выполняют задачи клиента, и тестирует новые технологии. Инструментарий постоянно развивается, а работа с разными сферами бизнеса позволяют находить интересные решения.',
  'target': 'Несмотря на огромный рекламный трафик соцсетей, контекст не сдает позиций. Контекстной рекламой MGCom занимается с 2006 года: собственная команда разработки создает роботов для контекста и не только, постоянно тестирует новые технологии. Благодаря клиентам из разных сфер, MGCom изучает аудиторию с разных сторон.',
  'seo': 'Контекстную рекламу и SEO часто используют вместе – и тем и другим MGCom занимается с 2006 года: собственная команда разработки создает роботов для контекста и не только, постоянно тестирует новые технологии и изучает аудиторию с разных сторон.',
  'analitycs': 'Агентство MGCom в контексте с 2006 года. Своя команда разработки создает роботов под разные задачи, тестирует новые технологии и постоянно  развивает инструментарий. Работа с разными сферами бизнеса позволяет изучить аудиторию с разных сторон.',
  'price-lists': 'Как и прайс-площадки, для продвижения можно использовать контекстную рекламу. MGCom занимается контекстной рекламой с 2006 года. В штате есть команда разработки, которая создает для клиента уникальных роботов для управления ставками, тестирует новые технологии и развивает инструменты. Агентство работает с разными сферами бизнеса и видит рынки с нескольких сторон.',
  'cpa': 'Агентство MGCom занимается контекстной рекламой с 2006 года (в отличие от CPA-площадок, здесь рекламодатель платит за клик). Собственная команда разработки создает роботов под разные задачи клиента, тестирует новые технологии и изобретает новые решения. Благодаря клиентам из разных сфер, MGCom изучает аудиторию с разных сторон.',
  'mobile-ads': 'MGCom занимается контекстной рекламой в большом и мобильном вебе. Собственная команда разработки создает роботов под разные задачи клиента, тестирует новые технологии и изобретает новые решения. Агентство работает с разными сферами бизнеса и видит рынки с нескольких сторон.'
}

export default {
  name: 'Contextus',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      text: source[fromRouteName.name || 'index']
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    flex-grow: 1
    overflow: hidden
    position: relative
    padding-bottom: 4rem

  .text
    line-height: 1.5
    font-size: 2.9rem
    max-width: 52%

  .link
    color: #1e0cdb
    font-size: 1.8rem
    line-height: 1.5

    &--gray
      color: #9b9fa0

  .middle-cell
    padding: 2rem 8rem

  td
    padding-top: 2rem
    vertical-align: top
</style>
