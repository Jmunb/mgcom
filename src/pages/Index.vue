<template>
    <div class="text">
        MGCom занимается перфоманс-маркетингом крупного и среднего бизнеса:
        <router-link to="/contextus" class="link">контекстная</router-link> и
        <router-link to="/media" class="link">медийная реклама</router-link>,
        <router-link to="/target" class="link">таргетинг в соцсетях</router-link>,
        занимается <router-link to="/cpa" class="link">CPA</router-link> и
        <router-link to="/price-lists" class="link">прайс-площадками</router-link>,
        <router-link to="/analitycs" class="link">веб-аналитикой</router-link>,
        <router-link to="/seo" class="link">SEO</router-link>,
        и по очереди и одновременно.<br><br>
        Выполняем и задачи полного цикла, и отдельные проекты.
    </div>
</template>

<script>
export default {
  name: 'Index'
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
