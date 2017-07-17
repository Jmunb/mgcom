<template>
  <div class="wrapper">
    <table>
      <tr>
        <td></td>
        <td class="middle-cell">
          <router-link to="/contextus" class="link">Здесь мог бы быть баннер</router-link><br>
          <router-link to="/contextus" class="link link--gray">www.mgcom.ru/seo</router-link><br>
          <router-link to="/contextus" class="link">Но вместо этого здесь контекстное объявление страницы медийной рекламы, где такой баннер можно заказать.</router-link>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <router-link to="/social-networks" class="link">Таргетиро-ванная реклама в соцетях?</router-link><br>
          <router-link to="/social-networks" class="link link--gray">www.mgcom.ru/seo</router-link><br>
          <router-link to="/social-networks" class="link">Легко, эта ссылка будет одной из ближних.</router-link>
        </td>
        <td class="middle-cell text">Раздел контекстной рекламы сохранит аскетичный вид главной страницы и будет оперировать только текстом. Но в этом случае все ссылки, они же пункты меню, уйдут из центрального блока и распределятся по «контекстынм» выносам на всех направлениях.</td>
        <td>
          <router-link to="/heat-map" class="link">Веб-аналитика</router-link><br>
          <router-link to="/heat-map" class="link link--gray">www.mgcom.ru/seo</router-link><br>
          <router-link to="/heat-map" class="link">Тепловые карты и другие развлече-ния. Еще немного текста, чтобы протестировать высоту колонки.</router-link>
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="middle-cell">
          <router-link to="/seo" class="link">SEO</router-link><br>
          <router-link to="/seo" class="link link--gray">www.mgcom.ru/seo</router-link><br>
          <router-link to="/seo" class="link">Наверняка в первой строке. Каждое «направление» содержит все пункты и скроллится до упора.</router-link>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Contextus'
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
