<template>
  <div class="wrapper">
    <div class="content">
      <div class="tags">
        <div class="tags-column tags-column-1">
          <div class="one-tag__wrapper">
            <a
                href="#"
                class="one-tag"
                v-bind:class="{'one-tag--disabled': tags[0].isDisabled, 'one-tag--active': !tags[0].isDisabled && tags[0].isActive}"
                @click.stop.prevent="setTagState(0)"
            >{{ tags[0].title }}</a>
          </div>
          <div class="one-tag__wrapper">
            <a
                    href="#"
                    class="one-tag"
                    v-bind:class="{'one-tag--disabled': tags[1].isDisabled, 'one-tag--active': !tags[1].isDisabled && tags[1].isActive }"
                    @click.stop.prevent="setTagState(1)"
            >{{ tags[1].title }}</a>
          </div>
        </div>
        <div class="tags-column tags-column-2">
          <div class="one-tag__wrapper">
            <a
                    href="#"
                    class="one-tag"
                    v-bind:class="{'one-tag--disabled': tags[2].isDisabled, 'one-tag--active': !tags[2].isDisabled && tags[2].isActive }"
                    @click.stop.prevent="setTagState(2)"
            >{{ tags[2].title }}</a>
          </div>
          <div class="one-tag__wrapper">
            <a
                    href="#"
                    class="one-tag"
                    v-bind:class="{'one-tag--disabled': tags[3].isDisabled, 'one-tag--active': !tags[3].isDisabled && tags[3].isActive }"
                    @click.stop.prevent="setTagState(3)"
            >{{ tags[3].title }}</a>
          </div>
        </div>
        <div class="tags-column tags-column-3">
          <div class="one-tag__wrapper">
            <a
                    href="#"
                    class="one-tag"
                    v-bind:class="{'one-tag--disabled': tags[4].isDisabled, 'one-tag--active': !tags[4].isDisabled && tags[4].isActive }"
                    @click.stop.prevent="setTagState(4)"
            >{{ tags[4].title }}</a>
          </div>
        </div>
        <div class="tags-column tags-column-4">
          <div class="one-tag__wrapper">
            <a
                    href="#"
                    class="one-tag"
                    v-bind:class="{'one-tag--disabled': tags[5].isDisabled, 'one-tag--active': !tags[5].isDisabled && tags[5].isActive }"
                    @click.stop.prevent="setTagState(5)"
            >{{ tags[5].title }}</a>
          </div>
          <div class="one-tag__wrapper">
            <a
                    href="#"
                    class="one-tag"
                    v-bind:class="{'one-tag--disabled': tags[6].isDisabled, 'one-tag--active': !tags[6].isDisabled && tags[6].isActive }"
                    @click.stop.prevent="setTagState(6)"
            >{{ tags[6].title }}</a>
          </div>
        </div>
      </div>
      <ul class="jobs-list">
        <one-job
          v-for="(job, index) in filterVacancies"
          :key="job.id"
          :job="job"
          :index="index + 1"
          :jobCount="filterVacancies.length"
        ></one-job>
      </ul>
    </div>
  </div>
</template>

<script>
  import OneJob from '../components/oneJob.vue'
  import vacancies from '../vacancies.json'
  import vacanciesTags from '../vacancies-tags.json'

  function IntersecArrays (A = [], B = []) {
    let m = A.length
    let n = B.length
    let c = 0
    let C = []

    for (let i = 0; i < m; i++) {
      let j = 0
      let k = 0

      while (B[j] !== A[ i ] && j < n) j++
      while (C[k] !== A[ i ] && k < c) k++
      if (j !== n && k === c) C[c++] = A[ i ]
    }
    return C
  }

  export default {
    name: 'vacancies',
    data () {
      vacanciesTags.forEach(item => {
        item.isActive = false
        item.isDisabled = false
      })

      return {
        vacancies: vacancies,
        tags: vacanciesTags,
        activeTage: 0
      }
    },
    computed: {
      filterVacancies () {
        let activeIds = []

        this.tags.forEach(item => {
          if (item.isActive) {
            activeIds.push(item.id)
          }
        })

        return !activeIds.length ? this.vacancies : this.vacancies.filter(item => {
          return IntersecArrays(item.tags, activeIds).length === activeIds.length
        })
      }
    },
    methods: {
      setTagState (index) {
        this.tags.forEach((item, i) => {
          if (i === index) {
            this.tags[i].isActive = !this.tags[i].isActive
          } else {
            this.tags[i].isActive = false
          }
        })
      }
    },
    components: {
      OneJob
    }
  }
