<template>
    <div class="hello">
        <router-link to="/contextus" class="link link__contextus"></router-link>
        <router-link to="/price-lists" class="link link__price-list"></router-link>
        <router-link to="/target" class="link link__social-networks">
            <video
                    loop="true"
                    muted="true"
                    autoplay="true"
                    class="link__video"
                    src="../../assets/videos/15876364.mp4"
            ></video>
            <div class="social-networks__content">
                <div class="social-networks__first">и</div>
                <div class="social-networks__last">
                    paid<br>
                    social.
                </div>
            </div>
        </router-link>
        <router-link to="/seo" class="link link__seo"></router-link>
        <router-link to="/cpa" class="link link__cpa"></router-link>
        <router-link to="/analitycs" class="link link__heat-map"></router-link>
        <router-link to="/media" class="link link__display-ads">
            <video
                    loop="true"
                    muted="true"
                    autoplay="true"
                    class="link__video"
                    src="../../assets/videos/blue.mp4"
            ></video>
            <div class="display-ads__first">Медийная</div>
            <div class="display-ads__last">
                реклама работает
                на знание и лояльность целевой аудитории.
            </div>
        </router-link>
        <router-link to="/mobile-ads" class="link link__mobile-ads">
            <video
                    loop="true"
                    muted="true"
                    autoplay="true"
                    class="link__video"
                    src="../../assets/videos/silver.mp4"
            ></video>
            <div class="mobile-ads__first">
                <div class="mobile-ads__first-1">нужных</div>
                <div class="mobile-ads__first-2">пользователей</div>
                <div class="mobile-ads__first-3">десктопов и</div>
            </div>
            <div class="mobile-ads__last">
                Мобильных,
                <span>®</span>
            </div>
        </router-link>
        <div class="link block-1"></div>
        <div class="link block-2"></div>
        <div class="link block-3"></div>
        <div class="link block-4"></div>
        <div class="link block-5" v-if="showYT">
            <div class="block-5__content">
                даже<br>
                <b>YouTube</b>
            </div>
            <div class="block-5__control" @click="showYT=false">
                <svg width="11px" height="9px" viewBox="0 0 11 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Mian-15-Copy-11" transform="translate(-174.000000, -562.000000)" fill="#F8E0E0">
                            <g id="Group-6" transform="translate(103.000000, 558.000000)">
                                <polygon id="Х" points="71.4480337 4 75.619382 8.38842975 71 13 73.0393258 13 76.5 9.29338843 79.9761236 13 82 13 77.488764 8.37603306 81.8764045 4 79.9606742 4 76.5772472 7.4214876 73.4410112 4"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      showYT: true
    }
  },
  mounted () {
    // window.TagCanvas.Start('tagcanvas', 'iconTags')
  }
}
</script>

