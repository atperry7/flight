/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:29:30-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T22:27:46-05:00
 */

import templateUrl from 'map/map.component.html'

const controller =
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []
  origin = {}
  destination = {}

  colorArray = ['#053787', '#680363', '#ff0000']

  constructor ($log, flightDisplayService, $stateParams, $q) {
    'ngInject'
    this.$log = $log
    this.$stateParams = $stateParams
    this.service = flightDisplayService

    for (let cities of this.$stateParams.flight) {
      if (!this.markers.includes(cities.origin)) {
        this.markers.push(cities.origin)
      }

      if (!this.markers.includes(cities.destination)) {
        this.markers.push(cities.destination)
      }
    }

    if (this.markers.length <= 2) {
      this.service.getCityData(this.markers[0], this.markers[1], null).then((data) => {
        this.addPath(data[0], data[1], this.colorArray[0])
      })
    } else {
      this.service.getCityData(this.markers[0], this.markers[1], this.markers[2]).then((data) => {
        this.addPath(data[0], data[1], this.colorArray[0])
        this.addPath(data[1], data[2], this.colorArray[1])
      })
    }
  }

  getTheCitiesData () {
    return this.service.getCitiesData()
  }

  getPathForMap () {
    return this.service.getPaths()
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }

  drawLines (cities) {
    if (cities.length === 2) {
      this.addPath(cities[0], cities[1], this.colorArray[0])
    } else {
      this.addPath(cities[0], cities[1], this.colorArray[0])
      this.addPath(cities[2], cities[3], this.colorArray[1])
    }
  }
}

export const flightMap = {
  controller,
  templateUrl,
  controllerAs: '$mapCtrl',
  bindings: {
    origin: '<',
    destination: '<'
  }
}
