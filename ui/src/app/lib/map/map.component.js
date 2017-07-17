/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:29:30-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T11:39:44-05:00
 */

import templateUrl from 'map/map.component.html'

const controller =
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor ($map, locations) {
    'ngInject'
    this.$map = $map

    // add markers from an angular constant
    const { memphis, nashville, knoxville } = locations
    const markers = [memphis, nashville, knoxville]

    markers.forEach(marker => this.addMarker(marker))

    // add paths manually
    const paths = [
      [memphis, nashville, '#CC0099'],
      [nashville, knoxville, '#AA1100']
    ]

    paths.forEach(args => this.addPath(...args))

    // add path from webservice
    $map.getMarkerByCityName('Chattanooga')
      .then(chattanooga => {
        this.addPath(knoxville, chattanooga, '#FF3388')
      })
  }

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
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

}

export const flightMap = {
  controller,
  templateUrl,
  controllerAs: '$mapCtrl'
}
