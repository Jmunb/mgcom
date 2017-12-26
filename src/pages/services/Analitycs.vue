<template>
    <div class="page-content analytics-layout">
        Агентство помогает крупному и&nbsp;среднему
        бизнесу привлекать клиентов и&nbsp;проводить их
        по&nbsp;воронке с&nbsp;помощью инструментов перфоманс-маркетинга:
        <router-link to="/contextus" class="link">paid search</router-link>
        и&nbsp;<router-link to="/target" class="link">paid social</router-link>,
        <router-link to="/media" class="link">медийной рекламы и programmatic</router-link>,
        <router-link to="/cpa" class="link">CPA</router-link>
        и&nbsp;<router-link to="/price-lists" class="link">маркетплейсов</router-link>,
        <router-link to="/analitycs" class="link">аналитику</router-link>
        и&nbsp;<router-link to="/seo" class="link">SEO</router-link>
        на&nbsp;десктопе и в&nbsp;мобильном. Умеем работать как с&nbsp;масштабными проектами
        и&nbsp;стратегиями, так и с&nbsp;отдельными задачами.
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
       z-index: -1

    .analytics-layout
        color: #F8F8F9

    .app--route-analitycs
        .logo__first-letter,
        .logo__last-letter
            fill: #fff !important

    .app--route-analitycs
        color: #fff
        background: rgba(0, 0, 0, .85)

        a
            color: #fff
            text-decoration: underline

</style>
<style lang="sass" scoped>
</style>
