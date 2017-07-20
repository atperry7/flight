/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:38:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T22:42:15-05:00
 */
 export class FlightDisplayService {
   constructor ($http, apiUrl, localStorageService, $log, $q) {
     'ngInject'
     this.$log = $log
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
     this.$q = $q
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

   getCityData (cityOne, cityTwo, cityThree) {
     return this.$http({
       method: 'GET',
       url: `${this.apiUrl}/location/names`,
       params: { cityOne: cityOne, cityTwo: cityTwo, cityThree: cityThree }
     }).then((response) => {
       if (response.data !== undefined) {
         return response.data
       }
       return false
     }, (response) => {
       return false
     })
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

   bookFlight (origin, destination, flight) {
     let user = this.localStorageService.get('currentUser')
     let password = this.localStorageService.get('password')
     this.$log.log(`Username Check: ${user.username} :: Password Check ${password}`)

     return this.$http({
       method: 'POST',
       url: `${this.apiUrl}/reserve/reservation`,
       params: { flightOrigin: origin, flightDestination: destination, username: user.username, password: password },
       data: flight
     }).then((response) => {
       this.$log.log(`${response.data}`)
       if (response.data === true) {
         return 'Successfully Booked Flight'
       }
       return 'Unable to book flight, try again later.'
     }, (response) => {
       return 'Unable to book flight, try again later.'
     })
   }

 }
