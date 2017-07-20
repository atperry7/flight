/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T12:58:09-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: displaymap.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T19:30:36-05:00
 */
 import templateUrl from 'flightDisplay/displaymap/displaymap.template'

 const controller =
   class FlightDisplayMapController {
     zoom = 7
     center = [35.5175, -86.5804]
     markers = []

     origin = {}
     destination = {}

     paths = []

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

       if (this.markers.length < 2) {
         this.service.getCityData(this.markers[0], this.markers[1], null).then((data) => {
           this.addPath(data[0], data[1], this.colorArray[0])
         })
       } else {
         this.service.getCityData(this.markers[0], this.markers[1], this.markers[2]).then((data) => {
           this.addPath(data[0], data[1], this.colorArray[0])
           this.addPath(data[1], data[2], this.colorArray[1])
         })
       }

      //  if (!ng.equals($stateParams.flight, {})) {
      //    for (let city of $stateParams.flight) {
      //      if (!this.markers.includes(city.origin)) {
      //        this.markers.push(city.origin)
      //      }
       //
      //      if (!this.markers.includes(city.destination)) {
      //        this.markers.push(city.destination)
      //      }
      //    }
      //  } else {
        //  this.origin = this.service.getOriginData()
        //  this.destination = this.service.getDestinationData()
        //  this.markers.push(this.origin.city)
        //  this.markers.push(this.destination.city)
        //  this.addPath(this.origin, this.destination, '#ff0000')
      //  }
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

 export const flightDisplayMap = {
   controller,
   templateUrl,
   controllerAs: 'flightDisplayMap'
 }
