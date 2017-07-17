<template>
    <div class="text">
        Страница о CPA выглядит в точности как и главная.
        Здесь в тексте встречаются те же пункты меню — конечно,
        в другом тексте и в другой последовательности — <router-link to="/contextus" class="link">контекст</router-link>,
        <router-link to="/price-lists" class="link">таргетированная реклама в соцсетях</router-link>,
        <router-link to="/seo" class="link">SEO</router-link>,
        <router-link to="/heat-map" class="link">веб-аналитику</router-link>,
        <router-link to="/display-ads" class="link">медийная реклама</router-link>
        и так далее, но над каждой ссылкой теперь всплывает небольшая плашка с ценой.
        Кроме того, такие же плашки постоянно есть и у других кнопок.
        На главной странице будет расположен короткий абзац текста,
        в свободной форме перечисляющий то, чем занимается компания:
    </div>
</template>

<script>
export default {
  name: 'CPA'
}
</script>

<style lang="sass" scoped>
    .link
        color: #0202e6

    .text
        width: 54%
        line-height: 1.5
        font-size: 2.9rem
        align-self: center
        padding-bottom: 3%
</style>
