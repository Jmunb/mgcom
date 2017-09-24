<template>
  <div class="partners" v-bind:class="'partners--position-' + activePartner">
    <div class="one-partner one-partner-1">
      <div
              @click.stop="activePartner = 1"
              v-bind:class="{'one-partner__logo--active': activePartner === 1}"
              class="one-partner__logo one-partner__logo-1"
      ></div>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 1}">
        Биплан помогает бизнесу зарабатывать
        и достигать целей. Комбинируют каналы
        маркетинговых коммуникаций, специализи-
        руются на SEO и контекстной рекламе.
        Отчитываются за итоговые показатели
        прибыли.
      </div>
    </div>
    <div class="one-partner one-partner-2">
      <div
              @click.stop="activePartner = 2"
              v-bind:class="{'one-partner__logo--active': activePartner === 2}"
              class="one-partner__logo one-partner__logo-2"
      ></div>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 2}">
        Digital Performance Marketing Agency с
        офисами в Москве и Нижнем новгороде.
        Специализируется на комплексных
        решениях в интернет-маркетинге для
        разных отраслей.
      </div>
    </div>
    <div class="one-partner one-partner-3">
      <div
              @click.stop="activePartner = 3"
              v-bind:class="{'one-partner__logo--active': activePartner === 3}"
              class="one-partner__logo one-partner__logo-3"
      ></div>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 3}">
        Биплан помогает бизнесу зарабатывать
        и достигать целей. Комбинируют каналы
        маркетинговых коммуникаций, специализи-
        руются на SEO и контекстной рекламе.
        Отчитываются за итоговые показатели
        прибыли.
      </div>
    </div>
    <div class="one-partner one-partner-4">
      <div
              @click.stop="activePartner = 4"
              v-bind:class="{'one-partner__logo--active': activePartner === 4}"
              class="one-partner__logo one-partner__logo-4"
      ></div>
      <div class="one-partner__text" v-bind:class="{'one-partner__text--active': activePartner === 4}">
        Digital Performance Marketing Agency с
        офисами в Москве и Нижнем новгороде.
        Специализируется на комплексных
        решениях в интернет-маркетинге для
        разных отраслей.
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
      justify-content: space-between
      padding-top: calc(50vh - 20rem)

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
      cursor: pointer
      background: #000
      mask: no-repeat center center / contain
      transition: background-color .2s linear

      @include desktop
        height: 5.9rem

      @include noDesktop
        height: 5.4rem

      @include mobile
        margin-bottom: 2.1rem

      &:hover,
      &--active
        background-color: #0A0AE2

      &-1
        width: 17.2rem
        mask-image: url(../assets/images/partners/1.png)

      &-2
        width: 11.2rem
        mask-image: url(../assets/images/partners/2.png)

      &-3
        width: 14.3rem
        mask-image: url(../assets/images/partners/3.png)

      &-4
        width: 5.3rem
        mask-image: url(../assets/images/partners/4.png)

        @include tablet
          width: 4.9rem

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
