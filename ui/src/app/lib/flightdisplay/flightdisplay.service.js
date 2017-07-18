/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:38:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T16:18:27-05:00
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

   setDestinationData (destinationData) {
     this.destinationData = destinationData
   }

   getOriginData () {
     return this.originData
   }

   getDestinationData () {
     return this.destinationData
   }

   getOrigin () {
     return this.origin
   }

   getDestination () {
     return this.destination
   }

   getMarkerByCityName (name) {
     return this.$http({
       method: 'GET',
       url: `${this.apiUrl}/location/name`,
       params: { name: name }
     }).then((response) => {
       if (response.data !== undefined) {
         return response.data
       }
       return false
     }, (response) => {
       return false
     })
       // .get(`${this.apiUrl}/location/name`, { params: { name } })
       // .then(result => result.data)
   }

 }
