<template>
  <div class="wrapper">
    <div class="info">
      <div class="info__slider">
        <div class="one-card">Вариант 1</div>
        <div class="one-card one-card--small one-card--active">Вариант 2</div>
        <div class="one-card one-card--small">Вариант 3</div>
        <div class="one-card one-card--small">Вариант 4</div>
      </div>
      <div class="info__description">
        <div class="info__title">Реклама на прайс-площадках</div>
        <div class="info__price">от 3 руб.</div>
        <div class="info__ico">
        </div>
        <div class="info__text">Раздел выглядит как карточка товара интернет-магазина. Переключаясь между иконками можно посмотреть варианты каждой площадки в отдельности. Меню — в «Похожих товарах» внизу.</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">Пользователи, посмотревшие эту страницу также смотрели:</div>
      <router-link to="/media" class="link">
        <span class="link__name">Медийная реклама</span>
        <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        <span class="link__cost">от 3000 руб.</span>
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
        <span class="link__cost">от 10 руб.</span>
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
        <span class="link__cost">от 15 000 руб.</span>
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
        <span class="link__cost">от 20 руб.</span>
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
        <span class="link__cost">Цена по запросу</span>
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
        <span class="link__cost">от 3000 руб.</span>
      </router-link>
      <router-link to="/mobilr-ads" class="link">
        <span class="link__name">Реклама на мобильных устройствах</span>
        <span class="link__stars">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
          <img class="one-star" src="../../assets/images/price-list/star.png">
        </span>
        <span class="link__cost">от 3000 руб.</span>
      </router-link>
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
  flex-grow: 1
  align-self: center
  padding-bottom: 5rem

.one-card
  padding: 2rem 3rem
  width: 65rem
  height: 29rem
  color: #dfdfec
  background: #fff
  font-size: 1.5rem
  cursor: pointer
  margin-bottom: 1rem

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

.info
  display: flex
  flex-flow: row nowrap
  width: 90rem
  padding-top: 10rem

  &__slider
    margin-right: 6rem
    display: flex
    flex-flow: row wrap

  &__description
    width: 40rem

  &__title,
  &__price
    font-size: 2.9rem

  &__price
    color: #a2a2a2

  &__text
    font-size: 1.5rem
    line-height: 1.5

.products
  &__title
    opacity: .4
    font-size: 1.3rem
    padding-top: 6rem
    padding-bottom: 4rem

.link
  width: 65rem
  margin: 2rem 0
  display: block
  font-size: 1.5rem
  text-decoration: none

  &:hover
    text-decoration: none

    .link__name
      text-decoration: underline

  &__stars
    width: 11rem
    display: inline-block
    
  &__cost
    width: 17rem
    display: inline-block
    text-align: right
    
  &__name
    width: 30rem
    margin-right: 5rem
    display: inline-block

.one-star
  width: 1.6rem
  height: 1.6rem
</style>
