<template>
    <div class="text">
        На главной странице будет расположен короткий абзац текста,
        в свободной форме перечисляющий то, чем занимается компания:
        <router-link to="/contextus" class="link">контекстную рекламу</router-link>,
        <router-link to="/price-lists" class="link">таргетированную рекламу</router-link>,
        <router-link to="/social-networks" class="link">в соцсетях</router-link>,
        <router-link to="/seo" class="link">SEO</router-link>,
        <router-link to="/cpa" class="link">CPA</router-link>,
        <router-link to="/heat-map" class="link">веб-аналитику</router-link>,
        <router-link to="/display-ads" class="link">медийную рекламу</router-link>,
        <router-link to="/mobilr-ads" class="link">рекламу на мобильных устройствах</router-link>,
        и все остальные необходимые разделы.
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
