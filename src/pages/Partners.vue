<template>
  <div class="partners" v-bind:class="'partners--position-' + activePartner">
    <div class="one-partner one-partner-1">
      <a
              href="http://reactive-agency.ru/"
              target="_blank"
              onclick=""
              @click.stop="setActivePartner(1, $event)"
              v-bind:class="{'one-partner__logo--active': activePartner === 1}"
              class="one-partner__logo one-partner__logo-1"
      >
        <div class="one-partner__logo-bg one-partner__logo-bg-1"></div>
      </a>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 1}">
        С 2013 года мы тесно сотрудничаем с агентством Reactive.
        Качественная экспертиза во всех видах таргетированной
        рекламы и и постоянно растущая команда специалистов помогли
        нам реализовать много совместных проектов.
      </div>
    </div>
    <div class="one-partner one-partner-2">
      <a
              href="http://www.e-promo.ru/"
              target="_blank"
              onclick=""
              @click.stop="setActivePartner(2, $event)"
              v-bind:class="{'one-partner__logo--active': activePartner === 2}"
              class="one-partner__logo one-partner__logo-2"
      >
        <div class="one-partner__logo-bg one-partner__logo-bg-2"></div>
      </a>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 2}">
        Digital Performance Marketing Agency с
        офисами в Москве и Нижнем Новгороде.
        Специализируется на комплексных
        решениях в интернет-маркетинге для
        разных отраслей.
      </div>
    </div>
    <div class="one-partner one-partner-3">
      <a
              href="https://biplane.ru/"
              target="_blank"
              onclick=""
              @click.stop="setActivePartner(3, $event)"
              v-bind:class="{'one-partner__logo--active': activePartner === 3}"
              class="one-partner__logo one-partner__logo-3"
      >
        <div class="one-partner__logo-bg one-partner__logo-bg-3"></div>
      </a>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 3}">
        Маркетинговое агентство Биплан помогает бизнесу расти и зарабатывать с помощью комбинации различных маркетинговых каналов.
        Специализация: контекстная и таргетированная реклама, SEO и аналитика.
      </div>
    </div>
    <div class="one-partner one-partner-4">
      <a
              href="http://www.tactio.ru/"
              target="_blank"
              onclick=""
              @click.stop="setActivePartner(4, $event)"
              v-bind:class="{'one-partner__logo--active': activePartner === 4}"
              class="one-partner__logo one-partner__logo-4"
      >
        <div class="one-partner__logo-bg one-partner__logo-bg-4"></div>
      </a>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 4}">
        Агентство мультиканальной интернет-рекламы, на рынке с 2007 года. Специализируется на клиентах финансового сектора и недвижимости.ко
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partners',
  data () {
    return {
      activePartner: 2
    }
  },
  methods: {
    setActivePartner (active, $event) {
      if (this.activePartner !== active) {
        $event.preventDefault()
        this.activePartner = active
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../assets/styles/mixins"
  $one_column: 100% / 36
  $one_tablet_row: 100% / 11

  .partners
    display: flex
    position: relative
    flex-flow: row nowrap

    @include desktop
      overflow: hidden
      flex-grow: 1
      padding: calc(50vh - 10rem) 0 5rem
      justify-content: space-between

      &--position-2 .one-partner-4 .one-partner__logo::after
        white-space: initial

      &--position-1 .one-partner-1,
      &--position-2 .one-partner-2,
      &--position-3 .one-partner-3,
      &--position-4 .one-partner-4
        order: 2
        flex: 0 0 #{$one_column * 12}

      &--position-1 .one-partner-2,
      &--position-2 .one-partner-3,
      &--position-3 .one-partner-4,
      &--position-4 .one-partner-1
        order: 3

      &--position-1 .one-partner-3,
      &--position-2 .one-partner-4,
      &--position-3 .one-partner-1,
      &--position-4 .one-partner-2
        order: 4

        .one-partner__text
          position: absolute

      &--position-1 .one-partner-4,
      &--position-2 .one-partner-1,
      &--position-3 .one-partner-2,
      &--position-4 .one-partner-3
        order: 1
        flex: 0 0 #{$one_column * 10}

    @include mobile
      flex-flow: column nowrap
      transform: rotate(-90deg) translateY(100%)
      transform-origin: 0 100%

      &--position-1 .one-partner-1,
      &--position-2 .one-partner-2,
      &--position-3 .one-partner-3,
      &--position-4 .one-partner-4
        transform: rotate(90deg) translateX(100%)
        transform-origin: 100% 0
        left: 22rem
        top: 0
        width: 66.66%

    @include noDesktop
      &--position-1 .one-partner-1,
      &--position-2 .one-partner-2,
      &--position-3 .one-partner-3,
      &--position-4 .one-partner-4
        position: absolute

        .one-partner__text
          visibility: visible
          position: relative

        .one-partner__logo
          &-1
            height: 3.4rem

          &-2
            height: 2.8rem

          &-3
            height: 3.5rem

    @include tablet
      justify-content: flex-start

      &--position-1 .one-partner-1,
      &--position-2 .one-partner-2,
      &--position-3 .one-partner-3,
      &--position-4 .one-partner-4
        left: 0
        margin: 0
        bottom: 13rem

        .one-partner__logo
          mask-position: center bottom

    @include tablet('portrait')
      align-items: flex-end
      flex: 1.4 0 #{ $one_tablet_row * 6 }

      &--position-1 .one-partner-1,
      &--position-2 .one-partner-2,
      &--position-3 .one-partner-3,
      &--position-4 .one-partner-4
        top: 0
        bottom: auto

        .one-partner__text
          width: 66.66%

  .one-partner
    @include desktop
      position: relative

    @include tablet
      margin-right: $one_column * 3

    @include tablet('portrait')
      margin-right: $one_column * 4

      &-1,
      &-2,
      &-3
        order: 1

      &-4
        order: 0

    &__logo
      display: block
      cursor: pointer
      position: relative
      text-decoration: none

      @include desktop
        height: 5.9rem

      @include noDesktop
        height: 5.4rem

      @include mobile
        margin-bottom: 2.1rem

      &::after
        top: 100%
        opacity: .66
        font-size: 1rem
        white-space: nowrap
        padding-top: .2rem
        position: absolute
        content: 'перейти на сайт'

        @include mobile
          opacity: 0

      &-bg
        width: 100%
        height: 100%
        background: no-repeat center center / contain

        &-1
          background-image: url(../assets/images/partners/reactive_logo2.svg?t=1)

        &-2
          background-image: url(../assets/images/partners/e-promo.svg?t=1)

        &-3
          background-image: url(../assets/images/partners/biplane.svg?t=1)

        &-4
          background-image: url(../assets/images/partners/tactio2.svg?t=1)

      &-1
        width: 17.2rem

      &-2
        width: 11.2rem

      &-3
        width: 14.3rem

      &-4
        width: 5.3rem

        @include tablet
          width: 4.9rem

      &:hover::after
        color: #0A0AE2

      &--active::after
        opacity: 1
        color: #0A0AE2

      &:hover .one-partner__logo-bg,
      &--active .one-partner__logo-bg
        background: #0A0AE2
        mask: no-repeat center center / contain

        &.one-partner__logo-bg-1
          mask-image: url(../assets/images/partners/reactive_logo2.svg?t=1)

        &.one-partner__logo-bg-2
          mask-image: url(../assets/images/partners/e-promo.svg?t=1)

        &.one-partner__logo-bg-3
          mask-image: url(../assets/images/partners/biplane.svg?t=1)

        &.one-partner__logo-bg-4
          mask-image: url(../assets/images/partners/tactio2.svg?t=1)

    &__text
      opacity: 0
      color: #0C0C0C
      letter-spacing: 0

      @include desktop
        margin-top: 3rem
        font-size: 1.3rem
        line-height: 2.2rem

      @include noDesktop
        position: absolute
        visibility: hidden

      @include tablet
        left: 0
        bottom: 0
        width: 50%
        flex: 0 0 50%
        font-size: 1.6rem
        line-height: 2.4rem
        margin-top: 1.9rem

      @include mobile
        font-size: 1.2rem
        line-height: 1.8rem
        margin-top: 2.1rem

      &--active
        opacity: 1

        @include desktop
          transition: opacity .2s linear
          padding-right: $one_column * 3
</style>
