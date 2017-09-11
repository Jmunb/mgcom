<template>
  <div class="wrapper">
    <div class="scroller">
      <div class="content">
        <div class="tags">
          <div class="tags-column">
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
          <div class="tags-column">
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
          <div class="tags-column">
            <div class="one-tag__wrapper">
              <a
                      href="#"
                      class="one-tag"
                      v-bind:class="{'one-tag--disabled': tags[4].isDisabled, 'one-tag--active': !tags[4].isDisabled && tags[4].isActive }"
                      @click.stop.prevent="setTagState(4)"
              >{{ tags[4].title }}</a>
            </div>
          </div>
          <div class="tags-column">
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
    name: 'Vacancies',
    data () {
      vacanciesTags.forEach(item => {
        item.isActive = false
        item.isDisabled = false
      })

      return {
        vacancies: vacancies,
        tags: vacanciesTags
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
          return IntersecArrays(item.tags, activeIds).length
        })
      }
    },
    methods: {
      setTagState (index) {
        let excludeIds = []

        this.tags[index].isActive = !this.tags[index].isActive

        this.tags.forEach(item => {
          if (item.isActive) {
            Array.prototype.push.apply(excludeIds, item.exclude)
          }
        })

        excludeIds = Array.from(new Set(excludeIds))

        this.tags.forEach(item => {
          if (excludeIds.indexOf(item.id) > -1) {
            item.isActive = false
            item.isDisabled = true
          } else {
            item.isDisabled = false
          }
        })
      }
    },
    components: {
      OneJob
    }
  }
</script>

<style lang="sass" scoped>
  .wrapper
    flex-grow: 1
    display: flex
    background: #fff
    overflow: hidden
    position: relative
    flex-flow: row nowrap
    align-items: flex-start
    width: calc(100% - 50.2rem)
    margin: -10.4rem 0 0 23.7rem
    border-radius: 0 0 .7rem .7rem
    justify-content: space-between

  .scroller
    overflow: auto
    // width: calc(100% + 10rem)
    height: calc(100vh - 17.8rem)
    -webkit-overflow-scrolling: touch

  .content
    padding: 6.9rem 6.5rem 4.7rem


  .one-tag
    cursor: pointer
    font-size: 1.3rem
    letter-spacing: 0.05rem
    line-height: 2rem

    &--active
      color: #0A0AE2

    &--disabled
      opacity: 0.27
      pointer-events: none

    &__wrapper
      min-height: 4rem
      margin-bottom: 2.5rem

  .tags
    display: flex
    flex-flow: row nowrap
    justify-content: space-between

    &-column
      flex: 0 0 25%
      display: flex
      padding-right: 2rem
      flex-flow: column nowrap
      justify-content: flex-end

  .jobs-list
    width: 75%
    padding: 0
    list-style: none
    margin: 1.4rem 0 0 0
</style>
