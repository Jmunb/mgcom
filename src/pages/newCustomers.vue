<template>
  <div class="page-absolute customers" v-infinite-scroll="loadMore" infinite-scroll-disabled="false" infinite-scroll-distance="100">
    <div
            onclick=""
            class="customer"
            v-for="customer in allCustomers"
            v-bind:class="'customer-' + customer.name"
            v-bind:style="{marginLeft: customer.margin}"
    ></div>
  </div>
</template>

<script>
function randomInteger (min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

function shuffle (a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
}

const customerNames = ['connected', 'alfa', 'citroen', 'worldclass', 'ecco', 'beeline', 'mediamarkt', 'rocket', 'obi', 'kia', 'open', 'sinlight', 'pegout', 'conscience', 'intersection', 'google', 'mvideo', 'aliexpress', 'fromhands', 'samsung', 'binbank', 'sminex', 'leader', 'rolf', 'vw', 'pfizer', 'loreal', 'rigla', 'inventive', 'rivgosh', 'mic', 'children-world']
const customers = []

customerNames.forEach((item) => {
  customers.push({
    name: item,
    margin: randomInteger(-50, 50)
  })
})

shuffle(customers)

export default {
  name: 'customers',
  data () {
    return {
      allCustomers: [].concat(customers)
    }
  },
  methods: {
    loadMore () {
      this.allCustomers = this.allCustomers.concat(customers)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../assets/styles/mixins"

  .customers
    @include noMobile
      padding: 5rem 0

  .customer
    cursor: pointer
    filter: grayscale(100%)
    transition: filter .2s ease-in, opacity .2s ease-in
    margin: 2rem 0
    background: no-repeat center center / contain

    @include noDesktop
      margin: 1rem 0
      cursor: pointer
      position: relative
      z-index: 1

    &:hover
      opacity: 1
      filter: grayscale(0)

    &-beeline
      width: 25.3rem
      height: 7.6rem
      margin-right: 1%
      background-image: url(../assets/images/clients/beeline.png)

      @include noDesktop
        width: 15rem
        height: 4.5rem

    &-citroen
      width: 20.3rem
      height: 14.5rem
      margin-right: 3%
      background-image: url(../assets/images/clients/citroen.png)

      @include noDesktop
        width: 12.4rem
        height: 8.7rem

    &-ecco
      opacity: .6
      width: 19.8rem
      height: 5.3rem
      margin-right: 33.5%
      background-image: url(../assets/images/clients/ecco.png)

      @include noDesktop
        width: 11.8rem
        height: 3.2rem

    &-kia
      width: 19.4rem
      height: 9.7rem
      margin-right: 17.3%
      background-image: url(../assets/images/clients/kia.png)

      @include noDesktop
        width: 11.5rem
        height: 5.7rem

    &-mediamarkt
      width: 31.5rem
      height: 4.2rem
      margin-right: 31.5%
      background-image: url(../assets/images/clients/mediamarkt.png)

      @include noDesktop
        width: 18.7rem
        height: 2.5rem

    &-obi
      width: 26.4rem
      height: 6.6rem
      margin-left: 42%
      background-image: url(../assets/images/clients/obi.png)

      @include noDesktop
        width: 15.6rem
        height: 3.9rem

    &-open
      width: 43.2rem
      height: 6.8rem
      margin-left: 20.4%
      background-image: url(../assets/images/clients/open.png)

      @include noDesktop
        width: 25.6rem
        height: 4rem

    &-pegout
      opacity: .6
      width: 29.8rem
      height: 21rem
      margin-left: 23.3%
      background-image: url(../assets/images/clients/pegout.png)

      @include noDesktop
        width: 17.9rem
        height: 12.6rem

    &-rocket
      width: 27.7rem
      height: 7.4rem
      margin-right: 19%
      background-image: url(../assets/images/clients/rocket.png)

      @include noDesktop
        width: 16.4rem
        height: 4.4rem


    &-sinlight
      width: 31.7rem
      height: 3.8rem
      margin-right: 24.6%
      background-image: url(../assets/images/clients/sinlight.png)

      @include noDesktop
        width: 18.8rem
        height: 2.2rem

    &-worldclass
      width: 19.6rem
      height: 6.4rem
      margin-left: 40.2%
      background-image: url(../assets/images/clients/worldclass.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-connected
      width: 25.1rem
      height: 5.9rem
      margin-left: 0
      background-image: url(../assets/images/clients/connected.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-conscience
      opacity: .6
      width: 22.4rem
      height: 6.4rem
      margin-left: -40%
      background-image: url(../assets/images/clients/conscience.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-intersection
      width: 45.4rem
      height: 14.2rem
      margin-left: 0
      background-image: url(../assets/images/clients/intersection.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-google
      width: 21rem
      height: 7.1rem
      margin-left: 25%
      background-image: url(../assets/images/clients/google.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-mvideo
      width: 22.6rem
      height: 6.7rem
      margin-left: 10%
      background-image: url(../assets/images/clients/mvideo.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-aliexpress
      width: 28.6rem
      height: 6.9rem
      margin-left: -30%
      background-image: url(../assets/images/clients/aliexpress.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-alfa
      width: 37.8rem
      height: 11.2rem
      margin-left: -41%
      background-image: url(../assets/images/clients/alfa.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem


    &-fromhands
      width: 24.8rem
      height: 5.8rem
      margin-left: 17%
      background-image: url(../assets/images/clients/fromhands.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-samsung
      width: 39.6rem
      height: 6.2rem
      margin-left: 20%
      background-image: url(../assets/images/clients/samsung.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-binbank
      width: 37.3rem
      height: 6.7rem
      margin-left: -20%
      background-image: url(../assets/images/clients/binbank.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-sminex
      opacity: .6
      width: 33rem
      height: 7.1rem
      margin-left: 0
      background-image: url(../assets/images/clients/sminex.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-leader
      width: 27.8rem
      height: 6.4rem
      margin-left: -40%
      background-image: url(../assets/images/clients/leader.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-rolf
      width: 29.2rem
      height: 8.6rem
      margin-left: -30%
      background-image: url(../assets/images/clients/rolf.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-vw
      width: 17rem
      height: 16.4rem
      margin-left: 40%
      background-image: url(../assets/images/clients/vw.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-pfizer
      width: 23.2rem
      height: 13.2rem
      margin-left: -10%
      background-image: url(../assets/images/clients/pfizer.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-loreal
      opacity: .6
      width: 23rem
      height: 7.2rem
      margin-left: 30%
      background-image: url(../assets/images/clients/loreal.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-rigla
      width: 32.1rem
      height: 8.6rem
      margin-left: 20%
      background-image: url(../assets/images/clients/rigla.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-inventive
      width: 12rem
      height: 12rem
      margin-left: -40%
      background-image: url(../assets/images/clients/inventive.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-rivgosh
      width: 23.1rem
      height: 4.5rem
      margin-left: -20%
      background-image: url(../assets/images/clients/rivgosh.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-mic
      width: 23.5rem
      height: 8.3rem
      margin-left: 30%
      background-image: url(../assets/images/clients/mic.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem

    &-children-world
      width: 21rem
      height: 7.4rem
      margin-left: 0
      background-image: url(../assets/images/clients/children-world.png)

      @include noDesktop
        width: 14.2rem
        height: 9.1rem
</style>
