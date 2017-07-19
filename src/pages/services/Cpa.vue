<template>
    <div class="text">
        У MGCom большая база CPA-партнеров и свой арбитраж,
        агентство регулярно проверяет площадки и использует двойную систему защиты от фрода.
        Среди клиентов в основном крупный и средний бизнес.
        Другие услуги:
        <router-link to="/contextus" class="link">контекст</router-link>,
        <router-link to="/seo" class="link">SEO</router-link>,
        <router-link to="/media" class="link">медийка</router-link>,
        <router-link to="/target" class="link">таргетинг в соцсетях</router-link>,
        <router-link to="/price-lists" class="link">прайс-площадки</router-link>,
        <router-link to="/analitycs" class="link">аналитика</router-link>,
        <router-link to="/mobile-ads" class="link">мобильная реклама</router-link>.
    </div>
</template>

<script>
export default {
  name: 'cpa'
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
