<template>
    <div class="app" v-bind:class="{cpa_link:isCPAPage, cpa_target:isTargetPage, app__showbg:showBg, app__showhm:showHm}">
        <div class="bgimage">
        </div>
        <header>
            <router-link to="/" class="logo" data-cost="Р0,66">
                <svg width="17rem" height="3.4rem" viewBox="0 0 170 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-80.000000, -70.000000)">
                            <g transform="translate(80.000000, 70.000000)">
                                <g class="logo--first-letter">
                                    <path d="M0,0.0305396213 C2.07924576,0.0305396213 3.97442099,-0.0509075887 5.84330043,0.0842207369 C6.346677,0.121242196 6.9383323,0.730245198 7.25012525,1.2226306 C9.97737443,5.55599239 12.644519,9.91897134 15.3323245,14.2726949 C15.5915258,14.6891863 15.8638751,15.0982735 16.2432858,15.6795104 C16.5888876,15.188976 16.8818979,14.8187614 17.1241948,14.4226318 C19.8326613,10.0152271 22.5505191,5.6170778 25.2195419,1.18746022 C25.7304315,0.335966659 26.3089389,-0.0472054428 27.3401096,0.00462459991 C29.0512143,0.0897739558 30.7679538,0.0286885483 32.5748503,0.0286885483 L32.5748503,33 L26.2281733,33 L26.2281733,12.2513233 C26.1023292,12.2161529 25.976485,12.1828336 25.8525191,12.1495142 C25.5538741,12.5660057 25.2326898,12.9713906 24.9659753,13.4045417 C22.4209184,17.523179 19.8833746,21.6473696 17.3401959,25.767858 C16.3710082,27.3357168 16.1643984,27.3338657 15.1707932,25.7271344 C12.6839626,21.7029018 10.2084017,17.6712649 7.72157121,13.6433301 C7.38723901,13.1009657 7.01909794,12.57341 6.36733798,12.1161949 L6.36733798,32.9981489 L0,32.9981489 L0,0.0305396213 Z" id="Fill-1" fill="#0A0AE2"></path>
                                    <path d="M66.9716874,7.4627393 C65.0691613,8.56170299 63.3563405,9.55260191 61.6508161,10.5361744 C58.0792474,5.62197513 51.826266,5.12377826 47.623562,7.27225226 C43.2019672,9.52695942 41.0495407,14.7470369 42.3774784,19.9103346 C43.6342766,24.8172075 48.0923532,27.9858861 53.4807158,27.7990623 C58.3510368,27.6305545 61.8751792,25.2183292 62.6358249,21.3481455 L53.059351,21.3481455 L53.059351,15.9101068 L68.9106954,15.9101068 C70.176614,21.4763579 67.4751363,28.0683084 62.6449453,31.2626295 C54.5459846,36.6200775 42.6200824,33.8396994 37.943115,25.3117412 C34.6378634,19.3022414 34.8731711,13.1572028 38.6472138,7.43526521 C42.3774784,1.77377063 47.906296,-0.48826296 54.5696977,0.0868613684 C59.7701791,0.537436479 63.8743822,2.94416695 66.9716874,7.4627393" id="Fill-3" fill="#0A0AE2"></path>
                                </g>
                                <g class="logo--last-letter">
                                    <path d="M164.049575,31 C164.049575,26.6622035 164.055062,22.4414964 164.04043,18.2226188 C164.038601,17.4688557 164.016653,16.7004565 163.886795,15.9595001 C163.515509,13.8445727 162.315688,12.7596662 160.30928,12.6206226 C158.354084,12.4870675 156.640316,13.5792921 156.111736,15.5057787 C155.81361,16.5833671 155.727647,17.7451135 155.713015,18.8739286 C155.66912,22.8769226 155.698383,26.8817461 155.698383,30.9890229 L149.706595,30.9890229 C149.706595,30.4474844 149.712082,29.8803326 149.706595,29.3131808 C149.702937,25.1400412 149.761465,20.9632426 149.664529,16.7882735 C149.604172,14.2525561 148.349481,12.9023689 146.16749,12.6444063 C144.212294,12.4102275 142.335745,13.5427016 141.748638,15.4673587 C141.465143,16.3821197 141.359062,17.3792091 141.346259,18.3415377 C141.302363,21.9749683 141.327969,25.6083988 141.327969,29.2418294 L141.327969,30.9743867 L135.389222,30.9743867 L135.389222,7.73579898 L141.278586,7.73579898 C141.30785,8.40540401 141.338943,8.99999864 141.38101,9.87999869 C143.226466,7.90411499 145.360903,6.96191119 147.899548,7.0039902 C150.511353,7.04789872 152.627501,8.02303392 154.207752,10.2989592 C156.219647,7.76690085 158.873519,6.84665131 161.975495,7.0204559 C166.083418,7.25097566 169.571311,10.2221193 169.827371,14.5251549 C170.158419,19.9661532 169.911505,25.4437419 169.911505,31 L164.049575,31 Z" id="Fill-6" fill="#000000"></path>
                                    <path d="M103.824854,7.64667383 C102.031299,8.67191554 100.237744,9.69532319 98.4591505,10.7058924 C93.852762,5.31557863 86.8001063,4.54710587 82.0216562,8.82230878 C77.6266042,12.7600439 77.5106497,20.7198812 81.741121,24.8850403 C85.2889565,28.3752638 93.6713492,29.787493 98.4797231,23.2875706 C100.256446,24.2981398 102.046261,25.3142112 103.832335,26.3284486 C100.245225,32.4798988 92.3116885,35.3593791 84.75968,33.3822582 C77.1534348,31.394133 72.2234957,24.8171799 72.2758622,16.7381285 C72.3263586,9.00204704 77.3834737,2.45443897 84.7540693,0.58736194 C92.3547039,-1.33840514 100.394844,1.58876082 103.824854,7.64667383" id="Fill-8" fill="#0A0AE2"></path>
                                    <path d="M125.313687,19.62661 C125.369642,15.8745045 122.824563,13.0507168 119.290332,12.9471595 C115.674875,12.8436021 112.877092,15.6156111 112.803086,19.3658673 C112.730885,23.1050282 115.431197,26.0009361 119.035824,26.0527148 C122.570055,26.0989458 125.255926,23.3528262 125.313687,19.62661 M106.886228,19.4546308 C106.891643,12.440468 112.23631,6.99261057 119.115245,7.00000752 C125.920174,7.00555524 131.353287,12.5865579 131.317186,19.5378465 C131.286501,26.4965321 125.831728,32.0313038 119.035824,31.9998667 C112.174939,31.9702789 106.886228,26.511326 106.886228,19.4546308" id="Fill-10" fill="#000000"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </router-link>
        </header>
        <router-view :history="history"></router-view>
        <footer>
            <div class="first-link">
                <router-link to="/contacts" class="link" data-cost="Р0,75">Контакты</router-link>
                <router-link to="/customers" class="link" data-cost="Р0,03">Клиенты</router-link>
                <router-link to="/vacancies" class="link" data-cost="Р1,56">Вакансии</router-link>
            </div>
            <div class="last-links">
                <div class="links-wrapper">
                    <router-link to="/team" class="link link--nested" data-cost="Р0,07">Команда</router-link>
                    <router-link to="/partners" class="link link--nested" data-cost="Р0,12">Партнеры</router-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import router from './router'

