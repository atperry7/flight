/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:38:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T10:29:16-05:00
 */
 export class FlightDisplayService {
   constructor ($http, apiUrl) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
   }

   origin = ''
   destination = ''

   setOrigin (origin) {
     this.origin = origin
   }

   setDestination (destination) {
     this.destination = destination
   }

   getOrigin () {
     return this.origin
   }

   getDestination () {
     return this.destination
   }

 }
