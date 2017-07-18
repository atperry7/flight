/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:29:30-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T14:20:17-05:00
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

  constructor ($map, locations, $log) {
    'ngInject'
    this.$map = $map
    this.origin = $map.getOrigin()
    this.destination = $map.getDestination()

    $log.log(`${this.destination.city}`)

    this.markers.push(this.origin.city)
    this.markers.push(this.destination.city)

    this.addPath(this.origin, this.destination, '#FF3388')
    // add path from webservice
    // $map.getMarkerByCityName('Chattanooga')
    //   .then(chattanooga => {
    //     this.addPath(knoxville, chattanooga, '#FF3388')
    //   })
  }

  addMarker (latitude, longitude) {
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
  controllerAs: '$mapCtrl',
  bindings: {
    origin: '<',
    destination: '<'
  }
}
