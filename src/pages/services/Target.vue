<template>
  <div class="columns">
    <div class="left">
      <div class="left-advert">
        <div class="one-left">
          <router-link :to="currentState.lt.link" v-bind:class="'one-left__img one-left__img--' + currentState.lt.id"></router-link>
          <router-link :to="currentState.lt.link" class="one-left__title">
            {{currentState.lt.title}}
          </router-link>
          <router-link :to="currentState.lt.link" class="one-left__link">mgcom.ru</router-link>
          <router-link :to="currentState.lt.link" class="one-left__text">{{currentState.lt.text}}</router-link>
        </div>
        <div class="one-left">
          <router-link :to="currentState.lb.link" v-bind:class="'one-left__img one-left__img--' + currentState.lb.id"></router-link>
          <router-link :to="currentState.lb.link" class="one-left__title">
            {{currentState.lb.title}}
          </router-link>
          <router-link :to="currentState.lb.link" class="one-left__link">mgcom.ru</router-link>
          <router-link :to="currentState.lb.link" class="one-left__text">{{currentState.lb.text}}</router-link>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center__scroll">
        <div class="post">
          <div class="post-advert__wrapper">
            <router-link to="/mobile-ads" class="post-advert post-advert--1">
              <div class="post-advert__text">Мобильная реклама</div>
            </router-link>
            <router-link to="/seo" class="post-advert post-advert--2">
              <div class="post-advert__text">SEO</div>
            </router-link>
          </div>
        </div>
        <div class="post">
          <div class="post__header">Рекомендуемая публикация</div>
          <div class="post__logo">
            <div class="post__title">MGCom</div>
            <div class="post__time">8 мин.</div>
          </div>
          <div class="post__text">Раздел о таргетированной рекламе в соцсетях построен в виде
            ленты новостей, составленной из разных источников. Сам текст
            рассказывает о конкретной услуге, а ссылки, встроенные в них —
            снова служат пунктами меню и ведут в другие разделы сайта.
          </div>
          <router-link to="/" class="post__link">https://mgcom.ru/media</router-link>
          <div class="post__attach">
            <div class="post__img"></div>
            <div class="post__attach-title">Медийная реклама — MGCom</div>
            <div class="post__attach-text">Здесь короткое описание Медийной рекламы, которое также может меняться
              в зависимости от того, какие страницы пользователь посетил ранее…</div>
          </div>
          <div class="post__footer">
            <div class="post__social"></div>
            <div class="post__last-wrapper">
              <div class="post__comments">Комментарии: 6</div>
              <div class="post__reposts">Перепост: 8</div>
              <div class="post__smoll-logo"></div>
            </div>
          </div>
        </div>
        <div class="post center-post">
          <div class="post__header post__header--center">Рекомендуемая публикация</div>
          <div class="post__logo">
            <div class="post__title">MGCom</div>
            <div class="post__time">8 мин.</div>
          </div>
          <div class="post__text">
            Таргетированная реклама в соцсетях – инструмент в поддержку контекстной рекламе – тоже работает с лидами и продажами. Через соцмедиа можно также повышать знание и лояльность, информировать об акциях и событиях.
          </div>
          <div class="post__footer">
            <div class="post__social"></div>
            <div class="post__last-wrapper">
              <div class="post__comments">Комментарии: 6</div>
              <div class="post__reposts">Перепост: 8</div>
              <div class="post__smoll-logo"></div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="post-advert__wrapper">
            <router-link to="/mobile-ads" class="post-advert post-advert--1">
              <div class="post-advert__text">Мобильная реклама</div>
            </router-link>
            <router-link to="/seo" class="post-advert post-advert--2">
              <div class="post-advert__text">SEO</div>
            </router-link>
            <div class="post-advert post-advert--1"></div>
            <div class="post-advert post-advert--2"></div>
            <div class="post-advert post-advert--2"></div>
            <div class="post-advert post-advert--2"></div>
            <div class="post-advert post-advert--2"></div>
          </div>
        </div>
        <div class="post">
          <div class="post__header">Рекомендуемая публикация</div>
          <div class="post__logo">
            <div class="post__title">MGCom</div>
            <div class="post__time">8 мин.</div>
          </div>
          <div class="post__text">Раздел о таргетированной рекламе в соцсетях построен в виде
            ленты новостей, составленной из разных источников. Сам текст
            рассказывает о конкретной услуге, а ссылки, встроенные в них —
            снова служат пунктами меню и ведут в другие разделы сайта.
          </div>
          <router-link to="/" class="post__link">https://mgcom.ru/media</router-link>
          <div class="post__attach">
            <div class="post__img"></div>
            <div class="post__attach-title">Медийная реклама — MGCom</div>
            <div class="post__attach-text">Здесь короткое описание Медийной рекламы, которое также может меняться
              в зависимости от того, какие страницы пользователь посетил ранее…</div>
          </div>
          <div class="post__footer">
            <div class="post__social"></div>
            <div class="post__last-wrapper">
              <div class="post__comments">Комментарии: 6</div>
              <div class="post__reposts">Перепост: 8</div>
              <div class="post__smoll-logo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-advert">
        <div class="right-advert__title">Реклама</div>
        <div class="one-right">
          <router-link :to="currentState.rt.link" v-bind:class="'one-right__img one-right__img--' + currentState.rt.id"></router-link>
          <router-link :to="currentState.rt.link" class="one-right__title">{{currentState.rt.title}}</router-link>
          <router-link :to="currentState.rt.link" class="one-right__link">mgcom.ru</router-link>
          <router-link :to="currentState.rt.link" class="one-right__text">{{currentState.rt.text}}</router-link>
        </div>
        <div class="one-right">
          <router-link :to="currentState.rb.link" v-bind:class="'one-right__img one-right__img--' + currentState.rb.id"></router-link>
          <router-link :to="currentState.rb.link" class="one-right__title">{{currentState.rb.title}}</router-link>
          <router-link :to="currentState.rb.link" class="one-right__link">mgcom.ru</router-link>
          <router-link :to="currentState.rb.link" class="one-right__text">{{currentState.rb.text}}</router-link>
        </div>
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
    text: 'Приводим пользователей мобильных устройств<',
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
    text: 'Приводим пользователей мобильных устройств<',
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
    link: 'cpa'
  },
  rb: {
    id: 4,
    title: 'Веб-аналитика',
    text: 'Call tracking, А/В-тесты и понятные отчёты. Мультиканальная аналитика.',
    link: 'analitycs'
  }
}]

