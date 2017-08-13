<template>
    <div class="text">
        <div v-if="fromPage === 'media'">
            CPA и медийная реклама работают на разный результат – последняя влияет на имидж и лояльность.
            CPA же, как и <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link> — на продажи.
            У агентства большая база CPA-партнеров, собственный арбитраж и система защиты от фрода в несколько этапов.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и сразу, на десктопе и
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">мобильном</router-link>.
        </div>
        <div v-else-if="fromPage === 'price-lists'">
            Как <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            CPA – инструмент работы с продажами. У агентства большая база CPA-партнеров,
            собственный арбитраж и система защиты от фрода в несколько этапов, а также собственная команда
            <router-link to="/analitycs" class="link" data-cost="Р0,22">аналитиков</router-link>.
            Для имиджа и лояльности или трафика на сайт инструмент не подходит. Для таких задач стоит использовать
            <router-link to="/media" class="link" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">платформах</router-link> сразу.
        </div>
        <div v-else-if="fromPage === 'seo'">
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода в несколько этапов.
            Как и <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. Для трафика на сайт лучше использовать
            <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>,
            для имиджа и лояльности – <router-link to="/media" class="link" data-cost="Р2,61">медийную рекламу</router-link>.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании стоит сразу во всех каналах и
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">платформах</router-link>.
        </div>
        <div v-else-if="fromPage === 'target'">
            Как <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            CPA – инструмент работы с продажами. У агентства большая база CPA-партнеров, собственный арбитраж и
            система защиты от фрода в несколько этапов, а также собственная команда
            <router-link to="/analitycs" class="link" data-cost="Р0,22">аналитиков</router-link>.
            Для имиджа и лояльности или трафика на сайт инструмент не подходит. Для таких задач стоит использовать
            для имиджа и лояльности – <router-link to="/media" class="link" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">платформах</router-link>
            сразу.
        </div>
        <div v-else-if="fromPage === 'contextus'">
            Как <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            CPA – инструмент работы с продажами. У агентства большая база CPA-партнеров, собственный арбитраж и система защиты от фрода в несколько этапов,
            а также собственная команда <router-link to="/analitycs" class="link" data-cost="Р0,22">аналитиков</router-link>.
            Для имиджа и лояльности или трафика на сайт инструмент не подходит. Для таких задач стоит использовать
            <router-link to="/media" class="link" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">платформах</router-link>
        </div>
        <div v-else-if="fromPage === 'mobile-ads'">
            CPA вряд ли подойдёт для привлечения мобильной аудитории – несмотря на долю,люди пока что чаще покупают с десктопа.
            Как <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. У агентства большая база CPA-партнеров, собственный арбитраж и система защиты от фрода в несколько этапов.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании стоит сразу во всех каналах, на десктопе и в
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">мобильном</router-link>.
        </div>
        <div v-else-if="fromPage === 'analitycs'">
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода в несколько этапов.
            Как <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании стоит сразу во всех каналах, на десктопе и в
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">мобильном</router-link>.
            Если же нужно повысить знание или лояльность, используют
            <router-link to="/media" class="link" data-cost="Р2,61">медийную рекламу</router-link>.
            Для трафика на сайт – <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>.
        </div>
        <div v-else>
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода в несколько этапов.
            Как и <router-link to="/price-lists" class="link" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. Для имиджа и лояльности стоит использовать
            <router-link to="/media" class="link" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link" data-cost="Р0,22">Анализировать</router-link>
             комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link" data-cost="Р1,23">платформах</router-link> сразу.
        </div>
    </div>
</template>

<script>
export default {
  name: 'cpa',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      fromPage: fromRouteName.name || 'index'
    }
  }
}
</script>

<style lang="sass" scoped>
    .link
        position: relative
        display: inline
        color: #0202e6

        &::after
            opacity: 0
            z-index: 10
            color: #fff
            margin-left: 1rem
            line-height: 2rem
            font-size: 1.5rem
            border-radius: 5px
            position: absolute
            background: #0202e6
            pointer-events: none
            content: attr(data-cost)
            transition: opacity .3s linear
            padding: .5rem 1rem .1rem .5rem
            box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, .5)

        &:hover::after
            opacity: 1

    .text
        width: 54%
        line-height: 1.5
        font-size: 2.9rem
        align-self: center
        padding-bottom: 3%
</style>
