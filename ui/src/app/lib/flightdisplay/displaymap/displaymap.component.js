/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T12:58:09-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: displaymap.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T14:37:42-05:00
 */
 import templateUrl from 'flightDisplay/displaymap/displaymap.template'

 const controller =
   class FlightDisplayMapController {
     zoom = 7
     center = [35.5175, -86.5804]
     markers = []
     paths = []
     origin = {}
     destination = {}

     constructor ($log, flightDisplayService, $stateParams) {
       'ngInject'
       this.$log = $log
       this.$stateParams = $stateParams
       this.service = flightDisplayService
       $log.log(`Testing Params Map ${this.service.getOriginData().city}`)
       if (!ng.equals($stateParams.flight, {})) {
         for (let test of $stateParams.flight) {
           $log.log(`Testing of flight params :: ${test}, ${test.origin}`)
         }
       }
       this.origin = this.service.getOriginData()
       this.destination = this.service.getDestinationData()
       this.markers.push(this.origin.city)
       this.markers.push(this.destination.city)
       this.addPath(this.origin, this.destination, '#ff0000')
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

 export const flightDisplayMap = {
   controller,
   templateUrl,
   controllerAs: 'flightDisplayMap'
 }
