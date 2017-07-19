/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:38:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T20:29:33-05:00
 */
 export class FlightDisplayService {
   constructor ($http, apiUrl, localStorageService, $log) {
     'ngInject'
     this.$log = $log
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
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

   bookFlight (origin, destination, offset, flightTime) {
     let user = this.localStorageService.get('currentUser')
     let password = this.localStorageService.get('password')
     this.$log.log(`Username Check: ${user.username} :: Password Check ${password}`)
     let credentials = { credentials: { username: user.username, password: password } }

     return this.$http({
       method: 'POST',
       url: `${this.apiUrl}/reserve/reservation`,
       params: { flightOrigin: origin, flightDestination: destination, offSet: offset, flightTime: flightTime },
       data: credentials
     }).then((response) => {
       if (response.data !== true) {
         return 'Successfully Booked Flight'
       }
       return 'Unable to book flight, try again later.'
     }, (response) => {
       return 'Unable to book flight, try again later.'
     })
   }

 }
