<template>
    <div class="heatmap">
        Эффект, симулирующий тепловую карту будет следовать за курсором пользователя на странице о веб-аналитике. Все пункты традиционно повторяются в новом контексте, но ссылки на этой странице не выделяются цветом.
        <router-link to="/contextus" class="link">контекстную рекламу</router-link>,
        <router-link to="/price-lists" class="link">таргетированную рекламу</router-link>,
        <router-link to="/social-networks" class="link">в соцсетях</router-link>,
        <router-link to="/seo" class="link">SEO</router-link>,
        <router-link to="/cpa" class="link">CPA</router-link>,
        <router-link to="/heat-map" class="link">веб-аналитику</router-link>,
        <router-link to="/display-ads" class="link">медийную рекламу</router-link>,
        <router-link to="/mobilr-ads" class="link">рекламу на мобильных устройствах</router-link>
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
        width: 54%
        line-height: 1.5
        font-size: 2.9rem
        align-self: center
        padding-bottom: 3%
</style>
