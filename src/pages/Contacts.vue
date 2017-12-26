<template>
  <div class="content">
    <address class="address-wrapper">

      <div class="address">
        <p class="one-line">
          <a class="link" href="callto://+74952133451">8 (495) 213-34-51</a><br>
          <a class="link" href="mailto:mgcom@mgcom.ru">mgcom@mgcom.ru</a>
        </p>

        <p class="one-line">
          107031, Москва,<br>
          Петровка 15/13, стр. 5,<br>
          4 этаж.
        </p>
      </div>

      <div class="address-route" v-if="position">

        <p class="one-line" v-if="destination">
          {{destination}} метров от вас.
        </p>

        <p class="one-line one-line--no-margin">
          Проложить маршрут<br>
          <a href="#" class="blue-link" @click.prev.stop="getDirections('DRIVING')">на машине</a>,
          <a href="#" class="blue-link" @click.prev.stop="getDirections('TRANSIT')">метро</a> или<br>
          <a href="#" class="blue-link" @click.prev.stop="getDirections('WALKING')">пешком</a>.
        </p>
      </div>

    </address>

    <div class="map-wrapper">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import MapStyles from '../maps-style.json'

export default {
  name: 'hello',
  data () {
    return {
      map: null,
      uluru: {lat: 55.763937, lng: 37.616309},
      marker: null,
      marker1: null,
      position: null,
      destination: null,
      directionsDisplay: null
    }
  },
  mounted () {
    this.directionsDisplay = new window.google.maps.DirectionsRenderer()

    this.map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      minZoom: 11,
      center: this.uluru,
      mapTypeControl: false,
      fullscreenControl: false,
      styles: MapStyles
    })

    this.directionsDisplay.setMap(this.map)

    let marker = new window.google.maps.Marker({
      icon: 'http://mgcom.ru//static/marker.svg?v=123',
      position: this.uluru,
      map: this.map
    })
    setTimeout(() => {
      this.marker = marker
      this.getLocation()
    }, 1000)
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.position = pos

          let marker = new window.google.maps.Marker({
            icon: 'http://mgcom.ru//static/point.svg',
            position: pos,
            map: this.map
          })
          this.getDistance()
          this.marker1 = marker
        })
      }
    },
    getDistance () {
      let origin = new window.google.maps.LatLng(this.uluru.lat, this.uluru.lng)
      let destination = new window.google.maps.LatLng(this.position.lat, this.position.lng)
      let result = window.google.maps.geometry.spherical.computeDistanceBetween(origin, destination)
      if (result) {
        this.destination = Math.round(result)
      }
    },
    getDirections (type) {
      let origin = new window.google.maps.LatLng(this.uluru.lat, this.uluru.lng)
      let destination = new window.google.maps.LatLng(this.position.lat, this.position.lng)
      let directionsService = new window.google.maps.DirectionsService()
      let request = {
        origin: origin,
        destination: destination,
        travelMode: type,
        transitOptions: {
          modes: ['SUBWAY']
        }
      }
      directionsService.route(request, (response, status) => {
        console.log(response, status)
        if (status === 'OK') {
          this.marker.setMap(null)
          this.marker1.setMap(null)
          this.directionsDisplay.setDirections(response)
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  $one_column: 100% / 36
  $one_inner_column: 100% / 30
  $one_row_tablet_p: 100% / 44
  $one_row_tablet_l: 100% / 36
  $one_row_mobile: 100% / 52

  @import "../assets/styles/mixins"

  #map
    @include desktop
      height: 40vh

  .content
    display: flex
    font-size: 1.3rem
    line-height: 2rem
    letter-spacing: .02rem

    @include desktop
      flex: 0 0 40vh
      align-self: center
      flex-flow: row nowrap
      width: $one_column * 30
      align-items: stretch
      justify-content: space-between

    @include noDesktop
      flex-flow: column nowrap
      justify-content: flex-end

    @include tablet
      width: $one_column * 24

    @include mobile
      flex-grow: 1
      width: $one_column * 27

  .address
    @include tablet
      padding-right: $one_inner_column * 4

    &-wrapper
      display: flex
      font-style: normal

      @include desktop
        flex-grow: 1
        flex-flow: column nowrap
        justify-content: space-between
        padding-right: $one_inner_column * 2

      @include tablet
        white-space: nowrap
        width: $one_column * 24
        flex-flow: row nowrap
        justify-content: flex-start

      @include tablet('portrait')
        padding-bottom: $one_row_tablet_p * 5

      @include tablet('landscape')
        padding-bottom: $one_row_tablet_l * 5

      @include mobile
        padding-bottom:
        flex-flow: column nowrap
        justify-content: flex-start
        padding-bottom: $one_row_mobile * 4

  .map
    border: 0
    width: 100%
    height: 100%
    background: no-repeat center center / 10rem url(../assets/images/spinner.gif)
    border-radius: .4rem

    &-wrapper
      @include desktop
        flex: 0 0 $one_inner_column * 18

      @include tablet('portrait')
        height: calc( (100vh - 15.9rem) * (6 / 11) )

      @include tablet('landscape')
        height: calc( (100vh - 14.1rem) * (4 / 9) )

      @include mobile
        height: calc( (100vh - 9.6rem) * (23 / 52) )

  .blue-link
    color: #0A0AE2

  .one-line
    margin: 0 0 2rem

    &:last-child
      @include tablet
        margin: 0

    &--no-margin
      margin: 0
</style>
