<template>
  <div class="marketplaces">
    <div class="slider" v-bind:class="'slider--' + sliderIndex">
      <div class="slider__bg photo" v-bind:class="'photo--' + photoIndex"></div>
      <div class="slider__card slider__card-1 photo--1 photo" v-bind:class="{'slider__card--active': photoIndex===1}" @click="showPhoto(1)"></div>
      <div class="slider__card slider__card-2 photo--2 photo" v-bind:class="{'slider__card--active': photoIndex===2}" @click="showPhoto(2)"></div>
      <div class="slider__card slider__card-3 photo--3 photo" v-bind:class="{'slider__card--active': photoIndex===3}" @click="showPhoto(3)"></div>
    </div>
    <div class="description">
      <div class="title">Реклама на&nbsp;маркет-плейсах</div>
      <div class="text" v-if="fromPage === 'media'">
        В отличие от медийной, реклама на прайс-площадках специализируется на привлечении лидов и увеличении продаж. Разместиться можно на Яндекс.Маркете, Циане, Авито и других площадках из e-commerce и недвижимости. В агентстве создают уникальных роботов под задачу клиента – для управления ставками, обработки и валидации фидов.
      </div>
      <div class="text" v-else-if="fromPage === 'cpa'">
        Как и CPA, реклама на прайс-площадках специализируется на привлечении лидов и увеличении продаж. Агентство размещает рекламу на Яндекс.Маркете, Циане, Авито и других площадках из e-commerce и недвижимости. Команда разработки создает уникальных роботов под задачу клиента.
      </div>
      <div class="text" v-else-if="fromPage === 'seo'">
        Продажи непросто повысить за счёт поисковой оптимизации – лучше применять контекстную или рекламу на прайс-площадках. Агентство размещает рекламу на Яндекс.Маркете, Циане, Авито и других площадках из e-commerce и недвижимости. Команда разработки создает уникальных роботов под задачу клиента.
      </div>
      <div class="text" v-else-if="fromPage === 'target'">
        Прайс-площадки не работают на знание или лояльность, как соцсети, но, как и они, приводятнаходят лидыов и работают на продажи. Разместиться можно на Яндекс.Маркете, Циане, Авито и других площадках из e-commerce и недвижимости.
        В агентстве создают уникальных роботов под задачу клиента – для управления ставками, обработки и валидации.
      </div>
      <div class="text" v-else-if="fromPage === 'contextus'">
        Прайс-площадки помогут привлечь лиды, до которых не добралась контекстная реклама. Разместиться можно на Яндекс.Маркете, Циане, Авито и других площадках из e-commerce и недвижимости.Агентская команда разработки создает уникальных роботов для управления ставками, обработки и валидации.
      </div>
      <div class="text" v-else-if="fromPage === 'mobile-ads'">
        Доля мобильных пользователей уже больше 50%, но покупки пока что чаще делают с десктопа. Агентство размещает рекламу на Яндекс.Маркете, Циане, Авито и других прайс-площадках из e-commerce и недвижимости. Агентская команда разработки создает уникальных роботов для управления ставками, обработки и валидации.
      </div>
      <div class="text" v-else-if="fromPage === 'analitycs'">
        Реклама на Яндекс.Маркете, Циане, Авито и других прайс-площадках привлекает лидов и увеличивает продажи. Агентская команда разработки создает уникальных роботов для управления ставками, обработки и валидации – опытные аналитики следят за результатами их работы.
      </div>
      <div class="text" v-else>
        Продажи можно повысить
        за счёт размещения рекламы
        на Яндекс.Маркете, Циане,
        Авито и других площадках
        из e-commerce
        и недвижимости. В агентстве создают уникальных роботов под задачу клиента —
        для управления ставками, обработки и валидации.
      </div>
      <div class="places">
        <div
                @click="sliderIndex=1"
                v-bind:class="{'one-partner--active ': sliderIndex===1}"
                class="one-partner one-partner-ya"
        ></div>
        <div
                @click="sliderIndex=2"
                v-bind:class="{'one-partner--active ': sliderIndex===2}"
                class="one-partner one-partner-cian"
        ></div>
        <div
                @click="sliderIndex=3"
                v-bind:class="{'one-partner--active ': sliderIndex===3}"
                class="one-partner one-partner-avito"
        ></div>
      </div>
    </div>
    <div class="more">
      <div class="more__title">Пользователи, посмотревшие эту страницу также смотрели:</div>
      <div class="links">
          <router-link to="/renovation" class="one-link">
            <div>Медийная реклама</div>
            <div class="stars">
              <div class="one-star one-star--gray"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
          <router-link to="/target" class="one-link">
            <div>Paid Social</div>
            <div class="stars">
              <div class="one-star one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
          <router-link to="/seo" class="one-link">
            <div>SEO</div>
            <div class="stars">
              <div class="one-star one-star--gray"></div><div class="one-star one-star--gray"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
          <router-link to="/contextus" class="one-link">
            <div>Paid Search</div>
            <div class="stars">
              <div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
          <router-link to="/analitycs" class="one-link">
            <div>Веб-аналитика</div>
            <div class="stars">
              <div class="one-star one-star--gray"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
          <router-link to="/cpa" class="one-link">
            <div>CPA</div>
            <div class="stars">
              <div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
          <router-link to="/renovation" class="one-link">
            <div>Мобайл</div>
            <div class="stars">
              <div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div><div class="one-star"></div>
            </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceLists',
  props: ['history'],
  data () {
    let lastTransition = this.history[this.history.length - 1]
    let fromRouteName = (lastTransition || {}).from || {}

    return {
      fromPage: fromRouteName.name || 'index',
      sliderIndex: 1,
      photoIndex: 1
    }
  },
  methods: {
    showSlider (index) {
      this.sliderIndex = index
      this.photoIndex = 1
    },
    showPhoto (index) {
      this.photoIndex = index
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/styles/mixins"

  $one_columns: 100% / 36
  $one_inner_columns: 100% / 27
  $one_tablet_inner_columns: 100% / 29

  .marketplaces
    flex-grow: 1

    @include desktop
      padding-left: $one_columns * 6
      padding-right: $one_columns * 3
      margin-top: calc( 30vh - 7rem )
      display: flex
      flex-flow: row wrap
      justify-content: flex-start

    @include tablet('portrait')
      width: 100%
      margin-top: calc( ((100vh / 13) * 3) - 16.4rem )

    @include tablet('landscape')
      width: $one_columns * 29
      margin-top: calc( ((100vh / 11) * 3) - 15.6rem )

    @include mobile
      width: 66.7%
      margin-top: calc( ((100vh / 15) * 3) - 11.1rem )

  .slider
    @include desktop
      height: 40vh
      flex: 0 0 #{$one_inner_columns * 18}

    @include tablet('landscape')
      height: 36.4vh

    @include tablet('portrait')
      height: 38.5vh
      width: 66.7%

    @include mobile
      height: 40vh
      width: 100%

    &__bg
      height: 100%
      width: 100%

      @include tablet('landscape')
        width: calc(100% - 18vh)

    &__card
      height: 10vh
      width: 18vh
      right: 0
      cursor: pointer
      position: absolute
      background-color: #fff
      outline: 1px solid #ABABAB

      @include tablet('portrait')
        width: 25%

      @include mobile
        width: 33.33333%
        height: 6.67vh

      &:hover
        z-index: 10
        transform: scale(1.05)

      &--active
        z-index: 5
        outline: 3px solid #0A0AE2

      &-1
        top: 0

        @include tablet('portrait')
          top: 100%
          right: auto
          left: 0

        @include mobile
          top: 100%
          right: 66.666666%

      &-2
        top: 10vh

        @include tablet('portrait')
          top: 100%
          right: auto
          left: 25%

        @include mobile
          top: 100%
          right: 33.33333%

      &-3
        top: 20vh

        @include tablet('portrait')
          top: 100%
          right: auto
          left: 50%

        @include mobile
          top: 100%
          right: 0

  .description
    @include desktop
      height: 40vh
      flex: 0 0 #{$one_inner_columns * 9}
      padding-left: #{$one_inner_columns * 2}

    @include tablet('landscape')
      margin-top: 8vh
      width: 100%
      position: relative
      padding-left: #{$one_tablet_inner_columns * 2}

    @include tablet('portrait')
      margin-top: 20vh
      width: 50%

    @include mobile
      display: flex
      flex-flow: column wrap
      justify-content: flex-start
      margin-top: 13.34vh

  .more
    @include desktop
      margin-top: 10vh
      padding: 0 #{$one_inner_columns} 0 #{$one_inner_columns * 1.5}
      flex: 0 0 #{$one_inner_columns * 18}

    @include tablet('landscape')
      margin-top: 8vh
      width: #{$one_tablet_inner_columns * 23}
      padding: 0 0 0 #{$one_tablet_inner_columns * 2}

    @include tablet('portrait')
      margin-top: 12vh
      width: 66.7%

    @include mobile
      margin-top: 8vh

    &__title
      width: 60%
      opacity: 0.35
      font-size: 1.1rem
      color: #000000
      letter-spacing: 0
      line-height: 1.8rem

      @include mobile
        width: 100%

  .title
    font-size: 2.8rem
    color: #000000
    letter-spacing: 0
    line-height: 4rem

    @include tablet('landscape')
      width: #{$one_tablet_inner_columns * 18}

    @include mobile
      order: 0
      font-size: 2.2rem
      line-height: 3.2rem

  .text
    font-size: 1.3rem
    color: #000000
    letter-spacing: 0
    line-height: 2.2rem
    margin-top: 2.9rem

    @include tablet
      margin-top: 6vh
      width: #{$one_tablet_inner_columns * 18}

    @include mobile
      order: 2
      font-size: 1.2rem
      letter-spacing: 0
      line-height: 1.8rem

  .places
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center

    @include desktop
      margin-top: 2.9rem

    @include tablet
      position: absolute
      right: 0
      top: 0

    @include tablet('portrait')
      flex-flow: column nowrap
      position: fixed
      right: 7rem
      top: calc( (100vh / 13) * 3)

    @include mobile
      order: 1
      margin-top: 3vh

  .one-partner
    cursor: pointer
    background: no-repeat center center
    filter: grayscale(100%)
    transition: filter .2s linear

    &:hover,
    &--active
      filter: none

    &-ya
      width: 1.5rem
      height: 2.7rem
      margin-right: 1.4rem
      background: no-repeat center center / contain url(../../assets/images/price-list/ya.png)

      @include tablet('portrait')
        margin-bottom: 1.7rem
        margin-right: 0

    &-cian
      width: 2.8rem
      height: 2.7rem
      margin-right: 1.8rem
      background: no-repeat center center / contain url(../../assets/images/price-list/cian.png)

      @include tablet('portrait')
        margin-bottom: 2.1rem
        margin-right: 0

    &-avito
      width: 2.4rem
      height: 2.3rem
      background: no-repeat center center / contain url(../../assets/images/price-list/avito.png)

      @include tablet('portrait')
        margin-right: 0

  .links
    margin-top: calc(7vh - 1.5rem)
    margin-bottom: -.3rem

    @include tablet
      margin-top: 8vh

    @include tablet('portrait')
      margin-top: 5vh

    @include mobile
      margin-top: 8vh

  .one-link
    font-size: 1.3rem
    color: #000000
    letter-spacing: 0
    line-height: 2.5rem
    margin-top: .5rem
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

    @include mobile
      font-size: 1.2rem
      letter-spacing: 0.05rem
      line-height: 1.5rem
      min-height: 3rem

    & > div:first-child
      @include mobile
        flex: 0 0 50%
        padding-right: 1rem

  .stars
    width: 8rem
    height: 1.3rem
    display: flex
    flex-flow: row nowrap
    justify-content: space-between

  .one-star
    width: 1.3rem
    height: 1.3rem
    background: no-repeat center center / contain url(../../assets/images/one-star.svg)

    &--gray
      background-image: url(../../assets/images/one-star-gray.svg)

  .photo.slider__bg
    background: #fff no-repeat top center / auto 51vh

    @include tablet('landscape')
      background-size: auto 45vh

    @include tablet('portrait')
      background: #fff no-repeat top left / auto 38.5vh

    @include mobile
      background: #fff no-repeat top left / auto 40vh

  .photo
    background: #fff no-repeat top center / contain

  .slider
    position: relative

    &--1
      & > .photo--1.slider__bg
        background-image: url(../../assets/images/marketplaces/mrkt_ym_1.png)

      & > .photo--2.slider__bg
        background-image: url(../../assets/images/marketplaces/mrkt_ym_2.png)

      & > .photo--3.slider__bg
        background-image: url(../../assets/images/marketplaces/mrkt_ym_3.png)

      & > .photo--1
        background-image: url(../../assets/images/marketplaces/mrkt_ym_1_thmb.png)

      & > .photo--2
        background-image: url(../../assets/images/marketplaces/mrkt_ym_2_thmb.png)

      & > .photo--3
        background-image: url(../../assets/images/marketplaces/mrkt_ym_3_thmb.png)

    &--2
      & > .photo--1.slider__bg
        background-image: url(../../assets/images/marketplaces/marketplaces_cian1.png)

      & > .photo--2.slider__bg
        background-image: url(../../assets/images/marketplaces/marketplaces_cian2.png)

      & > .photo--3.slider__bg
        background-image: url(../../assets/images/marketplaces/marketplaces_cian3.png)

      & > .photo--1
        background-image: url(../../assets/images/marketplaces/mrkt_сi_1_thmb.png)

      & > .photo--2
        background-image: url(../../assets/images/marketplaces/mrkt_сi_2_thmb.png)

      & > .photo--3
        background-image: url(../../assets/images/marketplaces/mrkt_сi_3_thmb.png)

    &--3
      & > .photo--1.slider__bg
        background-image: url(../../assets/images/marketplaces/marketplaces_avito1.png)

      & > .photo--2.slider__bg
        background-image: url(../../assets/images/marketplaces/marketplaces_avito2.png)

        @include mobile
          background-position: top right

      & > .photo--3.slider__bg
        background-image: url(../../assets/images/marketplaces/marketplaces_avito3.png)

      & > .photo--1
        background-image: url(../../assets/images/marketplaces/mrkt_av_1_thmb.png)

      & > .photo--2
        background-image: url(../../assets/images/marketplaces/mrkt_av_2_thmb.png)

      & > .photo--3
        background-image: url(../../assets/images/marketplaces/mrkt_av_3_thmb.png)
</style>