</script>

<style lang="sass">
  @import "../assets/styles/mixins"

  .app--route-vacancies
    @include desktop
      .logo,
      .footer,
      .mobile-logo
        z-index: 2
        position: fixed

      .logo
        top: 7rem
        left: 8rem

      .mobile-logo
        top: 7rem
        right: 8rem

      .footer
        height: 0
        bottom: 6rem
        padding: 0 8rem

</style>
<style lang="sass" scoped>
  @import "../assets/styles/mixins"

  $one_column: 100% / 36

  .wrapper
    flex-grow: 1
    display: flex
    position: relative
    flex-flow: row nowrap
    align-items: flex-start
    justify-content: space-between

    @include desktop
      margin-top: -7rem
      width: $one_column * 22
      align-self: center

      &::before
        top: 0
        left: 0
        right: 0
        z-index: -1
        content: ''
        display: block
        margin: 0 auto
        position: fixed
        background: #ffffff
        height: calc(100% - 17rem)
        border-radius: 0 0 .7rem .7rem
        width: calc( (100% - 16rem) * .6111 )


      &::after
        left: 0
        bottom: 0
        content: ''
        width: 100%
        height: 17rem
        display: block
        position: fixed
        background: #F8F8FB

    @include noDesktop
      width: 75%

    @include mobile
      margin: 0 -1.9rem -4.5rem

  .content
    @include desktop
      padding: 6.9rem 6.5rem 14rem

    @include tablet
      display: flex
      flex-flow: column nowrap
      justify-content: space-between

  .one-tag
    &--active
      color: #0A0AE2

    &--disabled
      opacity: 0.27
      pointer-events: none

    &__wrapper
      min-height: 4rem
      margin-bottom: 2.5rem

      @include mobile
        margin-bottom: 1.5rem

  .tags
    font-size: 1.3rem
    letter-spacing: 0.05rem
    line-height: 1.9rem
    display: flex
    flex-flow: row nowrap
    justify-content: space-between

    @include tablet
      padding: 1rem 4.7rem

    @include tablet('portrait')
      padding: .5rem 3.6rem
      flex-flow: row wrap

    @include mobile
      flex-flow: row wrap
      padding-left: 2.7rem
      font-size: 1.2rem
      line-height: 1.8rem

    &-column
      flex: 0 0 25%
      display: flex
      padding-right: 2rem
      flex-flow: column nowrap
      justify-content: flex-end

      &-3
        @include tablet('portrait')
          padding: 0

        @include mobile
          flex: 0 0 100%
          justify-content: flex-start

      &-4
        @include tablet('portrait')
          order: 0
          padding: 0
          flex: 0 0 100%
          flex-flow: row nowrap
          justify-content: flex-start

        @include mobile
          flex: 0 0 100%

        .one-tag__wrapper
          @include mobile
            &:first-child
              order: 1

          @include tablet('portrait')
            padding-right: 2rem
            flex: 0 0 38%

            &:first-child
              order: 1

      &-1,
      &-2,
      &-3
        @include tablet('portrait')
          order: 1

        @include mobile
          order: 1

      @include mobile
        padding: 0
        flex-flow: row nowrap


      &-1,
      &-2
        @include mobile
          flex: 0 0 50%
          flex-flow: column nowrap
          justify-content: flex-start
          align-content: flex-start


      &-3,
      &-4
        .one-tag__wrapper
          @include mobile
            flex: 0 0 50%

  .jobs-list
    padding: 0
    list-style: none
    margin: 1.4rem 0 0 0

    @include desktop
      width: 75%

    @include noDesktop
      background: #fff
      padding: 4.6rem
      margin-bottom: -8rem
      border-radius: .7rem .7rem 0 0

    @include tablet('portrait')
      padding: 3.5rem
      margin-bottom: -7rem

    @include mobile
      padding: 2.7rem
      overflow: hidden
      margin: 0

</style>
