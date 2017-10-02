<template>
  <div class="columns">
    <div class="left-advert">
      <div class="horizontal-advert">
        <router-link :to="currentState.lt.link" class="horizontal-advert__image advert-image" v-bind:class="'advert-image--' + currentState.lt.id"></router-link>
        <div>
          <router-link :to="currentState.lt.link" class="horizontal-advert__link">{{currentState.lt.title}}</router-link>
        </div>
        <router-link :to="currentState.lt.link" class="horizontal-advert__text">{{currentState.lt.text}}</router-link>
      </div>
      <div class="horizontal-advert horizontal-advert--last">
        <router-link :to="currentState.lb.link" class="horizontal-advert__image advert-image" v-bind:class="'advert-image--' + currentState.lb.id"></router-link>
        <div>
          <router-link :to="currentState.lb.link" class="horizontal-advert__link">{{currentState.lb.title}}</router-link>
        </div>
        <router-link :to="currentState.lb.link" class="horizontal-advert__text">{{currentState.lb.text}}</router-link>
      </div>
    </div>
    <div class="center">
      <div class="post post--first">
        <div class="post__slider" v-bind:class="{'post__slider--translate': firstSliderTranslate}">
          <router-link to="/mobile-ads" class="vertical-advert vertical-advert--first">
            <div class="vertical-advert__image advert-image advert-image--1"></div>
            <div class="vertical-advert__link">Мобильная реклама</div>
            <div class="vertical-advert__text">Баннеры на релевантных площадках.</div>
          </router-link>
          <router-link to="/seo" class="vertical-advert">
            <div class="vertical-advert__image advert-image advert-image--2"></div>
            <div class="vertical-advert__link">SEO</div>
            <div class="vertical-advert__text">Находим качественный трафик и общий язык с вашими разработчиками.</div>
          </router-link>
          <router-link to="/price-lists" class="vertical-advert">
            <div class="vertical-advert__image advert-image advert-image--5"></div>
            <div class="vertical-advert__link">Маркетплейсы</div>
            <div class="vertical-advert__text">Большой опыт с е-commerce и девело-перами</div>
          </router-link>
          <router-link to="/contextus" class="vertical-advert">
            <div class="vertical-advert__image advert-image advert-image--6"></div>
            <div class="vertical-advert__link">Paid Search</div>
            <div class="vertical-advert__text">Разработка робота под задачу.</div>
          </router-link>
        </div>
        <div class="post__slider-control post__slider-control--left" @click.stop="firstSliderTranslate=false">
          <svg width=".9rem" height="1.4rem" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
              <g id="Social-15" transform="translate(-850.000000, -640.000000)" stroke-width="2" stroke="#000000">
                <g id="Group" transform="translate(379.000000, -772.000000)">
                  <g id="Слайдер-" transform="translate(0.000000, 1270.000000)">
                    <g id="Кнопка" transform="translate(462.000000, 136.000000)">
                      <polyline id="Line" transform="translate(13.356285, 12.695510) scale(-1, 1) translate(-13.356285, -12.695510) " points="10.9848858 7.58477319 15.7276844 12.6955104 10.9848858 17.8062476"></polyline>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="post__slider-control post__slider-control--right" @click.stop="firstSliderTranslate=true">
          <svg width=".9rem" height="1.4rem" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
              <g id="Social-15-2" transform="translate(-853.000000, -214.000000)" stroke-width="2" stroke="#000000">
                <g id="Group" transform="translate(379.000000, 70.000000)">
                  <g id="Кнопка" transform="translate(465.000000, 138.000000)">
                    <polyline id="Line" points="10.9848858 7.58477319 15.7276844 12.6955104 10.9848858 17.8062476"></polyline>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <router-link to="/mobile-ads" class="post post--link">
        <div class="post__image advert-image advert-image--7"></div>
        <div class="post__image-link">Перейти</div>
        <div class="post__text"><b>Мобильная реклама</b> решает те же задачи и использует те же инструменты, но с другими настройками и KPI. Рекламу размещают в мобильном вебе и приложениях…</div>
      </router-link>
      <div class="post center-post">
        <div class="post__recommended">Рекомендуемая публикация</div>
        <div class="post__logo">
          <div class="post__logo-title">MGCom</div>
          <div class="post__logo-time">5 мин</div>
        </div>
        <div class="post__text-big">
          Paid Social — инструмент в поддержку контекстной рекламе — тоже работает
          с лидами и продажами. Через соцмедиа можно также повышать знание и лояльность, информировать об акциях и событиях.
        </div>
        <div class="post__footer">
          <span class="post__about-text">Нравится</span>
          <span class="post__about-text">Поделиться</span>
        </div>
      </div>
      <div class="post">
          <div class="post__slider" v-bind:class="{'post__slider--translate': lastSliderTranslate}">
            <router-link to="/seo" class="vertical-advert vertical-advert--first">
              <div class="vertical-advert__image advert-image advert-image--5"></div>
              <div class="vertical-advert__link">Маркетплейсы</div>
              <div class="vertical-advert__text">Большой опыт с е-commerce и девело-перами</div>
            </router-link>
            <router-link to="/seo" class="vertical-advert">
              <div class="vertical-advert__image advert-image advert-image--6"></div>
              <div class="vertical-advert__link">Paid Search</div>
              <div class="vertical-advert__text">Разработка робота под задачу.</div>
            </router-link>
            <router-link to="/mobile-ads" class="vertical-advert">
              <div class="vertical-advert__image advert-image advert-image--3"></div>
              <div class="vertical-advert__link">CPA</div>
              <div class="vertical-advert__text">Большая база партнеров, многоступенчатая система защиты, арбитраж, мотивация веб-мастеров.</div>
            </router-link>
            <router-link to="/seo" class="vertical-advert">
              <div class="vertical-advert__image advert-image advert-image--4"></div>
              <div class="vertical-advert__link">Веб-аналитика</div>
              <div class="vertical-advert__text">Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика.</div>
            </router-link>
          </div>
          <div class="post__slider-control post__slider-control--left" @click.stop="lastSliderTranslate=false">
            <svg width=".9rem" height="1.4rem" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g id="Social-15" transform="translate(-850.000000, -640.000000)" stroke-width="2" stroke="#000000">
                  <g id="Group" transform="translate(379.000000, -772.000000)">
                    <g id="Слайдер-" transform="translate(0.000000, 1270.000000)">
                      <g id="Кнопка" transform="translate(462.000000, 136.000000)">
                        <polyline id="Line" transform="translate(13.356285, 12.695510) scale(-1, 1) translate(-13.356285, -12.695510) " points="10.9848858 7.58477319 15.7276844 12.6955104 10.9848858 17.8062476"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="post__slider-control post__slider-control--right" @click.stop="lastSliderTranslate=true">
            <svg width=".9rem" height="1.4rem" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g id="Social-15-2" transform="translate(-853.000000, -214.000000)" stroke-width="2" stroke="#000000">
                  <g id="Group" transform="translate(379.000000, 70.000000)">
                    <g id="Кнопка" transform="translate(465.000000, 138.000000)">
                      <polyline id="Line" points="10.9848858 7.58477319 15.7276844 12.6955104 10.9848858 17.8062476"></polyline>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

      <router-link to="/mobile-ads" class="post post--link">
        <div class="post__header">
          @mgcom
          <span class="post__header-time">30 мин</span>
        </div>
        <div class="post__share">
          <div class="post__share-image advert-image advert-image--7"></div>
          <div class="post__share-title">Мобильная реклама</div>
          <div class="post__share-text">Приводим пользователей мобильных устройств.</div>
        </div>
      </router-link>
    </div>
    <div class="right-advert">
      <div class="horizontal-advert">
        <router-link :to="currentState.rt.link" class="horizontal-advert__image advert-image" v-bind:class="'advert-image--' + currentState.rt.id"></router-link>
        <div>
          <router-link :to="currentState.rt.link" class="horizontal-advert__link">{{currentState.rt.title}}</router-link>
        </div>
        <router-link :to="currentState.rt.link" class="horizontal-advert__text">{{currentState.rt.text}}</router-link>
      </div>
      <div class="horizontal-advert horizontal-advert--last horizontal-advert--margin-top">
        <router-link :to="currentState.rb.link" class="horizontal-advert__image advert-image" v-bind:class="'advert-image--' + currentState.rb.id"></router-link>
        <div>
          <router-link :to="currentState.rb.link" class="horizontal-advert__link">{{currentState.rb.title}}</router-link>
        </div>
        <router-link :to="currentState.rb.link" class="horizontal-advert__text">{{currentState.rb.text}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
let states = ['', {
  lt: {
    id: 4,
    title: 'CPA',
    text: 'У MGCom большая база CPA-партнеров и свой арбитраж',
    link: '/cpa'
  },
  lb: {
    id: 3,
    title: 'Прайс-площадки',
    text: 'Продажи можно повысить за счёт размещения рекламы на Яндекс.Маркете',
    link: '/price-lists'
  },
  rt: {
    id: 1,
    title: 'Контекст',
    text: 'Основной фокус контекстной рекламы – привлечение лидов',
    link: '/contextus'
  },
  rb: {
    id: 3,
    title: 'Веб-аналитика',
    text: 'Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика.',
    link: 'analitycs'
  }
}, {
  lt: {
    id: 1,
    title: 'Мобильная реклама',
    text: 'Приводим пользователей мобильных устройств',
    link: '/mobile-ads'
  },
  lb: {
    id: 2,
    title: 'SEO',
    text: 'Находим качественный трафик и общий язык с вашими разработчиками',
    link: '/seo'
  },
  rt: {
    id: 4,
    title: 'Веб-аналитика',
    text: 'Большая база партнеров, многоступен-чатая система защиты, арбитраж, мотивация веб-мастеров.',
    link: 'cpa'
  },
  rb: {
    id: 2,
    title: 'Веб-аналитика',
    text: 'Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика.',
    link: 'analitycs'
  }
}, {
  lt: {
    id: 1,
    title: 'Мобильная реклама',
    text: 'Приводим пользователей мобильных устройств',
    link: '/mobile-ads'
  },
  lb: {
    id: 2,
    title: 'SEO',
    text: 'Находим качественный трафик и общий язык с вашими разработчиками',
    link: '/seo'
  },
  rt: {
    id: 3,
    title: 'Веб-аналитика',
    text: 'Большая база партнеров, многоступен-чатая система защиты, арбитраж, мотивация веб-мастеров.',
    link: '/cpa'
  },
  rb: {
    id: 4,
    title: 'Веб-аналитика',
    text: 'Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика.',
    link: '/analitycs'
  }
}]

export default {
  name: 'SocialNetwork',
  data () {
    return {
      advertState: 2,
      firstSliderTranslate: false,
      lastSliderTranslate: true
    }
  },
  computed: {
    currentState () {
      return states[this.advertState]
    }
  },
  mounted () {
    let scrollWrapper = document.documentElement
    let centerElement = document.querySelector('.center-post')
    let bottomLine = (1275 - window.innerHeight / 2) + 90
    let topLine = (956 - window.innerHeight / 2) - 15

    if (scrollWrapper) {
      this.$nextTick(() => {
        scrollWrapper.scrollTop = centerElement.getBoundingClientRect().top - ((window.innerHeight - centerElement.offsetHeight) / 2)
      })
      window.onscroll = (event = {}) => {
        if (event.stopPropogation) event.stopPropogation()
        let advertState = 1
        let scrollTop = scrollWrapper.scrollTop

        if (scrollTop > topLine) {
          advertState = 2
        }

        if (scrollTop > bottomLine) {
          advertState = 3
        }
        this.advertState = advertState
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/styles/mixins"

  $one_big_columns: 100% / 6

  .columns
    @include desktop
      padding-bottom: 2.5rem
      width: $one_big_columns * 2.5
      margin: -7rem 0 -6rem $one_big_columns * 1.5

    @include tablet
      position: relative

    @include tablet('portrait')
      margin-top: calc( ((100vh / 13) * 4) - 7.9rem )

    @include tablet('landscape')
      margin-top: calc( ((100vh / 11) * 4) - 7.1rem )

    @include mobile
      margin-top: calc( ((100vh / 15) * 5) - 5.1rem )

  .center
    @include noDesktop
      display: flex
      flex-flow: column nowrap

    @include mobile
      width: 100% * 29/36

    @include tablet('portrait')
      width: 100% * 29/36

    @include tablet('landscape')
      width: 100% * 21/36

  .left-advert
    position: fixed
    top: 24vh
    left: 8rem
    width: calc( (50% - 8rem) * (5/18) )

    @include noDesktop
      display: none

  .right-advert
    @include mobile
      display: none

    @include desktop
      top: 18vh
      right: 8rem
      position: fixed
      width: calc( (50% - 8rem) * (8/18) )
      background: #FFFFFF
      box-shadow: 0 .1rem .4rem 0 rgba(0,0,0,0.10)
      border-radius: .4rem
      padding: 2.5rem 1.3rem 2rem

      &::before
        content: 'Реклама'
        font-size: 1.1rem
        color: #7E8082
        letter-spacing: 0.02rem
        line-height: 1.4rem
        position: absolute
        top: .6rem

    @include tablet('portrait')
      display: none

    @include tablet('landscape')
      top: 0
      position: absolute
      right: calc( (50% - 8rem) * (4/18) )
      width: calc( (50% - 8rem) * (9/18) )

  .post
    width: 100%
    display: block
    padding: 2.5rem
    overflow: hidden
    position: relative
    background: #FFFFFF
    border-radius: .4rem
    margin: 2.5rem 0 0 0
    box-shadow: 0 .1rem .4rem 0 rgba(0,0,0,0.10)

    @include noDesktop
      order: 1

    @include mobile
      padding: 2rem

    &.center-post
      @include noDesktop
        order: 0
        margin-top: 0

    &--link
      cursor: pointer

    &:hover
      text-decoration: none

    &__slider
      display: flex
      flex-flow: row nowrap
      justify-content: flex-start
      transition: transform .4s ease-in-out

      &--translate
        transform: translateX(-98%)

        @include mobile
          transform: translateX(-87%)

        & ~ .post__slider-control--left
          opacity: 1
          pointer-events: auto

        & ~ .post__slider-control--right
          opacity: 0
          pointer-events: none

      &-control
        top: 50%
        cursor: pointer
        width: 2.5rem
        height: 2.5rem
        position: absolute
        background: #F8F8FB
        margin-top: -1.3rem
        border-radius: .4rem
        text-align: center
        padding-top: .5rem
        transition: transform .2s linear

        &:hover
          transform: scale(1.1)

        &--left,
        &--right
          transition: opacity .2s linear

        &--left
          left: 1rem
          opacity: 0
          pointer-events: none

        &--right
          right: 1rem


    &__image
      margin: -2.5rem -2.5rem 0
      height: (100 / 6) * 1.5vw
      border-radius: .4rem .4rem 0 0

      @include mobile
        margin: -2rem -2rem 0
        height: (100 / 6) * 3vw

      &-link
        margin: 0 -2.5rem
        color: #F8F8FB
        padding-left: 2.5rem
        font-size: 1.2rem
        line-height: 3.5rem
        background: #0A0AE2
        letter-spacing: 0.05rem

        &:hover
          text-decoration: underline

    &__text
      font-size: 1.1rem
      color: #202225
      letter-spacing: 0.02rem
      line-height: 1.4rem
      margin-bottom: -.5rem
      margin-top: 2.1rem

      @include mobile
        font-size: 1rem
        letter-spacing: 0
        line-height: 1.4rem

      &-big
        letter-spacing: 0
        font-size: 1.6rem
        line-height: 2.2rem
        margin-top: 2.3rem

        @include mobile
          font-size: 1.6rem
          letter-spacing: 0
          line-height: 2.2rem
          margin-top: 2rem

    &__recommended
      opacity: 0.5
      margin-top: -.3rem
      font-size: 1.1rem
      color: #000000
      letter-spacing: 0.02rem
      line-height: 1.4rem

      @include mobile
        font-size: 1rem
        letter-spacing: 0.18px

    &__logo
      height: 6.4rem
      position: relative
      padding: 2.4rem 0 0 5.2rem

      &::before
        content: ''
        width: 4rem
        height: 4rem
        background: #0A0AE2
        display: block
        border-radius: 50%
        left: 0
        right: 0
        position: absolute

      &-title
        font-size: 1.6rem
        color: #090909
        font-weight: bold
        letter-spacing: 0
        line-height: 2.2rem

        @include mobile
          font-size: 1.4rem

      &-time
        opacity: 0.3
        font-size: 1.2rem
        color: #000000
        letter-spacing: 0.46px
        line-height: 1.4rem

        @include tablet
          font-size: 1.1rem
          letter-spacing: 0.042rem

    &__footer
      white-space: nowrap
      margin-top: 2.5rem

    &__about-text
      opacity: 0.5
      font-size: 1.2rem
      color: #000000
      letter-spacing: 0.05rem
      line-height: 1.4rem
      margin-right: 2.2rem

      @include mobile
        font-size: 1rem
        letter-spacing: 0.042rem

    &__header
      font-size: 1.6rem
      color: #090909
      font-weight: bold
      letter-spacing: 0
      line-height: 2.2rem

      @include mobile
        font-size: 1.4rem

      &-time
        opacity: 0.3
        font-size: 1.2rem
        font-weight: normal
        color: #000000
        letter-spacing: 0.02rem
        line-height: 1.4rem

    &__share
      overflow: hidden
      margin-top: 1.9rem
      border-radius: .4rem
      box-shadow: 0 .1rem .4rem 0 rgba(0,0,0,0.10)
      background: #F8F8FB

      &-image
        height: 18rem

      &-title
        font-size: 1.6rem
        color: #070707
        letter-spacing: 0.57px
        margin: 2.4rem 2.4rem 0

        @include mobile
          margin: 1.8rem 2.3rem 0
          letter-spacing: 0.05rem
          line-height: 2rem

      &-text
        max-width: 70%
        opacity: 0.5
        font-size: 1.1rem
        color: #000000
        letter-spacing: 0
        line-height: 1.4rem
        margin: 1rem 2.3rem 1.8rem

        @include mobile
          font-size: 1rem

  .vertical-advert
    display: flex
    height: 25rem
    flex: 0 0 45%
    overflow: hidden
    margin-left: 2.5rem
    border-radius: .4rem
    flex-flow: column nowrap
    justify-content: flex-start
    box-shadow: 0 .1rem .4rem 0 rgba(0,0,0,0.10)

    @include mobile
      margin-left: 2rem
      flex: 0 0 90%

    &:hover
      text-decoration: none

    &--first
      margin-left: 0

    &__image
      flex: 0 0 15rem

    &__link
      flex-grow: 1
      font-size: 1.4rem
      color: #0A0AE2
      padding: 1.5rem 1.5rem 0 1.5rem
      letter-spacing: 0.05rem
      line-height: 1.7rem

      @include mobile
        font-size: 1.6rem
        letter-spacing: 0.057rem
        line-height: 2rem

    &__text
      padding: 1.5rem
      color: #000000
      font-size: 1.1rem
      letter-spacing: 0
      line-height: 1.4rem


  .horizontal-advert
    margin-bottom: 1.7rem

    &--last
      margin-bottom: 0

    &--margin-top
      @include desktop
        margin-top: 3.4rem

    &__image
      width: 100%
      height: 13vh
      display: block

    &__link,
    &__text
      color: #7A7C80
      font-size: 1.1rem
      line-height: 1.4rem
      letter-spacing: 0.02rem

    &__link
      color: #0A0AE2
      display: inline-block
      margin-top: 1.4rem

  .advert-image
    background: no-repeat center center / cover

    &--1
      background-image: url(../../assets/images/advert/1.png)

    &--2
      background-image: url(../../assets/images/advert/2.png)

    &--3
      background-image: url(../../assets/images/advert/3.png)

    &--4
      background-image: url(../../assets/images/advert/4.png)

    &--5
      background-image: url(../../assets/images/advert/5.png)

    &--6
      background-image: url(../../assets/images/advert/6.png)

    &--7
      background-image: url(../../assets/images/advert/7.png)
</style>
