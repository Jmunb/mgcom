<template>
  <div class="content">
    <address class="address-wrapper">

      <div class="address">
        <p class="one-line">
          <a class="link" href="callto://+74952133451">8 (495) 213-34-51</a><br>
          <a class="link" href="mailto:mgcom@mgcom.ru">mgcom@mgcom.ru</a>
        </p>
      </div>

      <div class="address-route">
        <p class="one-line one-line--no-margin">
          107031, Москва,<br>
          Петровка 15/13, стр. 5,<br>
          4 этаж.
        </p>
      </div>
    </address>

    <div class="map-wrapper">
      <iframe
          class="map"
          frameborder="0"
          allowfullscreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4116.7725926648!2d37.61318038001519!3d55.76395284768151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a43bcb77a27%3A0x6061a9dd8f14608b!2z0J_QtdGC0YDQvtCy0LrQsCDRg9C7LiwgMTUvMTMg0YHRgtGA0L7QtdC90LjQtSA1LCDQnNC-0YHQutCy0LAsIDEyNTAwOQ!5e0!3m2!1sru!2sru!4v1502637867806"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style lang="sass" scoped>
  $one_column: 100% / 36
  $one_inner_column: 100% / 30
  $one_row_tablet_p: 100% / 44
  $one_row_tablet_l: 100% / 36
  $one_row_mobile: 100% / 52

  @import "../assets/styles/mixins"

  .content
    display: flex
    font-size: 1.3rem
    line-height: 2rem
    letter-spacing: .02rem

    @include desktop
      flex: 0 0 40vh
      align-self: center
      flex-flow: row nowrap
      width: $one_column * 30
      align-items: stretch
      justify-content: space-between

    @include noDesktop
      flex-flow: column nowrap
      justify-content: flex-end

    @include tablet
      width: $one_column * 24

    @include mobile
      flex-grow: 1
      width: $one_column * 27

  .address
    @include tablet
      padding-right: $one_inner_column * 4

    &-wrapper
      display: flex
      font-style: normal

      @include desktop
        flex-grow: 1
        flex-flow: column nowrap
        justify-content: space-between
        padding-right: $one_inner_column * 2

      @include tablet
        white-space: nowrap
        width: $one_column * 24
        flex-flow: row nowrap
        justify-content: flex-start

      @include tablet('portrait')
        padding-bottom: $one_row_tablet_p * 5

      @include tablet('landscape')
        padding-bottom: $one_row_tablet_l * 5

      @include mobile
        padding-bottom:
        flex-flow: column nowrap
        justify-content: flex-start
        padding-bottom: $one_row_mobile * 4

  .map
    border: 0
    width: 100%
    height: 100%
    background: no-repeat center center / 10rem url(../assets/images/spinner.gif)
    border-radius: .4rem

    &-wrapper
      @include desktop
        flex: 0 0 $one_inner_column * 18

      @include tablet('portrait')
        height: calc( (100vh - 15.9rem) * (6 / 11) )

      @include tablet('landscape')
        height: calc( (100vh - 14.1rem) * (4 / 9) )

      @include mobile
        height: calc( (100vh - 9.6rem) * (23 / 52) )

  .blue-link
    color: #0A0AE2

  .one-line
    margin: 0 0 2rem

    &:last-child
      @include tablet
        margin: 0

    &--no-margin
      margin: 0
</style>
