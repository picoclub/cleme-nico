<template>
  <div id="map"></div>
</template>

<script>
import {hotels, gites} from '../constants/hotels.js'

const google = window.google

export default {
  props: ['hasPins'],
  data: function () {
    return {
      partyMarker: {
        latitude: 50.305572,
        longitude: 1.846593,
        title: 'Soirée - La Ferme de Mezoutre',
        animation: google.maps.Animation.DROP,
        icon: '../../static/img/icons/map/party.png',
        description: '4 Hameau du grand Mezoutre, 80150 Vironchaux, France'
      },
      coktailMarker: {
        latitude: 50.073422,
        longitude: 2.083013,
        title: 'Vin d\'honneur - La Haye',
        animation: google.maps.Animation.DROP,
        icon: '../../static/img/icons/map/cocktail.png',
        description: '80620 Domart-en-Ponthieu, France'
      },
      churchMarker: {
        latitude: 50.134154,
        longitude: 1.948464,
        title: 'Cérémonie religieuse - Abbaye de Saint-Riquier',
        animation: google.maps.Animation.DROP,
        icon: '../../static/img/icons/map/church.png',
        description: 'Pl. de l\'église, 80135 Saint-Riquier, France'
      },
      cityHallMarker: {
        latitude: 50.771957,
        longitude: 3.076710,
        title: 'Cérémonie civile - Mairie de Bousbecque',
        animation: google.maps.Animation.DROP,
        icon: '../../static/img/icons/map/city-hall.png',
        description: '19 Rue de Wervicq, 59166 Bousbecque, France'
      },
      map: null,
      bounds: null,
      markers: [],
      infowindow: null
    }
  },
  methods: {
    createMarker: function (marker) {
      const position = new google.maps.LatLng(marker.latitude, marker.longitude)
      const zIndex = typeof marker.icon !== 'undefined' ? 9999999 : 9999999 - 1
      const returnedMarker = new google.maps.Marker({
        position,
        map: this.map,
        title: marker.title,
        animation: marker.animation,
        label: marker.label,
        icon: marker.icon,
        zIndex
      })
      this.map.fitBounds(this.bounds.extend(position))
      returnedMarker.addListener('click', () => {
        if (this.infowindow !== null) {
          this.infowindow.close()
        }
        let title
        if (typeof marker.title !== 'undefined') {
          title = marker.title
          if (typeof marker.city !== 'undefined') {
            title += ` - ${marker.city}`
          }
          if (typeof marker.stars === 'number') {
            title += ` <small>${marker.stars}<span class="la la-star"></span></small>`
          }
        } else if (typeof marker.city !== 'undefined') {
          title = `${marker.city}`
          if (typeof marker.stars !== 'undefined') {
            title += ` <small>${marker.stars}<span class="la la-star"></span></small>`
          }
        }
        this.infowindow = new google.maps.InfoWindow({
          content: `
            <div class="info-window">
              <h1>${title}</h1>
              ${typeof marker.description !== 'undefined' ? `<p>${marker.description}</p>` : ''}
              ${typeof marker.type !== 'undefined' ? `<p>Type: ${marker.type}</p>` : ''}
              ${typeof marker.phone !== 'undefined' ? `<p>Téléphone: ${marker.phone}</p>` : ''}
              ${typeof marker.website !== 'undefined' ? `<p><a href="http://${marker.website}" target="_blank">${marker.website}</a>` : ''}
              ${typeof marker.email !== 'undefined' ? `<p><a href="mailto:${marker.email}">${marker.email}</a>` : ''}
            </div>
          `
        })
        this.infowindow.open(this.map, returnedMarker)
      })
      return returnedMarker
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds()
    const element = document.getElementById('map')
    this.map = new google.maps.Map(element, {})

    this.markers.push(
      this.createMarker(this.partyMarker),
      this.createMarker(this.coktailMarker),
      this.createMarker(this.churchMarker)
    )

    if (this.hasPins) {
      hotels.forEach((hotel) => {
        this.markers.push(
          this.createMarker({
            ...hotel,
            title: hotel.name,
            type: 'Hôtel'
          })
        )
      })

      gites.forEach((bnb) => {
        this.markers.push(
          this.createMarker({
            ...bnb,
            title: bnb.name !== '' ? bnb.name : bnb.owner,
            type: 'Chambre d\'hôte'
          })
        )
      })
    } else {
      this.markers.push(
        this.createMarker(this.cityHallMarker)
      )
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  #map {
    width: 100%;
    height: calc(100vh - 176px);
    @media screen and (min-width: $screen-sm) {
      height: calc(100vh - 158px);
    }
    @media screen and (min-width: $screen-md) {
      height: calc(100vh - 164px);
    }
  }

  .info-window {
    padding: 10px 0;

    p {
      text-align: left;
      margin: 0;
      &:first-of-type {
        margin-top: 10px;
      }
    }

    h1 {
      margin: 0;
    }
  }
</style>