export default {
  name: 'app',
  data () {
    return {
      path: '',
      history: [],
      showBg: false,
      showHm: false
    }
  },
  created () {
    this.$root.$on('showHm', (state) => {
      this.showHm = state
    })
    this.$root.$on('showBg', (state) => {
      this.showBg = state
    })
  },
  mounted () {
    router.afterEach((to, from) => {
      window.scrollTo(0, 0)
      this.path = to.path
      this.history.push({to, from})
    })
    this.path = router.history.current.path
  },
  computed: {
    isCPAPage () {
      return this.path === '/cpa'
    },
    isTargetPage () {
      return this.path === '/target'
    }
  }
}
</script>

<style src="./assets/styles/main.scss" lang="sass"></style>
<style lang="sass" scoped>
    .bgimage
        top: 0
        left: 0
        right: 0
        bottom: 0
        position: fixed
        pointer-events: none

        &::before,
        &::after
            display: block
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            opacity: 0
            transition: opacity .3s linear

        &::before
            background: no-repeat center center / cover url(assets/images/mobile_bg.png)

        &::after
            background: #000


    .app
        display: flex
        min-height: 100vh
        flex-flow: column nowrap
        padding: 7rem 4.4rem 6rem 8rem
        justify-content: space-between

        header,
        footer a
            transition: background .4s linear, color .4s linear

        &__showbg
            header,
            footer a
                color: #fff

            .logo--first-letter,
            .logo--last-letter
                fill: #fff

            .bgimage::before
                opacity: 1

        &__showhm
            header,
            footer a
                color: #2a2fe3

            .logo--last-letter
                fill: #0A0AE2

            .bgimage::after
                opacity: 1

        &.cpa_target
            height: 100vh
            overflow: hidden

            .link
                line-height: 2.5rem

            .first-link
                margin-left: -1.5rem
                flex-flow: column nowrap

            .first-link,
            .last-links
                flex: 0 0

            .links-wrapper
                transform: rotate(-90deg)

    header, footer
        display: flex
        position: relative
        flex-flow: row nowrap
        justify-content: space-between

    header
        flex: 0 0 3.4rem
        align-items: flex-start

    header::after
        margin-top: -.1rem
        font-size: 1.3rem
        padding-right: 3.5rem
        content: 'A Performance Agency'
        letter-spacing: 0.05rem
        line-height: 1.3rem

    footer
        margin: 5.2rem 0 -.1rem -.1rem
        align-items: flex-end

    .first-link
        display: flex
        flex: 0 0 75%
        margin: 0 -3rem 0 -1.5rem
        flex-flow: row nowrap
        justify-content: space-between

    .last-links
        flex: 0 0 25%
        display: flex
        justify-content: flex-end

    .links-wrapper
        transform-origin: 0 50%
        transform: rotate(-90deg) translate(-3.8rem, 6.1rem)


    .logo
        width: 17rem
        height: 3.4rem
        display: block
        position: relative
        text-decoration: none

        &--first-letter,
        &--last-letter
            transition: fill .4s linear

        &--first-letter
            fill: #0A0AE2

        &--last-letter
            fill: #000000


    .link
        letter-spacing: .05rem
        font-size: 1.3rem
        position: relative
        line-height: 2.8rem
        display: inline-block
        border-radius: 1.5rem
        background: transparent
        padding: .5rem 3rem 0 1.5rem

        &.router-link-active
            color: #fff
            background: #29292d

        &--nested
            display: block

            &:first-child::before
                top: -.2rem

            &:last-child::before
                top: .2rem

        &::after
            opacity: 0
            transition: opacity .3s linear
            color: #fff
            font-size: 1.5rem
            line-height: 2rem
            background: #0202e6
            border-radius: 5px
            padding: .5rem 1rem .1rem .5rem
            position: absolute
            margin: -1rem 0 0 1rem
            content: attr(data-cost)


    .logo::before
        opacity: 0
        pointer-events: none
        transition: opacity .3s linear
        color: #fff
        font-size: 1.8rem
        line-height: 3rem
        background: #0202e6
        border-radius: 5px
        padding: .5rem 1rem .1rem .5rem
        position: absolute
        left: 120%
        content: attr(data-cost)

    .cpa_link .link::after,
    .cpa_link .logo::before
        opacity: 1
        transition-delay: .5s
</style>
