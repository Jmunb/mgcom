<template>
  <div class="layout">
    <div class="view">
      <div class="view__menu-content" v-bind:class="{'view__menu--show':showMenu}">
        <router-link to="/contextus" class="link">контекстная реклама</router-link><br>
        <router-link to="/media" class="link">медийная реклама</router-link><br>
        <router-link to="/target" class="link">таргетированная реклама в социальных сетях</router-link><br>
        <router-link to="/cpa" class="link">CPA</router-link><br>
        <router-link to="/price-lists" class="link">прайс-площадки</router-link><br>
        <router-link to="/seo" class="link">SEO</router-link><br>
        <router-link to="/analitycs" class="link">веб-аналитика</router-link>
      </div>
      <div class="view__menu" v-on:click="toggleMenu">
        <div class="view__menu-separator"></div>
        <div class="view__menu-separator"></div>
        <div class="view__menu-separator"></div>
      </div>
      <div class="view__scroll-layout">
        <div class="view__canvas">
          <p>Вдруг он обратился к матушке: «Авдотья Васильевна, а сколько лет Петруше?»</p>
          <p>— Да вот пошел семнадцатый годок, — отвечала матушка. — Петруша родился в тот самый год, как окривела тетушка Настасья Гарасимовна, и когда еще...</p>
          <p>«Добро, — прервал батюшка, — пора его в службу. Полно ему бегать по девичьим да лазить на голубятни».</p>
          <p>Мысль о скорой разлуке со мною так поразила матушку, что она уронила ложку в кастрюльку, и слезы потекли по ее лицу. Напротив того, трудно описать мое восхищение. Мысль о службе сливалась во мне с мыслями о свободе, об удовольствиях петербургской жизни. Я воображал себя офицером гвардии, что, по мнению моему, было верхом благополучия человеческого.</p>
          <p>Батюшка не любил ни переменять свои намерения, ни откладывать их исполнение. День отъезду моему был назначен. Накануне батюшка объявил, что намерен писать со мною к будущему моему начальнику, и потребовал пера и бумаги.</p>
          <p>— Не забудь, Андрей Петрович, — сказала матушка, — поклониться и от меня князю Б.; я, дескать, надеюсь, что он не оставит Петрушу своими милостями.</p>
          <p>— Что за вздор! — отвечал батюшка нахмурясь. — К какой стати стану я писать к князю Б.?</p>
          <p>— Да ведь ты сказал, что изволишь писать к начальнику Петруши?</p>
          <p>— Ну, а там что?</p>
          <p>— Да ведь начальник Петрушин — князь Б. Ведь Петруша записан в Семеновский полк.</p>
          <div class="image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="sass" scoped>
  .link
    color: #fcfcff
    font-size: 1.3rem
    line-height: normal
    margin-bottom: 3rem
    display: inline-block
    position: relative

  .layout
    display: flex
    padding-right: 10rem
    padding-bottom: 5rem
    padding-top: 2rem
    flex-flow: row nowrap
    justify-content: flex-end

  .view
    width: 36.2rem
    height: 56.8rem
    overflow: hidden
    position: relative
    background: #ffffff
    border-radius: .5rem

    &__menu
      cursor: pointer
      top: 1.9rem
      right: 2.2rem
      width: 2.1rem
      height: 1.5rem
      position: absolute
      display: flex
      flex-flow: column nowrap
      justify-content: space-between

      &-separator
        width: 100%
        height: .3rem
        background: #a3a3a9

      &-content
        top: 0
        left: 0
        opacity: 0
        width: 100%
        overflow: hidden
        position: absolute
        padding-top: 3.4rem
        padding-left: 4.2rem
        pointer-events: none
        transition: opacity .2s ease-in

        &::before
          top: 0
          right: 0
          width: 300%
          height: 300%
          content: ''
          display: block
          background: #0909e2
          position: absolute
          border-radius: 50%
          transform: translate(50%, -50%) scale(0)
          transition: transform .3s ease-in

      &--show
        opacity: 1
        pointer-events: auto

        &::before
          transform: translate(50%, -50%) scale(1)

    &__scroll-layout
      height: 100%
      overflow-y: scroll
      width: calc(100% + 3rem)

    &__canvas
      width: 36.2rem
      font-size: 1.8rem
      padding: 3.7rem 5rem 3.7rem 4.2rem

  .image
    height: 18rem
    width: calc(100% + 9.2rem)
    margin: 0 -5rem 0 -4.2rem
    background: no-repeat center center / cover url(../../assets/images/displayAds/3.png)
</style>
