<template>
    <div class="hello">
        <div class="cloud">
            <router-link to="/contextus" class="link link__contextus"><span>Контекстная реклама</span></router-link>
            <router-link to="/price-lists" class="link link__price-list"><span>Таргетированная реклама</span></router-link>
            <router-link to="/social-networks" class="link link__social-networks"><span>Реклама в социальных сетях</span></router-link>
            <router-link to="/seo" class="link link__seo"><span>SEO</span></router-link>
            <router-link to="/cpa" class="link link__cpa"><span>CPA</span></router-link>
            <router-link to="/heat-map" class="link link__heat-map"><span>Веб аналитика</span></router-link>
            <router-link to="/display-ads" class="link link__display-ads"><span>Медийная реклама</span></router-link>
            <router-link to="/mobilr-ads" class="link link__mobilr-ads"><span>Реклама на мобильных устройствах</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // window.TagCanvas.Start('tagcanvas', 'iconTags')
  }
}
</script>

<style lang="sass" scoped>
    .hello
        flex-grow: 1
        overflow: hidden
        position: relative

    .link
        top: 50%
        left: 50%
        position: absolute
        font-size: 2.9rem
        color: #ffffff
        padding: 1rem
        transform: translate(-50%, -50%)
        display: flex
        flex-flow: column nowrap
        justify-content: flex-end
        text-shadow: 0 0 1px #000

        &:hover
            z-index: 10

        &__contextus
            z-index: 7
            width: 23.3rem
            height: 41.4rem
            margin: -5rem 0 0 -23rem
            background: url(../../assets/images/displayAds/1.png) no-repeat center center / contain

        &__price-list
            z-index: 1
            width: 23.5rem
            height: 41.8rem
            margin-top: -8rem
            background: url(../../assets/images/displayAds/2.png) no-repeat center center / contain

        &__social-networks
            z-index: 7
            width: 20.3rem
            height: 36rem
            margin-left: 40rem
            background: url(../../assets/images/displayAds/3.png) no-repeat center center / contain

        &__seo
            z-index: 2
            width: 28.9rem
            height: 51.3rem
            margin-top: 3rem
            background: url(../../assets/images/displayAds/4.png) no-repeat center center / contain

        &__cpa
            z-index: 3
            width: 26.1rem
            height: 46.4rem
            margin: 2rem 0 0 -20rem
            background: url(../../assets/images/displayAds/5.png) no-repeat center center / contain

        &__heat-map
            z-index: 5
            width: 25.9rem
            height: 38.9rem
            margin: -6rem 0 0 14rem
            background: url(../../assets/images/displayAds/6.png) no-repeat center center / contain

        &__display-ads
            z-index: 6
            width: 24.4rem
            height: 43.4rem
            margin-left: 26rem
            background: url(../../assets/images/displayAds/7.png) no-repeat center center / contain

        &__mobilr-ads
            z-index: 6
            width: 30.4rem
            height: 45.6rem
            margin-left: -26rem
            background: url(../../assets/images/displayAds/8.png) no-repeat center center / contain
</style>
