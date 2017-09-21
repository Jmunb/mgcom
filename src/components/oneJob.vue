<template>
    <li class="one-job">
        <div class="one-job__num">{{ index }} / {{ jobCount }}</div>
        <div class="one-job__title">{{ job.title }}</div>
        <div class="one-job__text">{{ job.text }}</div>
        <div class="one-job__send-block">
            <div v-if="showForm" class="one-job__form">
                <div class="one-line">
                    <div class="one-line__label">От:</div>
                    <input name="email" type="email" class="one-line__input" placeholder="test@qweqwe.com">
                </div>
                <div class="one-line">
                    <div class="one-line__label"></div>
                    <textarea name="text" id="" class="one-line__textarea" placeholder="Представьтесь и напишите несколько слов о себе"></textarea>
                </div>
                <div class="one-line one-line--last">
                    <div class="one-line__label one-line__label--last">+</div>
                    <div class="one-line__file">Приложить файл</div>
                </div>
            </div>
            <a v-else href="javascript:void(0)" class="one-job__button" @click.stop.prevent="showForm=true">Отправить резюме</a>
        </div>
    </li>
</template>

<script>
export default {
  name: 'one-job',
  props: ['job', 'jobCount', 'index'],
  data () {
    return {
      showForm: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/styles/mixins"

.one-line
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    font-size: 1rem
    letter-spacing: 0.038rem

    &__label
        flex: 0 0 2.5rem
        text-align: right

        &--last
            padding-right: .5rem

    &__input
        border: 0
        color: #0A0AE2
        outline: 0
        flex-grow: 1
        text-indent: 3px
        padding: 0
        margin: -5px 0 0 0
        background: transparent

    &__textarea
        flex: 0 0 50%
        border: 0
        outline: 0
        margin: .7rem 0 0 0
        padding: 0 0 0 .5rem
        resize: none
        background: transparent
        height: 9.5rem

    &__file
        cursor: pointer
        padding-left: .6rem

    &--last
        font-size: 1.2rem
        margin-top: .3rem

.one-job
    margin-top: 5.5rem
    font-size: 1.3rem
    letter-spacing: 0.05rem
    line-height: 2rem

    @include tablet
        width: 70%

    @include mobile
        font-size: 1.2rem
        letter-spacing: 0
        line-height: 1.8rem

    &:first-of-type
        margin-top: 0

    &__title
        font-size: 2.8rem
        letter-spacing: 0
        line-height: 4rem
        margin-top: 3.5rem

        @include mobile
            font-size: 2.2rem
            line-height: 3.2rem

    &__text
        margin-top: 1.9rem

    &__send-block
        margin-top: 2.8rem

    &__form
        padding: 2rem 1.6rem
        width: 35.2rem
        height: 18.7rem
        overflow: hidden
        background: #F8F8FB
        border-radius: 2rem

        @include mobile
            width: auto

    &__button
        font-size: 1rem
        line-height: 4rem
        background: #F8F8FB
        border-radius: 2rem
        display: inline-block
        text-decoration: none
        padding: 0 1.6rem
        color: rgba(0, 0, 0, .4)
        letter-spacing: 0.038rem
        transition: color .1s linear

        &:hover
            color: rgba(0, 0, 0, 1)
</style>
