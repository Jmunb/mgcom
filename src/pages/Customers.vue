<template>
    <div class="page-absolute">
        <div class="customer customer-connected" onclick=""></div>
        <div class="customer customer-alfa" onclick=""></div>

        <div class="customer customer-citroen" onclick=""></div>
        <div class="customer customer-worldclass" onclick=""></div>
        <div class="customer customer-ecco" onclick=""></div>
        <div class="customer customer-beeline" onclick=""></div>
        <div class="customer customer-mediamarkt" onclick=""></div>
        <div class="customer customer-rocket" onclick=""></div>
        <div class="customer customer-obi" onclick=""></div>
        <div class="customer customer-kia" onclick=""></div>
        <div class="customer customer-open" onclick=""></div>
        <div class="customer customer-sinlight" onclick=""></div>
        <div class="customer customer-pegout" onclick=""></div>

        <div class="customer customer-conscience" onclick=""></div>
        <div class="customer customer-intersection" onclick=""></div>
        <div class="customer customer-google" onclick=""></div>
        <div class="customer customer-mvideo" onclick=""></div>
        <div class="customer customer-aliexpress" onclick=""></div>
        <div class="customer customer-fromhands" onclick=""></div>
        <div class="customer customer-samsung" onclick=""></div>
        <div class="customer customer-binbank" onclick=""></div>
        <div class="customer customer-sminex" onclick=""></div>
        <div class="customer customer-leader" onclick=""></div>
        <div class="customer customer-rolf" onclick=""></div>
        <div class="customer customer-vw" onclick=""></div>
        <div class="customer customer-pfizer" onclick=""></div>
        <div class="customer customer-loreal" onclick=""></div>
        <div class="customer customer-rigla" onclick=""></div>
        <div class="customer customer-inventive" onclick=""></div>
        <div class="customer customer-rivgosh" onclick=""></div>
        <div class="customer customer-mic" onclick=""></div>
        <div class="customer customer-children-world" onclick=""></div>
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
        filter: blur(.7rem) grayscale(100%)
        transition: filter .2s ease-in
        background: no-repeat center center / contain

        @include noDesktop
            cursor: pointer
            position: relative
            z-index: 1

        &:hover
            filter: blur(0) grayscale(100%)

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
            margin-top: 10rem
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




        &-connected
            width: 25.1rem
            height: 5.9rem
            margin-left: 0
            background-image: url(../assets/images/clients/connected.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

                &:focus
                    filter: blur(0) grayscale(100%)

        &-conscience
            width: 22.4rem
            height: 6.4rem
            margin-top: 9rem
            margin-left: -40%
            background-image: url(../assets/images/clients/conscience.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-intersection
            width: 45.4rem
            height: 14.2rem
            margin-top: 14rem
            margin-left: 0
            background-image: url(../assets/images/clients/intersection.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-google
            width: 21rem
            height: 7.1rem
            margin-top: 11rem
            margin-left: 25%
            background-image: url(../assets/images/clients/google.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-mvideo
            width: 22.6rem
            height: 6.7rem
            margin-top: 6rem
            margin-left: 10%
            background-image: url(../assets/images/clients/mvideo.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-aliexpress
            width: 28.6rem
            height: 6.9rem
            margin-top: 11rem
            margin-left: -30%
            background-image: url(../assets/images/clients/aliexpress.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-alfa
            width: 37.8rem
            height: 11.2rem
            margin-top: 9rem
            margin-left: -41%
            background-image: url(../assets/images/clients/alfa.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

                &:active
                    filter: blur(0) grayscale(100%)


        &-fromhands
            width: 24.8rem
            height: 5.8rem
            margin-top: 5rem
            margin-left: 17%
            background-image: url(../assets/images/clients/fromhands.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-samsung
            width: 39.6rem
            height: 6.2rem
            margin-top: 15rem
            margin-left: 20%
            background-image: url(../assets/images/clients/samsung.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-binbank
            width: 37.3rem
            height: 6.7rem
            margin-top: 11rem
            margin-left: -20%
            background-image: url(../assets/images/clients/binbank.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-sminex
            width: 33rem
            height: 7.1rem
            margin-top: 7rem
            margin-left: 0
            background-image: url(../assets/images/clients/sminex.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-leader
            width: 27.8rem
            height: 6.4rem
            margin-top: 11rem
            margin-left: -40%
            background-image: url(../assets/images/clients/leader.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-rolf
            width: 29.2rem
            height: 8.6rem
            margin-top: 5rem
            margin-left: -30%
            background-image: url(../assets/images/clients/rolf.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-vw
            width: 17rem
            height: 16.4rem
            margin-top: 4rem
            margin-left: 40%
            background-image: url(../assets/images/clients/vw.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-pfizer
            width: 23.2rem
            height: 13.2rem
            margin-top: 0
            margin-left: -10%
            background-image: url(../assets/images/clients/pfizer.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-loreal
            width: 23rem
            height: 7.2rem
            margin-top: 5rem
            margin-left: 30%
            background-image: url(../assets/images/clients/loreal.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-rigla
            width: 32.1rem
            height: 8.6rem
            margin-top: 4rem
            margin-bottom: -10rem
            margin-left: 20%
            background-image: url(../assets/images/clients/rigla.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-inventive
            width: 12rem
            height: 12rem
            margin-top: 11rem
            margin-left: -40%
            background-image: url(../assets/images/clients/inventive.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-rivgosh
            width: 23.1rem
            height: 4.5rem
            margin-top: 7rem
            margin-left: -20%
            background-image: url(../assets/images/clients/rivgosh.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-mic
            width: 23.5rem
            height: 8.3rem
            margin-top: 11rem
            margin-left: 30%
            background-image: url(../assets/images/clients/mic.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem

        &-children-world
            width: 21rem
            height: 7.4rem
            margin-top: 9rem
            margin-left: 0
            background-image: url(../assets/images/clients/children-world.png)

            @include noDesktop
                width: 14.2rem
                height: 9.1rem
                margin-top: 9.1rem
</style>