export default {
  name: 'SocialNetwork',
  data () {
    return {
      advertState: 2
    }
  },
  computed: {
    currentState () {
      return states[this.advertState]
    }
  },
  mounted () {
    let scrollWrapper = document.querySelector('.center__scroll')
    let bottomLine = (1275 - window.innerHeight / 2) + 90
    let topLine = (956 - window.innerHeight / 2) - 15

    if (scrollWrapper) {
      scrollWrapper.scrollTop = (956 - window.innerHeight / 2) + 150
      scrollWrapper.onscroll = (event = {}) => {
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
        console.log(this.advertState)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .post-advert
    display: block
    width: 23.1rem
    flex: 0 0 23.1rem
    position: relative
    height: 15.4rem
    margin-right: 1.2rem
    background: #f7f7f7
    box-shadow: 0 1px 4px rgba(16,0,0,0)
    background: no-repeat center center / cover
    text-decoration: none

    &:last-child
      margin-right: 0

    &--1
      background-image: url(../../assets/images/target/1.png)

    &--2
      background-image: url(../../assets/images/target/2.png)

    &__text
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      display: inline-block
      background: #fff
      padding: .5rem
      position: absolute

    &__wrapper
      display: flex
      flex-flow: row nowrap
      justify-content: flex-start
      overflow: hidden

  .one-right
    display: flex
    flex-flow: column nowrap
    justify-content: flex-start

    &:last-child
      margin-top: 3rem

    &__title
      color: #0909e1
      font-size: 1rem
      font-weight: 700
      margin-bottom: .4rem
      padding-left: 2px

    &__link
      color: #0909e1
      padding-left: 2px
      font-size: .9rem
      margin-bottom: .6rem

    &__text
      color: #797c80
      padding-left: 2px
      font-size: .9rem

    &__img
      width: 22.1rem
      height: 10rem
      margin-bottom: 1.5rem
      text-decoration: none
      display: block
      background: no-repeat center center / cover

      &--1
        background-image: url(../../assets/images/displayAds/4.png)

      &--2
        background-image: url(../../assets/images/displayAds/5.png)

      &--3
        background-image: url(../../assets/images/displayAds/1.png)

      &--4
        background-image: url(../../assets/images/displayAds/8.png)

  .right-advert
    padding: 1rem
    text-align: left
    display: inline-block
    border: 1px solid #e5e5e5
    width: 24.1rem
    background: #ffffff
    border-radius: 3px
    box-shadow: 0 1px 4px rgba(16, 0, 0, 0)

    &__title
      padding-left: .2rem
      color: #7e7f82
      font-size: .9rem
      margin: 1rem 0
  .one-left
    display: flex
    flex-flow: column nowrap
    width: 14.2rem
    margin-bottom: 3rem

    &__title
      line-height: 1.4rem
      margin-bottom: 1rem
      color: #3e5d93
      font-size: 1.1rem
      font-weight: 700

    &__link
      font-size: 1.1rem
      line-height: 1.3rem
      color: #848991
      margin-bottom: .5rem

    &__img
      margin-bottom: 1.5rem
      text-decoration: none
      display: block
      background: no-repeat center center / cover
      &--1
        width: 10.2rem
        height: 13.7rem
        background-image: url(../../assets/images/target/1.png)

      &--2
        width: 12rem
        height: 14.2rem
        background-image: url(../../assets/images/target/2.png)

      &--3
        width: 12rem
        height: 14.2rem
        background-image: url(../../assets/images/displayAds/8.png)

      &--4
        width: 12rem
        height: 14.2rem
        background-image: url(../../assets/images/displayAds/7.png)

      &--5
        width: 12rem
        height: 14.2rem
        background-image: url(../../assets/images/displayAds/6.png)

  .columns
    flex-grow: 1
    display: flex
    justify-content: space-between
    flex-flow: row nowrap
    padding-bottom: 5rem

  .right
    text-align: right

  .left, .right
    flex: 0 0 25%
    padding-top: 5rem

  .center
    height: 100vh
    flex: 0 0 53rem
    overflow: hidden
    margin-top: calc(-3.8rem - 5rem)

    &__scroll
      height: 100%
      width: 60rem
      overflow: auto


  .post
    width: 50rem
    background: #fff
    padding: 1.3rem
    margin: 2rem 1.5rem
    box-shadow: 0 0 1.5rem .3rem rgba(28,0,0,.1)

    &__comments,
    &__reposts
      margin-right: 3rem

    &__smoll-logo
      width: 15.67px
      height: 15.83px
      background: no-repeat center center / contain url(../../assets/images/target/fill-3.png)

    &__footer
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      margin-top: 3rem
      border-bottom: 1px solid #dddddd

    &__last-wrapper
      display: flex
      justify-content: flex-start
      flex-flow: row nowrap
      color: #696f79
      align-items: center
      font-size: 1rem

    &__social
      width: 96px
      height: 41px
      background: url(../../assets/images/target/social.png) no-repeat center left

    &__header
      color: #989a9d
      font-size: 1.2rem
      line-height: 3rem
      border-radius: 3px
      border-bottom: 1px solid #dddddd

      &--center
        border: none

    &__logo
      height: 4.6rem
      margin-top: 1rem
      padding-left: 5rem
      background: url(../../assets/images/target/fill-3.png) no-repeat center left

    &__title
      padding-top: .5rem
      font-size: 1.4rem
      color: #3e5d93
      font-weight: bold

    &__time
      color: #8c8f95
      margin-top: .5rem
      font-size: 1.3rem

    &__text
      color: #202124
      padding-right: 2rem
      margin-top: 2rem
      font-size: 1.4rem
      line-height: 1.4

    &__link
      color: #2b4e8b
      margin-top: 2rem
      font-size: 1.4rem
      display: inline-block

    &__img
      height: 25rem
      border-radius: 3px
      background: url(../../assets/images/displayAds/8.png) no-repeat center center / cover

    &__attach
      margin-top: 1rem
      border: 1px solid #e3e3e3
      border-radius: 3px

      &-title
        color: #040404
        padding: 2rem 1rem 1rem
        font-size: 1.8rem

      &-text
        color: #202124
        font-size: 1.2rem
        padding: 1rem
        line-height: 1.4

</style>
