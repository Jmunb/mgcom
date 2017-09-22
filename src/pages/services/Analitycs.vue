<template>
    <div class="page-content analytics-layout">
        MGCom решает любые задачи веб-аналитики.
        Анализируем каналы и источники мультиканально, пост-клик и пост-вью конверсии.
        Готовим наглядные отчёты. Большой опыт настройки колл-трекинга (K50, CoMagic, Call touch)
        и работы с платформами A/B-тестирования и персонализации сайтов. Сертифицированы Яндексом и Google.
        Также умеем
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
import getDummyData from '../../heatMapDummyData'

export default {
  name: 'hello',
  data () {
    return {
      heatmapInstance: null,
      heatmap: null
    }
  },
  mounted () {
    this.heatmap = document.querySelector('.app')

    this.heatmapInstance = window.h337.create({
      container: this.heatmap,
      radius: 60,
      blur: 1,
      gradient: {
        '.75': '#0A0AE2',
        '.97': '#FF00AF',
        '.98': '#FF00AF',
        '1': '#FD001F'
      }
    })

    this.heatmapInstance.setData({
      max: 10,
      min: 0,
      data: []
    })

    if (window.innerWidth > 1023 || !window.Touch) {
      this.heatmap.onmousemove = (ev) => {
        this.heatmapInstance.addData({
          x: ev.layerX,
          y: ev.layerY,
          radius: 60,
          value: 3
        })
      }
    } else {
      this.heatmapInstance.setData(getDummyData()[0])
      this.heatmap.ontouchmove = (ev) => {
        const touches = ev.touches

        this.heatmapInstance.addData({
          x: touches[0].pageX,
          y: touches[0].pageY,
          radius: 40,
          value: 6
        })
      }
    }
  },
  beforeDestroy () {
    this.heatmap.onmousemove = function () {}
    this.heatmap.ontouchmove = function () {}
    this.heatmapInstance._renderer.canvas.remove()
    this.heatmapInstance = null
  }
}
</script>

<style lang="sass">
    .heatmap-canvas
       // z-index: -1

    .app--route-analitycs
        .logo__first-letter,
        .logo__last-letter
            fill: #fff !important

    .app--route-analitycs
        color: #fff
        background: rgba(0, 0, 0, .85)

        a
            color: #fff

</style>
<style lang="sass" scoped>
</style>
