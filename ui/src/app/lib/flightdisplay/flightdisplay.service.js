/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:38:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T15:43:57-05:00
 */
 export class FlightDisplayService {
   constructor ($http, apiUrl) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
   }

   origin = ''
   destination = ''
   originData = {}
   destinationData = {}

   setOrigin (origin) {
     this.origin = origin
   }

   setDestination (destination) {
     this.destination = destination
   }

   setOriginData (originData) {
     this.originData = originData
   }

   getOrigin () {
     return this.origin
   }

   getDestination () {
     return this.destination
   }

 }
