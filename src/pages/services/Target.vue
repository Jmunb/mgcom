<template>
  <div class="columns">
    <div class="left"></div>
    <div class="center">
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
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'SocialNetwork'
}
</script>

<style lang="sass" scoped>
  .columns
    flex-grow: 1
    display: flex
    flex-flow: row nowrap
    padding-bottom: 5rem

  .left, .right
    flex: 0 0 25%

  .center
    flex: 0 0 50%
    margin-top: -10rem

  .post
    width: 50rem
    background: #fff
    padding: 1.3rem
    margin: 2rem auto
    box-shadow: 0 0 1.5rem .3rem rgba(28,0,0,.2)

    &__header
      color: #989a9d
      font-size: 1.2rem
      line-height: 3rem
      border-radius: 3px
      border-bottom: 1px solid #dddddd

    &__logo
      height: 4.6rem
      margin-top: 1rem
      padding-left: 5rem
      background: url(../../assets/images/logo_4-copy.png) no-repeat center left

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
