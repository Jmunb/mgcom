<template>
    <div class="app" v-bind:class="'app--route-' + $router.currentRoute.name">
        <div class="bg"></div>
        <header class="header">
            <router-link to="/" class="logo">
                <svg viewBox="0 0 170 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g class="logo__first-letter">
                        <path d="M0,0.0305396213 C2.07924576,0.0305396213 3.97442099,-0.0509075887 5.84330043,0.0842207369 C6.346677,0.121242196 6.9383323,0.730245198 7.25012525,1.2226306 C9.97737443,5.55599239 12.644519,9.91897134 15.3323245,14.2726949 C15.5915258,14.6891863 15.8638751,15.0982735 16.2432858,15.6795104 C16.5888876,15.188976 16.8818979,14.8187614 17.1241948,14.4226318 C19.8326613,10.0152271 22.5505191,5.6170778 25.2195419,1.18746022 C25.7304315,0.335966659 26.3089389,-0.0472054428 27.3401096,0.00462459991 C29.0512143,0.0897739558 30.7679538,0.0286885483 32.5748503,0.0286885483 L32.5748503,33 L26.2281733,33 L26.2281733,12.2513233 C26.1023292,12.2161529 25.976485,12.1828336 25.8525191,12.1495142 C25.5538741,12.5660057 25.2326898,12.9713906 24.9659753,13.4045417 C22.4209184,17.523179 19.8833746,21.6473696 17.3401959,25.767858 C16.3710082,27.3357168 16.1643984,27.3338657 15.1707932,25.7271344 C12.6839626,21.7029018 10.2084017,17.6712649 7.72157121,13.6433301 C7.38723901,13.1009657 7.01909794,12.57341 6.36733798,12.1161949 L6.36733798,32.9981489 L0,32.9981489 L0,0.0305396213 Z"/>
                        <path d="M66.9716874,7.4627393 C65.0691613,8.56170299 63.3563405,9.55260191 61.6508161,10.5361744 C58.0792474,5.62197513 51.826266,5.12377826 47.623562,7.27225226 C43.2019672,9.52695942 41.0495407,14.7470369 42.3774784,19.9103346 C43.6342766,24.8172075 48.0923532,27.9858861 53.4807158,27.7990623 C58.3510368,27.6305545 61.8751792,25.2183292 62.6358249,21.3481455 L53.059351,21.3481455 L53.059351,15.9101068 L68.9106954,15.9101068 C70.176614,21.4763579 67.4751363,28.0683084 62.6449453,31.2626295 C54.5459846,36.6200775 42.6200824,33.8396994 37.943115,25.3117412 C34.6378634,19.3022414 34.8731711,13.1572028 38.6472138,7.43526521 C42.3774784,1.77377063 47.906296,-0.48826296 54.5696977,0.0868613684 C59.7701791,0.537436479 63.8743822,2.94416695 66.9716874,7.4627393"/>
                    </g>
                    <g class="logo__last-letter">
                        <path d="M164.049575,31 C164.049575,26.6622035 164.055062,22.4414964 164.04043,18.2226188 C164.038601,17.4688557 164.016653,16.7004565 163.886795,15.9595001 C163.515509,13.8445727 162.315688,12.7596662 160.30928,12.6206226 C158.354084,12.4870675 156.640316,13.5792921 156.111736,15.5057787 C155.81361,16.5833671 155.727647,17.7451135 155.713015,18.8739286 C155.66912,22.8769226 155.698383,26.8817461 155.698383,30.9890229 L149.706595,30.9890229 C149.706595,30.4474844 149.712082,29.8803326 149.706595,29.3131808 C149.702937,25.1400412 149.761465,20.9632426 149.664529,16.7882735 C149.604172,14.2525561 148.349481,12.9023689 146.16749,12.6444063 C144.212294,12.4102275 142.335745,13.5427016 141.748638,15.4673587 C141.465143,16.3821197 141.359062,17.3792091 141.346259,18.3415377 C141.302363,21.9749683 141.327969,25.6083988 141.327969,29.2418294 L141.327969,30.9743867 L135.389222,30.9743867 L135.389222,7.73579898 L141.278586,7.73579898 C141.30785,8.40540401 141.338943,8.99999864 141.38101,9.87999869 C143.226466,7.90411499 145.360903,6.96191119 147.899548,7.0039902 C150.511353,7.04789872 152.627501,8.02303392 154.207752,10.2989592 C156.219647,7.76690085 158.873519,6.84665131 161.975495,7.0204559 C166.083418,7.25097566 169.571311,10.2221193 169.827371,14.5251549 C170.158419,19.9661532 169.911505,25.4437419 169.911505,31 L164.049575,31 Z"/>
                        <path d="M103.824854,7.64667383 C102.031299,8.67191554 100.237744,9.69532319 98.4591505,10.7058924 C93.852762,5.31557863 86.8001063,4.54710587 82.0216562,8.82230878 C77.6266042,12.7600439 77.5106497,20.7198812 81.741121,24.8850403 C85.2889565,28.3752638 93.6713492,29.787493 98.4797231,23.2875706 C100.256446,24.2981398 102.046261,25.3142112 103.832335,26.3284486 C100.245225,32.4798988 92.3116885,35.3593791 84.75968,33.3822582 C77.1534348,31.394133 72.2234957,24.8171799 72.2758622,16.7381285 C72.3263586,9.00204704 77.3834737,2.45443897 84.7540693,0.58736194 C92.3547039,-1.33840514 100.394844,1.58876082 103.824854,7.64667383"/>
                        <path d="M125.313687,19.62661 C125.369642,15.8745045 122.824563,13.0507168 119.290332,12.9471595 C115.674875,12.8436021 112.877092,15.6156111 112.803086,19.3658673 C112.730885,23.1050282 115.431197,26.0009361 119.035824,26.0527148 C122.570055,26.0989458 125.255926,23.3528262 125.313687,19.62661 M106.886228,19.4546308 C106.891643,12.440468 112.23631,6.99261057 119.115245,7.00000752 C125.920174,7.00555524 131.353287,12.5865579 131.317186,19.5378465 C131.286501,26.4965321 125.831728,32.0313038 119.035824,31.9998667 C112.174939,31.9702789 106.886228,26.511326 106.886228,19.4546308"/>
                    </g>
                </svg>
            </router-link>
            <router-link
                    to="/"
                    class="mobile-logo"
                    v-bind:class="{'mobile-logo--rotate': hideLogo}"
            >A&nbsp;Performance Agency</router-link>
        </header>

        <router-view :history="history"></router-view>

        <div class="footer__wrapper">
            <footer class="footer">
                <router-link to="/contacts" class="footer__link footer__link-1 footer__link--d">Контакты</router-link>
                <router-link to="/customers" class="footer__link footer__link-2 footer__link--d">Клиенты</router-link>
                <router-link to="/vacancies" class="footer__link footer__link-3">Вакансии</router-link>
                <div class="footer__first-links">
                    <router-link to="/contacts" class="footer__link footer__link-1">Контакты</router-link>
                    <router-link to="/customers" class="footer__link footer__link-2">Клиенты</router-link>
                </div>
                <div class="footer__last-links">
                    <div class="footer__transform-wrapper">
                        <router-link to="/team" class="footer__link footer__link-4">Команда</router-link>
                        <router-link to="/partners" class="footer__link footer__link-5">Партнеры</router-link>
                    </div>
                </div>
            </footer>
        </div>
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
      hideLogo: false
    }
  },
  created () {
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

    let $chatWrapper = document.querySelector('.logo')

    window.addEventListener('scroll', () => {
      this.hideLogo = $chatWrapper.getBoundingClientRect().top < -30
    })
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

<style lang="sass">
    $one_column: 100% / 36

    @import "assets/styles/mixins"

    .page-content
        font-size: 2.8rem
        letter-spacing: 0
        line-height: 4rem

        @include desktop
            padding-left: $one_column
            width: $one_column * 24
            align-self: center

        @include noDesktop
            width: 75%

        @include bigDesktop
            font-size: 3.6rem
            line-height: 4.8rem

        @include mobile
            font-size: 1.8rem
            line-height: 2.6rem

    .page-absolute
        z-index: 1
        display: flex
        flex-flow: column nowrap
        justify-content: flex-start
        align-items: center

        @include desktop
            margin: 0 -8rem

        @include tablet('portrait')
            margin: 0 -7rem 0 -7.2rem

        @include tablet('landscape')
            margin: 0 -8rem

        @include mobile
            padding: 1rem 0
            margin: 0 -3.5rem 0 -4rem
            overflow: hidden
</style>
<style lang="sass" scoped>
    @import "assets/styles/mixins"

    /**  Modifers  **/
    .app--route-team,
    .app--route-partners,
    .app--route-vacancies,
    .app--route-customers,
    .app--route-contacts
        .logo__first-letter,
        .logo__last-letter
            fill: #0A0AE2

    .app--route-contextus
        @include desktop
            overflow: hidden

            .footer
                font-size: 1.3rem
                letter-spacing: 0.05rem
                line-height: 1.3rem

                &__link-1,
                &__link-2,
                &__link-3
                    position: absolute
                    left: 0
                    bottom: 0
                    transform-origin: 0 100%

                &__link-1
                    transform: rotate(-90deg) translateY(100%)

                &__link-2
                    transform: rotate(-90deg) translateY(250%)

                &__link-3
                    transform: rotate(-90deg) translateY(400%)

                &__last-links
                    position: absolute
                    right: 0
                    border: 0

    .app--route-customers
        .logo,
        .footer,
        .mobile-logo
            z-index: 2

            @include noMobile
                position: fixed

        .logo
            @include desktop
                top: 7rem
                left: 8rem

            @include tablet('portrait')
                top: 7.9rem
                left: 7.2rem

            @include tablet('landscape')
                top: 7.1rem
                left: 8rem

        .mobile-logo
            @include desktop
                top: 7rem
                right: 8rem

            @include tablet('portrait')
                top: 7.9rem
                right: 7rem

            @include tablet('landscape')
                top: 7.1rem
                right: 8rem

        .footer
            height: 0

            @include desktop
                bottom: 6rem
                padding: 0 8rem

    .app--route-analitycs
        z-index: 0

    .app--route-seo .page-content
        @include mobile
            width: 100%

    /**  Page styles  **/
    .app
        display: flex
        min-height: 100vh
        position: relative
        flex-flow: column nowrap
        justify-content: space-between
        // background: red

        @include desktop
            padding: 7rem 8rem 6rem

        @include tablet('portrait')
            padding: 7.9rem 7rem 8rem 7.2rem

        @include tablet('landscape')
            padding: 7.1rem 8rem 7rem

        @include mobile
            padding: 5.1rem 3.5rem 4.5rem 4rem

    .bg
        top: 0
        left: 0
        right: 0
        bottom: 0
        position: fixed !important
        pointer-events: none

    .header
        position: relative

        @include desktop
            padding-bottom: 10rem

        @include tablet
            flex: 1 0 8.5rem

        @include mobile
            // flex: 1 0 21.4rem
            flex: 1 0 6rem

    .logo
        top: 0
        left: 0
        width: 17rem
        height: 3.4rem
        display: block
        position: absolute
        text-decoration: none

        @include mobile
            left: .2rem
            width: 15rem
            height: 3rem

        &__first-letter,
        &__last-letter
            transition: fill .4s linear

        &__first-letter
            fill: #0A0AE2

        &__last-letter
            fill: #000000

    .mobile-logo
        top: 0
        right: 0
        cursor: default
        font-size: 1.3rem
        line-height: 1.15
        position: absolute
        text-decoration: none
        letter-spacing: 0.05rem

        @include tablet
            top: -.2rem
            right: -.1rem

        @include mobile
            position: fixed
            top: 4.5rem
            right: 3.4rem
            width: 10.4rem
            font-size: 1.2rem
            line-height: 2rem
            transition: transform .1s linear
            transform-origin: 100% 100% 0

        &--rotate
            @include mobile
                color: #0909D4
                will-change: transform
                transform: rotate(-90deg) translate(3.6rem, .6rem)

    .footer
        bottom: 0
        display: flex
        font-size: 1.3rem
        align-items: flex-end
        letter-spacing: .05rem

        @include desktop
            left: 0
            width: 100%
            position: absolute
            line-height: 2.8rem
            flex-flow: row nowrap
            justify-content: space-between

        @include noDesktop
            position: fixed
            line-height: 2.3rem
            justify-content: flex-end
            flex-flow: row-reverse nowrap
            transform-origin: 100% 100% 0
            transform: rotate(-90deg) translateX(100%)

        @include tablet('landscape')
            right: 7.3rem
            bottom: 6.9rem

        @include tablet('portrait')
            right: 6.3rem
            bottom: 8.1rem

        @include mobile
            font-size: 1.2rem
            line-height: 2.2rem
            bottom: 4.9rem
            right: 2.7rem

        @include mobile('landscape')
            bottom: auto
            right: auto
            transform: rotate(0)
            position: relative
            padding-top: 5rem

        &__wrapper
            position: relative

            @include desktop
                padding-top: 10rem
                
        &__link--d
            @include noDesktop
                display: none

        &__first-links
            display: flex
            align-items: flex-start
            flex-flow: column nowrap
            
            @include desktop
                display: none

        &__last-links
            @include desktop
                display: flex
                flex-flow: row nowrap
                justify-content: flex-end
                line-height: 2.3rem

        &__first-links,
        &__last-links
            @include noDesktop
                margin-right: 7.5rem

            @include tablet('landscape')
                margin-right: 6rem

        &__transform-wrapper
            display: flex
            align-items: flex-start
            flex-flow: column nowrap

            @include desktop
                transform-origin: 100% 100% 0
                transform: rotate(-90deg) translate(8.8rem, .6rem)
</style>
