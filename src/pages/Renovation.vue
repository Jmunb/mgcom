<template>
    <div class="renovation">
        Реновация.
    </div>
</template>

<script>
  export default {
    name: 'renovation'
  }
</script>

<style lang="sass" scoped>
    @import "../assets/styles/mixins"
    .renovation
        text-indent: 1rem
        text-align: center
        font-size: 3rem
        font-weight: 700

        @include noDesktop
            font-size: 2.5rem
            text-indent: .9rem
            flex: 1.5 0 50%

        @include mobile
            align-self: flex-start
</style>
