/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T12:58:09-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: displaymap.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T15:44:02-05:00
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

     constructor ($log, $stateParams) {
       'ngInject'
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
