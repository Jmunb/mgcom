<template>
  <div class="wrapper">
    <div class="contacts">

      <div class="one-line">
        <a class="link" href="mailto:mgcom@mgcom.ru">mgcom@mgcom.ru</a>
      </div>

      <div class="one-line">
        <a class="link" href="callto://+74952133451">+7 (495) 213-34-51</a>
      </div>

      <div class="one-line">
        107031, Москва, Петровка, дом 15/13, строение 5, 4 этаж
      </div>

      <div class="one-line">
        5 километров от вас. Проложить маршрут на машине, метро или пеший.
      </div>
    </div>
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
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  flex-grow: 1
  display: flex
  padding: 5rem 0 7rem
  flex-flow: row nowrap
  align-items: flex-end
  justify-content: space-between

.contacts
  flex: 1 1
  margin-right: 10rem
  color: #000000
  font-size: 1.5rem

.map
  border: 0
  width: 100%
  height: 55vh
  background: no-repeat center center url(../assets/images/map-preloader.gif)

  &-wrapper
    flex: 2 1
    margin-right: 2rem

.one-line
  margin-top: 3rem
</style>
