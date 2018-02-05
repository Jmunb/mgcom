<template>
    <div class="new-page-content index">
        Агентство помогает крупному и&nbsp;среднему бизнесу&nbsp;привлекать клиентов и&nbsp;проводить их по&nbsp;воронке с&nbsp;помощью инструментов перфоманс-маркетинга:
        <router-link to="/contextus" class="link">paid search</router-link>
        и&nbsp;<router-link to="/target" class="link">paid social</router-link>,
        <router-link to="/media" class="link">медийной рекламы и&nbsp;programmatic</router-link>,
        <router-link to="/price-lists" class="link">маркетплейсов</router-link> и&nbsp;<router-link to="/cpa" class="link">CPA</router-link>,
        <router-link to="/seo" class="link">SEO</router-link> и&nbsp;<router-link to="/analitycs" class="link">аналитики</router-link>
        на&nbsp;десктопе и&nbsp;<router-link to="/mobile-ads" class="link">в&nbsp;мобильном</router-link>.
        Умеем работать как с&nbsp;масштабными проектами и&nbsp;стратегиями, так и&nbsp;с&nbsp;отдельными задачами.
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="sass" scoped>
    @import "../assets/styles/mixins"
    $one_column: 100% / 36

    .new-page-content
        font-size: 2.6rem
        letter-spacing: 0
        line-height: 3.71429rem

        @include desktop
            padding-left: $one_column
            width: $one_column * 24
            align-self: center

        @include noDesktop
            width: 75%

        @include bigDesktop
            font-size: 3.6rem
            line-height: 4.8rem

        @include mobile
            font-size: 1.8rem
            line-height: 2.6rem

    .index
        @include noMobile
            margin: 10rem 0

</style>