<style lang="sass" scoped>
    $wc: 13.66
    $hc: 7.4

    .hello
        flex-grow: 1
        overflow: hidden
        position: relative
        margin: -7rem -8rem -6rem
        z-index: 0

    .link
        top: 50%
        left: 50%
        position: absolute
        font-size: 2.9rem
        color: #ffffff
        transform: translate(-50%, -50%)
        display: flex
        flex-flow: column nowrap
        justify-content: center
        text-shadow: 0 0 1px #000
        text-decoration: none
        user-select: none
        overflow: hidden

        &:hover
            z-index: 10

        &__video
            top: 0
            left: 50%
            transform: translateX(-50%)
            height: 100%
            position: absolute

        &__contextus
            z-index: 3
            width: #{202 / $wc}vw
            height: #{312 / $hc}vh
            margin-left: 28.8vw
            margin-top: -4.94vh
            background: url(../../assets/images/displayAds/1.png) no-repeat center center / cover

        &__price-list
            z-index: 6
            width: #{230 / $wc}vw
            height: #{320 / $hc}vh
            margin-left: 11.7vw
            margin-top: -15.4vh
            background: url(../../assets/images/displayAds/2.png) no-repeat center center / cover

        &__social-networks
            z-index: 7
            margin-top: 10.1vh
            margin-left: 23.9vw
            width: #{290 / $wc}vw
            height: #{220 / $hc}vh
            border-radius: .7rem
            justify-content: flex-end

        &__seo
            z-index: 4
            width: #{350 / $wc}vw
            height: #{300 / $hc}vh
            margin-left: 38.3vw
            margin-top: 6.6vh
            background: url(../../assets/images/displayAds/4.png) no-repeat center center / cover

        &__cpa
            z-index: 6
            width: #{280 / $wc}vw
            height: #{210 / $hc}vh
            margin-top: 19.6vh
            margin-left: 10.9vw
            background: url(../../assets/images/displayAds/5.png) no-repeat center center / cover

        &__heat-map
            z-index: 5
            width: #{270 / $wc}vw
            height: #{450 / $hc}vh
            margin-left: -5.7vw
            margin-top: -13.3vh
            background: url(../../assets/images/displayAds/6.png) no-repeat center center / cover

        &__display-ads
            z-index: -1
            width: #{200 / $wc}vw
            height: #{300 / $hc}vh
            display: flex
            margin-left: -32.1vw
            margin-top: 0
            line-height: 1.8rem
            padding: 3rem 1.6rem 3.5rem 2.7rem
            justify-content: space-between

        &__mobile-ads
            z-index: 6
            width: #{350 / $wc}vw
            height: #{200 / $hc}vh
            margin-left: -18.5vw
            margin-top: -.8vh
            padding: 2.3rem 3rem 0 4rem
            justify-content: space-between

    .block
        &-1
            z-index: 0
            pointer-events: none
            width: #{210 / $wc}vw
            height: #{169 / $hc}vh
            margin-left: -19.6vw
            margin-top: -22.6vh
            background: url(../../assets/images/displayAds/9.png) no-repeat center center / cover

        &-2
            z-index: 1
            width: #{289 / $wc}vw
            height: #{227 / $hc}vh
            pointer-events: none
            margin-left: -16.4vw
            margin-top: 17.7vh
            background: url(../../assets/images/displayAds/10.png) no-repeat center center / cover

        &-3
            z-index: 0
            width: #{192 / $wc}vw
            height: #{254 / $hc}vh
            margin-top: 28.4vh
            margin-left: -0.3vw
            pointer-events: none
            background: url(../../assets/images/displayAds/11.png) no-repeat center center / cover

        &-4
            z-index: 0
            width: #{60 / $wc}vw
            height: #{223 / $hc}vh
            margin-left: 20.8vw
            margin-top: -16.2vh
            background: #3F3538
            pointer-events: none

        &-5
            z-index: 10
            width: #{125 / $wc}vw
            height: #{84 / $hc}vh
            margin-left: -8.3vw
            margin-top: 26.5vh
            font-size: 1.3rem
            color: #CACAE9
            text-align: center
            letter-spacing: 1px !important
            line-height: 1.8rem
            overflow: initial

            &:hover
                box-shadow: none

            &__content
                margin-left: -3.6rem
                margin-top: -.3rem

            &__control
                cursor: pointer
                width: 1.1rem
                height: 9px
                position: absolute
                top: .2rem
                right: 4.6rem

            &::after
                top: -6rem
                left: -5.4rem
                width: 23.2rem
                display: block
                content: ''
                z-index: -1
                height: 21.4rem
                pointer-events: none
                position: absolute
                background: url(../../assets/images/displayAds/12.png) no-repeat center center / cover

    .mobile-ads
        &__first
            color: #0A0AE2
            font-size: 1.6rem
            font-style: italic
            position: relative
            line-height: 1.5rem
            letter-spacing: .6rem
            text-shadow: 0 0 1px rgba(255, 255, 255, .2)

            &-1,
            &-2,
            &-3
                padding-top: 1rem

            &-2
                text-align: right

            &-3
                text-align: center

        &__last
            text-align: right
            position: relative
            font-size: 2.6rem
            color: #FFFFFF
            letter-spacing: -.3rem
            line-height: 6rem
            font-weight: bold
            font-style: italic
            text-shadow: 0 0 1px rgba(255, 255, 255, .2)

            span
                font-size: 1.6rem
                letter-spacing: -1.07px
                font-weight: normal
                font-style: normal
                vertical-align: text-bottom

    .display-ads
        &__first
            text-align: right
            font-weight: bold
            font-size: 1.6rem
            color: #000000
            letter-spacing: .282rem
            position: relative
            text-shadow: 0 0 1px rgba(255, 255, 255, .2)

        &__last
            font-size: 1.4rem
            color: #818181
            letter-spacing: 0
            position: relative
            text-shadow: 0 0 1px rgba(255, 255, 255, .2)

    .social-networks
        &__content
            padding: 3rem 3.2rem
            color: #FFFFFF
            position: relative
            line-height: 3.5rem

        &__first
            font-size: 5rem
            letter-spacing: -.312rem

        &__last
            font-weight: bold
            font-size: 4.8rem
            letter-spacing: -.3rem
</style>
