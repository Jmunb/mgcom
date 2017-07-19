<template>
    <div class="heatmap">
        MGCom решает любые задачи веб-аналитики.
        Анализируем каналы и источники мультиканально, пост-клик и пост-вью конверсии.
        Готовим наглядные отчёты. Большой опыт настройки колл-трекинга (K50, CoMagic, Call touch)
        и работы с платформами A/B-тестирования и персонализации сайтов. Сертифицированы Яндексом и Google.
        <br><br>
        Также умеем контекст, SEO, медийку, таргетинг в соцсетях, прайс-площадки, аналитику и мобильную реклама.
        <router-link to="/contextus" class="link">контекст</router-link>,
        <router-link to="/seo" class="link">SEO</router-link>,
        <router-link to="/media" class="link">медийку</router-link>,
        <router-link to="/target" class="link">таргетинг в соцсетях</router-link>,
        <router-link to="/price-lists" class="link">прайс-площадки</router-link>,
        <router-link to="/analitycs" class="link">аналитику</router-link> и
        <router-link to="/mobile-ads" class="link">мобильную рекламу</router-link>.
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      heatmapInstance: null,
      heatmap: null
    }
  },
  mounted () {
    this.heatmap = document.querySelector('body')
    this.heatmapInstance = window.h337.create({
      container: this.heatmap,
      radius: 60,
      blur: 0.8,
      gradient: {
        '.5': '#0000ad',
        '.8': '#fec200',
        '.95': '#fe0000'
      }
    })
    this.heatmap.onmousemove = (ev) => {
      this.heatmapInstance.addData({
        x: ev.layerX,
        y: ev.layerY,
        value: 1
      })
    }
  },
  beforeDestroy () {
    this.heatmap.onmousemove = function () {}
    this.heatmapInstance._renderer.canvas.remove()
    this.heatmapInstance = null
  }
}
</script>

<style lang="sass" scoped>
    .link
        color: #0202e6
        text-shadow: 0 0 1px #fdfdff

    .heatmap
        width: 70%
        line-height: 1.5
        font-size: 2.9rem
        align-self: center
        padding-bottom: 3%
</style>
