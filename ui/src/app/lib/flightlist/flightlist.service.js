/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:54:48-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightlist.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:00:57-05:00
 */
 export class FlightListService {
   constructor ($http, apiUrl, $log, localStorageService) {
     'ngInject'
     this.localStorageService = localStorageService
     this.$http = $http
     this.apiUrl = apiUrl
     this.$log = $log
   }

   getCurrentList () {
     return this.$http({
       method: 'GET',
       url: `${this.apiUrl}/user/bookedflights/${this.localStorageService.get('currentUser').username}`
     }).then((response) => {
       if (response.data !== undefined) {
         return response.data
       }
       return false
     }, (response) => {
       return false
     })
   }

 }
