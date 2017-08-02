<template>
  <div class="wrapper">
    <div class="left-column">
      <div class="slider">
        <div class="one-card">Вариант 1</div>
        <div class="one-card one-card--small one-card--active">Вариант 2</div>
        <div class="one-card one-card--small">Вариант 3</div>
        <div class="one-card one-card--small">Вариант 4</div>
      </div>
      <div class="products">
        <div class="products__title">Пользователи, посмотревшие эту страницу также смотрели:</div>
        <router-link to="/mobile-ads" class="link">
          <span class="link__name">Мобильная реклама</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
        <router-link to="/media" class="link">
          <span class="link__name">Медийная реклама</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
        <router-link to="/target" class="link">
          <span class="link__name">Таргетированная реклама в социальных сетях</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
        <router-link to="/seo" class="link">
          <span class="link__name">SEO</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
        <router-link to="/contextus" class="link">
          <span class="link__name">Контекстная реклама</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
        <router-link to="/analitycs" class="link">
          <span class="link__name">Веб аналитика</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
        <router-link to="/cpa" class="link">
          <span class="link__name">CPA</span>
          <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        </router-link>
      </div>
    </div>
    <div class="right-column">
      <div class="info__title">Реклама на прайс&#8209;площадках</div>
      <div class="info__ico">
        <span class="info__one-ico info__one-ico--1"></span>
        <span class="info__one-ico info__one-ico--2"></span>
        <span class="info__one-ico info__one-ico--3"></span>
        <span class="info__one-ico info__one-ico--4"></span>
        <span class="info__one-ico info__one-ico--5"></span>
      </div>
      <div class="info__text">
        Продажи можно повысить за счёт размещения рекламы на
        Яндекс.Маркете, Циане, Авито и других площадках из e-commerce и недвижимости.
        В агентстве создают уникальных роботов под задачу клиента – для управления ставками, обработки и валидации.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceLists'
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  flex-grow: 1
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-self: center
  padding: 10rem 5.5vw 15rem 12vw

.left-column
  flex: 1 1 65rem
  margin-right: 6rem

.right-column
  flex: 1 1 25rem

.one-card
  padding: 2rem 3rem
  color: #dfdfec
  background: #fff
  font-size: 1.5rem
  cursor: pointer
  margin-bottom: 1rem

  &:first-child
    height: 29rem
    flex: 0 0 100%

  &:last-child
    margin-right: 0

  &:hover
    padding: 1.6rem 2.6rem
    border: 4px solid #3b82e6

  &--small
    flex: 1 1 20rem
    height: 9rem
    margin-right: 1rem

  &--active
    padding: 1.6rem 2.6rem
    border: 4px solid #0202e6

.slider
  display: flex
  flex-flow: row wrap

.info
  &__title
    font-size: 2.9rem
    line-height: 3.8rem

  &__text
    margin-top: 1.6rem
    font-size: 1.5rem
    line-height: 1.6

  &__ico
    margin-left: -.4rem
    margin-top: 1.6rem

  &__one-ico
    width: 2.5rem
    height: 2.5rem
    cursor: pointer
    margin-right: 1.4rem
    display: inline-block
    background: no-repeat center center / contain

    &--1
      margin-right: .8rem
      background-image: url(../../assets/images/logo_yandex.svg)

    &--2
      background-size: 3.8rem
      background-image: url(../../assets/images/logo_mailru.svg)

    &--3
      width: 3rem
      background-image: url(../../assets/images/logo_wiki.png)

    &--4
      background-size: 1.9rem
      background-image: url(../../assets/images/logo_info.png)

    &--5
      background-size: 2rem
      background-image: url(../../assets/images/logo_mixmarket.png)


.products__title
  opacity: .4
  font-size: 1.3rem
  padding-top: 8rem
  padding-bottom: 4rem

.link
  display: flex
  margin: 2rem 0
  font-size: 1.5rem
  text-decoration: none
  justify-content: space-between

  &:hover
    text-decoration: none

    .link__name
      text-decoration: underline

  &__stars
    width: 11rem

  &__name
    margin-right: 5rem

.one-star
  width: 1.6rem
  height: 1.6rem
</style>
