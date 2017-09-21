<template>
    <div class="page-content">
        <div v-if="fromPage === 'media'">
            CPA и медийная реклама работают на разный результат – последняя влияет на имидж и лояльность.
            CPA же, как и <router-link to="/price-lists" class="link link-price-list" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link> — на продажи.
            У агентства большая база CPA-партнеров, собственный арбитраж и система защиты от фрода в несколько этапов.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и сразу, на десктопе и
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">мобильном</router-link>.
        </div>
        <div v-else-if="fromPage === 'price-lists'">
            Как <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            CPA – инструмент работы с продажами. У агентства большая база CPA-партнеров,
            собственный арбитраж и система защиты от фрода в несколько этапов, а также собственная команда
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">аналитиков</router-link>.
            Для имиджа и лояльности или трафика на сайт инструмент не подходит. Для таких задач стоит использовать
            <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">платформах</router-link> сразу.
        </div>
        <div v-else-if="fromPage === 'seo'">
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода в несколько этапов.
            Как и <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. Для трафика на сайт лучше использовать
            <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>,
            для имиджа и лояльности – <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу</router-link>.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании стоит сразу во всех каналах и
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">платформах</router-link>.
        </div>
        <div v-else-if="fromPage === 'target'">
            Как <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            CPA – инструмент работы с продажами. У агентства большая база CPA-партнеров, собственный арбитраж и
            система защиты от фрода в несколько этапов, а также собственная команда
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">аналитиков</router-link>.
            Для имиджа и лояльности или трафика на сайт инструмент не подходит. Для таких задач стоит использовать
            для имиджа и лояльности – <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">платформах</router-link>
            сразу.
        </div>
        <div v-else-if="fromPage === 'contextus'">
            Как <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            CPA – инструмент работы с продажами. У агентства большая база CPA-партнеров, собственный арбитраж и система защиты от фрода в несколько этапов,
            а также собственная команда <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">аналитиков</router-link>.
            Для имиджа и лояльности или трафика на сайт инструмент не подходит. Для таких задач стоит использовать
            <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">платформах</router-link>
        </div>
        <div v-else-if="fromPage === 'mobile-ads'">
            CPA вряд ли подойдёт для привлечения мобильной аудитории – несмотря на долю,люди пока что чаще покупают с десктопа.
            Как <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. У агентства большая база CPA-партнеров, собственный арбитраж и система защиты от фрода в несколько этапов.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании стоит сразу во всех каналах, на десктопе и в
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">мобильном</router-link>.
        </div>
        <div v-else-if="fromPage === 'analitycs'">
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода в несколько этапов.
            Как <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании стоит сразу во всех каналах, на десктопе и в
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">мобильном</router-link>.
            Если же нужно повысить знание или лояльность, используют
            <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу</router-link>.
            Для трафика на сайт – <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>.
        </div>
        <div v-else>
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода
            в несколько этапов. Как и
            <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">маркетплейсы</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">paid search</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">paid social</router-link>,
            этот инструмент работает на продажи. Для лояльности стоит использовать
            <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу</router-link>,
            для трафика на сайт —
            <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
            комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">платформах</router-link>
            сразу.

            <!--
            У агентства большая база CPA-партнеров, собственный арбитраж и защита от фрода в несколько этапов.
            Как и <router-link to="/price-lists" class="link link-price-lists" data-cost="Р5,67">прайс-площадки</router-link>,
            <router-link to="/contextus" class="link link-contextus" data-cost="Р0,13">контекстная</router-link> и
            <router-link to="/target" class="link link-target" data-cost="Р1,12">таргетированная реклама в соцсетях</router-link>,
            этот инструмент работает на продажи. Для имиджа и лояльности стоит использовать
            <router-link to="/media" class="link link-media" data-cost="Р2,61">медийную рекламу и программатик</router-link>,
            для трафика на сайт – <router-link to="/seo" class="link link-seo" data-cost="Р1,26">SEO</router-link>.
            <router-link to="/analitycs" class="link link-analitycs" data-cost="Р0,22">Анализировать</router-link>
             комплексные кампании лучше тоже комплексно и на всех
            <router-link to="/mobile-ads" class="link link-mobile-ads" data-cost="Р1,23">платформах</router-link> сразу.
            -->
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

<style lang="sass">
    @import "../../assets/styles/mixins"

    .app--route-cpa
        .mobile-logo,
        .footer__link
            &::after
                display: block
                color: #FFFFFF
                content: 'Р0,12'
                letter-spacing: 0
                // padding: 0 1.1rem
                text-align: center
                position: absolute
                background: #2D00E3
                white-space: nowrap
                border-radius: .3rem
                pointer-events: none

                @include noMobile
                    width: 7rem
                    font-size: 1.4rem
                    line-height: 3.4rem

                @include mobile
                    width: 6rem
                    font-size: 1.2rem
                    line-height: 3rem

        .mobile-logo::after
            @include desktop
                right: -1.6rem
                bottom: -4.6rem

            @include tablet
                right: -1.4rem
                bottom: -4.3rem

            @include mobile
                left: -.8rem
                bottom: -3.6rem

        .footer__link
            outline: 0
            position: relative

            &-1::after
                @include desktop
                    bottom: 0
                    left: 100%
                    margin-left: 1.4rem

                @include tablet
                    left: 0
                    top: -6.6rem

                @include mobile
                    left: 104%
                    top: -.4rem

            &-2::after
                @include desktop
                    bottom: 100%
                    right: .8rem
                    margin-bottom: .4rem

                @include tablet
                    left: 2.7rem
                    top: -6.5rem

                @include mobile
                    top: -.5rem
                    right: -7.7rem

            &-3::after
                @include desktop
                    left: 100%
                    top: .2rem
                    margin-left: 1.1rem

                @include tablet
                    left: 3.1rem
                    top: -3.9rem

                @include mobile
                    left: 5.5rem
                    top: -3rem

            &-4::after
                @include tablet
                    left: .2rem
                    top: -6.7rem

                @include mobile
                    left: 4.3rem
                    top: -3.2rem

            &-5::after
                @include tablet
                    top: -6.6rem
                    left: 2.9rem

                @include mobile
                    top: -2.5rem
                    left: 7.4rem

            &-4::after,
            &-5::after
                @include desktop
                    left: 100%
                    top: -.6rem
                    margin-left: 2.8rem


</style>
<style lang="sass" scoped>
    @import "../../assets/styles/mixins"

    .link
        position: relative
        display: inline
        color: #0202e6

        &::after
            opacity: 0
            z-index: 10
            display: block
            color: #FFFFFF
            content: attr(data-cost)
            letter-spacing: 0
            text-align: center
            position: absolute
            background: #2D00E3
            white-space: nowrap
            border-radius: .3rem
            pointer-events: none
            transition: opacity .3s linear

            @include noMobile
                width: 7rem
                font-size: 1.4rem
                line-height: 3.4rem

            @include mobile
                width: 6rem
                font-size: 1.2rem
                line-height: 3rem

        &-price-lists::after
            top: -4.6rem
            left: -4.4rem

        &-contextus::after
            top: 3.1rem
            right: 3.3rem

        &-target::after
            bottom: -2rem
            right: -4.7rem

        &-analitycs::after
            top: -.6rem
            right: -4.2rem

        &-mobile-ads::after
            top: -5.1rem
            left: 9.9rem

        &-media::after
            left: -6.4rem
            top: -4.3rem

        &-seo::after
            top: -.7rem
            right: -8.8rem

        &:hover::after
            opacity: 1
</style>
