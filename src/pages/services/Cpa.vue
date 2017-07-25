<template>
    <div class="text">
        У MGCom большая база CPA-партнеров и свой арбитраж,
        агентство регулярно проверяет площадки и использует двойную систему защиты от фрода.
        Среди клиентов в основном крупные и средние интернет-магазины и девелоперы.
        <br>
        Другие услуги:
        <router-link to="/contextus" class="link" data-cost="Р0,13">контекст</router-link>,
        <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>,
        <router-link to="/media" class="link" data-cost="Р2,61">медийка</router-link>,
        <router-link to="/target" class="link" data-cost="Р1,12">таргетинг в соцсетях</router-link>,
        <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
        <router-link to="/analitycs" class="link" data-cost="Р0,22">аналитика</router-link>,
        <router-link to="/mobile-ads" class="link" data-cost="Р1,23">мобильная реклама</router-link>.
    </div>
</template>

<script>
export default {
  name: 'cpa'
}
</script>

<style lang="sass" scoped>
    .link
        position: relative
        display: inline-block
        color: #0202e6

        &::before
            opacity: 0
            pointer-events: none
            transition: opacity .3s linear
            color: #fff
            font-size: 1.5rem
            line-height: 2rem
            background: #0202e6
            border-radius: 5px
            padding: .5rem 1rem .1rem .5rem
            position: absolute
            left: 105%
            z-index: 10
            content: attr(data-cost)

        &:hover::before
            opacity: 1

    .text
        width: 54%
        line-height: 1.5
        font-size: 2.9rem
        align-self: center
        padding-bottom: 3%
</style>
