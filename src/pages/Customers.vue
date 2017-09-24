<template>
  <div class="page-absolute">
    <div class="customer customer-citroen"></div>
    <div class="customer customer-worldclass"></div>
    <div class="customer customer-ecco"></div>
    <div class="customer customer-beeline"></div>
    <div class="customer customer-mediamarkt"></div>
    <div class="customer customer-rocket"></div>
    <div class="customer customer-obi"></div>
    <div class="customer customer-kia"></div>
    <div class="customer customer-open"></div>
    <div class="customer customer-sinlight"></div>
    <div class="customer customer-pegout"></div>
  </div>
</template>

<script>
export default {
  name: 'customers'
}
</script>

<style lang="sass" scoped>
  @import "../assets/styles/mixins"

  .customer
    filter: blur(.7rem)
    transition: filter .2s ease-in 1s
    background: no-repeat center center / contain

    &:hover
      filter: none
      transition-delay: 0s

    &-beeline
      width: 25.3rem
      height: 7.6rem
      margin-top: 11rem
      margin-right: 1%
      background-image: url(../assets/images/clients/beeline.png)

      @include noDesktop
        width: 15rem
        height: 4.5rem
        margin-top: 9.5rem

    &-citroen
      width: 20.3rem
      height: 14.5rem
      margin-right: 3%
      background-image: url(../assets/images/clients/citroen.png)

      @include noDesktop
        width: 12.4rem
        height: 8.7rem

    &-ecco
      width: 19.8rem
      height: 5.3rem
      margin-top: 14rem
      margin-right: 33.5%
      background-image: url(../assets/images/clients/ecco.png)

      @include noDesktop
        width: 11.8rem
        height: 3.2rem
        margin-top: 2.5rem

    &-kia
      width: 19.4rem
      height: 9.7rem
      margin-top: 8rem
      margin-right: 17.3%
      background-image: url(../assets/images/clients/kia.png)

      @include noDesktop
        width: 11.5rem
        height: 5.7rem
        margin-top: 4.7rem

    &-mediamarkt
      width: 31.5rem
      height: 4.2rem
      margin-top: 24.7rem
      margin-right: 31.5%
      background-image: url(../assets/images/clients/mediamarkt.png)

      @include noDesktop
        width: 18.7rem
        height: 2.5rem
        margin-top: 0

    &-obi
      width: 26.4rem
      height: 6.6rem
      margin-top: 2.8rem
      margin-left: 42%
      background-image: url(../assets/images/clients/obi.png)

      @include noDesktop
        width: 15.6rem
        height: 3.9rem
        margin-top: 1.7rem

    &-open
      width: 43.2rem
      height: 6.8rem
      margin-top: 17.3rem
      margin-left: 20.4%
      background-image: url(../assets/images/clients/open.png)

      @include noDesktop
        width: 25.6rem
        height: 4rem
        margin-top: 10.2rem

    &-pegout
      width: 29.8rem
      height: 21rem
      margin-top: 4rem
      margin-left: 23.3%
      background-image: url(../assets/images/clients/pegout.png)

      @include noDesktop
        width: 17.9rem
        height: 12.6rem
        margin-top: 2.4rem

    &-rocket
      width: 27.7rem
      height: 7.4rem
      margin-top: 10.3rem
      margin-right: 19%
      background-image: url(../assets/images/clients/rocket.png)

      @include noDesktop
        width: 16.4rem
        height: 4.4rem
        margin-top: 6.1rem


    &-sinlight
      width: 31.7rem
      height: 3.8rem
      margin-top: 17.2rem
      margin-right: 24.6%
      background-image: url(../assets/images/clients/sinlight.png)

      @include noDesktop
        width: 18.8rem
        height: 2.2rem
        margin-top: 10.1rem

    &-worldclass
      width: 19.6rem
      height: 6.4rem
      margin-top: - 3rem
      margin-left: 40.2%
      background-image: url(../assets/images/clients/worldclass.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem
        margin-top: 9.1rem
</style>
