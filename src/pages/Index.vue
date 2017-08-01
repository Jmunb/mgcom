<template>
    <div class="text">
        MGCom занимается перфоманс-маркетингом для крупного и среднего бизнеса:
        <router-link to="/contextus" class="link">контекстная</router-link> и
        <router-link to="/media" class="link">медийная реклама</router-link>,
        <router-link to="/target" class="link">таргетированная реклама в социальных сетях</router-link>,
        <router-link to="/cpa" class="link">CPA</router-link> и
        <router-link to="/price-lists" class="link">прайс-площадки</router-link>,
        <router-link to="/seo" class="link">SEO</router-link> и
        <router-link to="/analitycs" class="link">веб-аналитика</router-link>,
        <router-link to="/mobile-ads" class="link">мобильная реклама</router-link>.
        <br><br>
        Умеем работать и с масштабными проектами и digital-стратегиями, и с отдельными задачами.
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
        font-size: 2.9rem
        align-self: center
        padding-bottom: 3%
        line-height: 3.8rem
</style>
